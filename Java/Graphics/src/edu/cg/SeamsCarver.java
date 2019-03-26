package edu.cg;

import java.awt.*;
import java.awt.image.BufferedImage;

public class SeamsCarver extends ImageProcessor {

    // MARK: An inner interface for functional programming.
    @FunctionalInterface
    interface ResizeOperation {
        BufferedImage resize();
    }

    // MARK: Fields
    private int numOfSeams;
    private ResizeOperation resizeOp;
    private boolean[][] imageMask;

    //Field that we added
    private final long MAX_INT = Integer.MAX_VALUE;
    private int[][] xIndices;
    private int currentMinimumXIndex;
    private int[][] seams;
    private int[][] greyScaleImageMatrix;
    private int[][] minimumPathsMatrix;
    private boolean[][] updatedMask;
    private long[][] currentCostMatrix;
    private boolean[][] updatedMaskAfterSeamCarving;
    private int currentIndex;

    public SeamsCarver(Logger logger, BufferedImage workingImage, int outWidth, RGBWeights rgbWeights,
                       boolean[][] imageMask) {
        super((s) -> logger.log("Seam carving: " + s), workingImage, rgbWeights, outWidth, workingImage.getHeight());

        numOfSeams = Math.abs(outWidth - inWidth);
        this.imageMask = imageMask;
        if (inWidth < 2 | inHeight < 2)
            throw new RuntimeException("Can not apply seam carving: workingImage is too small");

        if (numOfSeams > inWidth / 2)
            throw new RuntimeException("Can not apply seam carving: too many seams...");

        // Setting resizeOp by with the appropriate method reference
        if (outWidth > inWidth) {
            logger.log("Preparing for Increasing image size...");
            resizeOp = this::increaseImageWidth;
        } else if (outWidth < inWidth) {
            logger.log("Preparing for reducing image size...");
            resizeOp = this::reduceImageWidth;
        } else
            resizeOp = this::duplicateWorkingImage;


        if (numOfSeams > 0) {
            initializeVariable();
            calculateAllSeams();
        }

        this.logger.log("preliminary calculations were ended.");
    }

    public BufferedImage resize() {
        return this.resizeOp.resize();
    }


    private void initializeVariable() {
        currentIndex = 0;
        updatedMaskAfterSeamCarving = null;
        currentCostMatrix = new long[inHeight][inWidth];
        minimumPathsMatrix = new int[inHeight][inWidth];
        seams = new int[numOfSeams][inHeight];
        updatedMaskAfterSeamCarving = new boolean[inHeight][outWidth];
        buildGreyScaledImageMatrix();
        buildXIndices();
        buildShiftedMask();
    }

    private void buildGreyScaledImageMatrix() {
        BufferedImage greyscaleImage = greyscale();
        greyScaleImageMatrix = new int[inHeight][inWidth];
        forEach((y, x) -> greyScaleImageMatrix[y][x] = new Color(greyscaleImage.getRGB(x, y)).getBlue());
    }

    private void buildXIndices() {
        xIndices = new int[inHeight][inWidth];
        forEach((y, x) -> xIndices[y][x] = x);
    }

    private void buildShiftedMask() {
        updatedMask = new boolean[inHeight][inWidth];
        forEach((y, x) -> updatedMask[y][x] = imageMask[y][x]);
    }


    private BufferedImage reduceImageWidth() {
        int[][] workingImageMatrix = imageToMatrix(workingImage);

        logger.log("Reducing scaling done!");

        return getResizedDownImage(workingImageMatrix);
    }

    private BufferedImage getResizedDownImage(int[][] workingImageMatrix) {
        BufferedImage ans = newEmptyOutputSizedImage();
        setForEachWidth(outWidth);

        forEach((y, x) -> {
            Color color = new Color(workingImageMatrix[y][xIndices[y][x]]);
            ans.setRGB(x, y, color.getRGB());
            updatedMaskAfterSeamCarving[y][x] = updatedMask[y][x];
        });

        return ans;
    }

    private BufferedImage increaseImageWidth() {
        int[][] workingImageMatrix = imageToMatrix(workingImage);

        logger.log("increase scaling done!");

        return getResizedUpImage(workingImageMatrix);
    }


    private BufferedImage getResizedUpImage(int[][] workingImageMatrix) {
        BufferedImage ans = newEmptyOutputSizedImage();
        for (int y = 0; y < inHeight; y++) {
            addPixelsBySeams(workingImageMatrix, ans, y);
        }

        return ans;
    }


    private void addPixelsBySeams(int[][] inputImage, BufferedImage outputImage, int column) {
        int currentIndex = 0;
        for (int row = 0; row < inWidth; row++) {
            Color c = new Color(inputImage[column][row]);
            for (int i = 0; i < seams.length; i++) {
                setOutputImageAndMask(outputImage, c, currentIndex, column, row);
                if (row == seams[i][column]) {
                    currentIndex++;
                    if (i == seams.length - 1) {
                        setOutputImageAndMask(outputImage, c, currentIndex, column, row);
                    }
                }
            }
        }
    }

    private void setOutputImageAndMask(BufferedImage outputImage, Color c, int currentIndex, int column, int row) {
        outputImage.setRGB(row + currentIndex, column, c.getRGB());
        updatedMaskAfterSeamCarving[column][row + currentIndex] = imageMask[column][row];
    }

    private void calculateAllSeams() {
        logger.log("Started calculating all seams...");

        while (currentIndex < numOfSeams) {
            calculateCostsMatrix();
            resetCurrentMinimumIndex();
            updateGlobalMinXIndex();
            updateAccordingToSeam();
            currentIndex++;
        }

        logger.log("Done calculating all seams!");

    }

    private void resetCurrentMinimumIndex() {
        currentMinimumXIndex = 0;
    }

    private int getHeightMinusOne() {
        return inHeight - 1;
    }

    private void updateAccordingToSeam() {
        for (int y = getHeightMinusOne(); y > 0; y--) {
            insertIntoSeams(y);
            shiftLeft(y);
            updateCurrentMinimumXIndex(y);
        }
    }

    private void insertIntoSeams(int y) {
        seams[currentIndex][y] = xIndices[y][currentMinimumXIndex];
    }

    private void updateCurrentMinimumXIndex(int y) {
        currentMinimumXIndex = minimumPathsMatrix[y][currentMinimumXIndex];
    }

    private void shiftLeft(int y) {
        for (int x = currentMinimumXIndex; x < getCurrentWidth() - 1; x++) {
            shiftXIndicesLeft(y, x);
            shiftGreyScaleMatrixLeft(y, x);
            shiftUpdateMatrixLeft(y, x);
        }
    }

    private void shiftXIndicesLeft(int y, int x) {
        xIndices[y][x] = xIndices[y][x + 1];
    }

    private void shiftGreyScaleMatrixLeft(int y, int x) {
        greyScaleImageMatrix[y][x] = greyScaleImageMatrix[y][x + 1];
    }

    private void shiftUpdateMatrixLeft(int y, int x) {
        updatedMask[y][x] = updatedMask[y][x + 1];
    }

    private void updateGlobalMinXIndex() {
        for (int x = 0; x < getCurrentWidth(); x++) {
            currentMinimumXIndex = shouldUpdateMinimumXIndex(x) ? x : currentMinimumXIndex;
        }
    }

    private boolean shouldUpdateMinimumXIndex(int x) {
        return currentCostMatrix[getHeightMinusOne()][x] < currentCostMatrix[getHeightMinusOne()][currentMinimumXIndex];
    }

    private void calculateCostsMatrix() {
        long currentMinimum;
        for (int y = 0; y < inHeight; y++) {
            for (int x = 0; x < getCurrentWidth(); x++) {
                currentMinimum = calculateMinCost(y, x);
                minimumPathsMatrix[y][x] = currentMinimumXIndex;
                currentCostMatrix[y][x] = calculatePixelEnergy(y, x) + currentMinimum;
            }
        }
    }

    private long calculateMinCost(int y, int x) {
        currentMinimumXIndex = x;
        long currentMinimum = 0;

        if (y > 0) {
            currentMinimum = updateMin(y, x);
        }

        return currentMinimum;
    }

    private long updateMin(int y, int x) {
        long fromLeft, fromRight, fromCenter;
        boolean hasLeft = x > 0;
        boolean hasRight = x + 1 < getCurrentWidth();
        boolean inCorner = !(hasLeft && hasRight);
        long currentMinimum;
        fromCenter = currentCostMatrix[y - 1][x] + calculateForwardLookingCost(y, x, 0, inCorner);
        fromLeft = hasLeft ? currentCostMatrix[y - 1][x - 1] + calculateForwardLookingCost(y, x, -1, inCorner) : MAX_INT;
        fromRight = hasRight ? currentCostMatrix[y - 1][x + 1] + calculateForwardLookingCost(y, x, 1, inCorner) : MAX_INT;
        currentMinimum = calcMinOutOfThree(fromCenter, fromLeft, fromRight);
        updateMinXIndex(x, fromLeft, fromRight, hasLeft, hasRight, currentMinimum);

        return currentMinimum;
    }

    private long calculateForwardLookingCost(int i, int j, int direction, boolean inCorner) {
        long centerCost = inCorner ? 0 : Math.abs(greyScaleImageMatrix[i][j + 1] - greyScaleImageMatrix[i][j - 1]);
        switch (direction) {
            case -1:
                return (Math.abs(greyScaleImageMatrix[i - 1][j] - greyScaleImageMatrix[i][j - 1])) + centerCost;
            case 0:
                return centerCost;

            case 1:
                return (Math.abs(greyScaleImageMatrix[i - 1][j] - greyScaleImageMatrix[i][j + 1])) + centerCost;
            default:
                System.out.println("Error - cannot find path from where seam arrived - expected direction = -1 | 0 | 1 and got : " + direction);
        }
        return 0;
    }

    private long calcMinOutOfThree(long first, long second, long third) {
        return Math.min(first, Math.min(second, third));
    }

    private void updateMinXIndex(int x, long fromLeft, long fromRight, boolean hasLeft, boolean hasRight, long currentMinimum) {
        if (currentMinimum == fromLeft && hasLeft) {
            moveCurrentMinimumXIndexLeft(x);
        } else if (currentMinimum == fromRight && hasRight) {
            moveCurrentMinimumXIndexRight(x);
        }
    }

    private void moveCurrentMinimumXIndexLeft(int x) {
        currentMinimumXIndex = x - 1;
    }

    private void moveCurrentMinimumXIndexRight(int x) {
        currentMinimumXIndex = x + 1;
    }

    private long calculatePixelEnergy(int y, int x) {
        if (updatedMask[y][x]) {
            return MAX_INT;
        }

        int current = greyScaleImageMatrix[y][x];
        int E1 = greyScaleImageMatrix[y][getNextIndex(x, getCurrentWidth())];
        int E2 = greyScaleImageMatrix[getNextIndex(y, inHeight)][x];

        return (Math.abs(current - E1) + Math.abs(current - E2));
    }

    private int getNextIndex(int index, int toCompare) {
        return index + 1 < toCompare ? index + 1 : index - 1;
    }

    private int getCurrentWidth() {
        return inWidth - currentIndex;
    }

    private int[][] imageToMatrix(BufferedImage image) {
        int[][] imageMatrix = new int[image.getHeight()][image.getWidth()];

        for (int y = 0; y < image.getHeight(); y++) {
            for (int x = 0; x < image.getWidth(); x++) {
                Color c = new Color(workingImage.getRGB(x, y));
                int red = c.getRed();
                int blue = c.getBlue();
                int green = c.getGreen();
                c = new Color(red, green, blue);
                int colorInInt = c.getRGB();
                imageMatrix[y][x] = colorInInt;
            }
        }

        return imageMatrix;
    }

    public BufferedImage showSeams(int seamColorRGB) {
        logger.log("Preparing to show seams...");

        BufferedImage ans = duplicateWorkingImage();

        for (int i = 0; i < numOfSeams; i++) {
            int[] currentSeam = seams[i];
            for (int j = 0; j < currentSeam.length; j++) {
                ans.setRGB(currentSeam[j], j, seamColorRGB);
            }
        }

        logger.log("Done showing seams!");

        return ans;
    }

    public boolean[][] getUpdatedMaskAfterSeamCarving() {
        return updatedMaskAfterSeamCarving != null ? updatedMaskAfterSeamCarving : imageMask;
    }
}


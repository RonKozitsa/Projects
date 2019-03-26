package edu.cg;

import java.awt.Color;
import java.awt.image.BufferedImage;

public class ImageProcessor extends FunctioalForEachLoops {

    // MARK: fields
    public final Logger logger;
    public final BufferedImage workingImage;
    public final RGBWeights rgbWeights;
    public final int inWidth;
    public final int inHeight;
    public final int workingImageType;
    public final int outWidth;
    public final int outHeight;

    // MARK: constructors
    public ImageProcessor(Logger logger, BufferedImage workingImage, RGBWeights rgbWeights, int outWidth,
                          int outHeight) {
        super(); // initializing for each loops...

        this.logger = logger;
        this.workingImage = workingImage;
        this.rgbWeights = rgbWeights;
        inWidth = workingImage.getWidth();
        inHeight = workingImage.getHeight();
        workingImageType = workingImage.getType();
        this.outWidth = outWidth;
        this.outHeight = outHeight;
        setForEachInputParameters();
    }

    public ImageProcessor(Logger logger, BufferedImage workingImage, RGBWeights rgbWeights) {
        this(logger, workingImage, rgbWeights, workingImage.getWidth(), workingImage.getHeight());
    }

    // MARK: change picture hue - example
    public BufferedImage changeHue() {
        logger.log("Prepareing for hue changing...");

        int r = rgbWeights.redWeight;
        int g = rgbWeights.greenWeight;
        int b = rgbWeights.blueWeight;
        int max = rgbWeights.maxWeight;

        BufferedImage ans = newEmptyInputSizedImage();

        forEach((y, x) -> {
            Color c = new Color(workingImage.getRGB(x, y));
            int red = r * c.getRed() / max;
            int green = g * c.getGreen() / max;
            int blue = b * c.getBlue() / max;
            Color color = new Color(red, green, blue);
            ans.setRGB(x, y, color.getRGB());
        });

        logger.log("Changing hue done!");

        return ans;
    }

    public final void setForEachInputParameters() {
        setForEachParameters(inWidth, inHeight);
    }

    public final void setForEachOutputParameters() {
        setForEachParameters(outWidth, outHeight);
    }

    public final BufferedImage newEmptyInputSizedImage() {
        return newEmptyImage(inWidth, inHeight);
    }

    public final BufferedImage newEmptyOutputSizedImage() {
        return newEmptyImage(outWidth, outHeight);
    }

    public final BufferedImage newEmptyImage(int width, int height) {
        return new BufferedImage(width, height, workingImageType);
    }

    // A helper method that deep copies the current working image.
    public final BufferedImage duplicateWorkingImage() {
        BufferedImage output = newEmptyInputSizedImage();
        setForEachInputParameters();
        forEach((y, x) -> output.setRGB(x, y, workingImage.getRGB(x, y)));

        return output;
    }

    public BufferedImage greyscale() {
        logger.log("Prepareing for grey changing...");

        BufferedImage ans = newEmptyInputSizedImage();
        forEach((y, x) -> {
            Color c = new Color(workingImage.getRGB(x, y));
            Color color = getGreyColorAccordingToFormula(c);
            ans.setRGB(x, y, color.getRGB());
        });

        logger.log("Changing to grey is  done!");
        return ans;
    }

    private Color getGreyColorAccordingToFormula(Color currentPixelColor) {
        int r = rgbWeights.redWeight;
        int g = rgbWeights.greenWeight;
        int b = rgbWeights.blueWeight;
        int denominator = rgbWeights.weightsAmount;
        int red = r * currentPixelColor.getRed();
        int green = g * currentPixelColor.getGreen();
        int blue = b * currentPixelColor.getBlue();
        int numerator = red + green + blue;
        int greyScale = numerator / denominator;

        return new Color(greyScale, greyScale, greyScale);
    }

    public BufferedImage nearestNeighbor() {
        logger.log("applies nearest neighbor interpolation");

        BufferedImage ans = newEmptyOutputSizedImage();
        double heightDifference = (double) this.workingImage.getHeight() / this.outHeight;
        double widthDifference = (double) this.workingImage.getWidth() / this.outWidth;
        setForEachOutputParameters();

        forEach((y,x) -> {
            ans.setRGB(x, y, this.workingImage.getRGB((int) Math.round(x * widthDifference), (int) Math.round(y * heightDifference)));
        });

        logger.log("Done resizing according to nearest neighbor!");

        return ans;
    }
}

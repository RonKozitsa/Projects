package Regression;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import weka.core.Instances;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.Remove;

public class MainLinearRegression {

    public static BufferedReader readDataFile(String filename) {
        BufferedReader inputReader = null;

        try {
            inputReader = new BufferedReader(new FileReader(filename));
        } catch (FileNotFoundException ex) {
            System.err.println("File not found: " + filename);
        }

        return inputReader;
    }

    /**
     * Sets the class index as the last attribute.
     *
     * @param fileName
     * @return Instances data
     * @throws IOException
     */
    public static Instances loadData(String fileName) throws IOException {
        BufferedReader datafile = readDataFile(fileName);

        Instances data = new Instances(datafile);
        data.setClassIndex(data.numAttributes() - 1);
        return data;
    }

    public static void main(String[] args) throws Exception {
        Instances trainingData = loadData("wind_training.txt");
        Instances testingData = loadData("wind_testing.txt");
        LinearRegression trainingDataAllAttributes = new LinearRegression();
        LinearRegression testingDataAllAttributes = new LinearRegression();
        //Build Linear Regression model with all the attributes to find the best alpha
        trainingDataAllAttributes.buildClassifier(trainingData);
        testingDataAllAttributes.buildClassifier(testingData);
        double bestAlpha = trainingDataAllAttributes.getAlpha();
        //Finds the training error
        double trainingError = trainingDataAllAttributes.calculateMSE(trainingData);
        //Finds the testing error
        double testingError = testingDataAllAttributes.calculateMSE(testingData);
        LinearRegression trainingDataThreeAttributes = new LinearRegression();
        trainingDataThreeAttributes.setAlpha(bestAlpha);
        trainingDataThreeAttributes.setAlphaWasFound(true);
        //Iterate over all 3 features combination, each time with 3 different features, on order to find the 3 best features.
        double[] bestTrainingDataAttributes = findBestAttributes(trainingData, trainingDataThreeAttributes);
        //Creates a new Instances with only the 3 best features, in order to calculate the mean squared error on test data
        Instances bestTrainingDataAttributesInstances = setInstances(testingData, bestTrainingDataAttributes);
        //Sets the prediction as the class index
        bestTrainingDataAttributesInstances.setClassIndex(bestTrainingDataAttributesInstances.numAttributes() - 1);
        LinearRegression testingDataThreeAttributes = new LinearRegression();
        testingDataThreeAttributes.setAlpha(bestAlpha);
        testingDataThreeAttributes.setAlphaWasFound(true);
        testingDataThreeAttributes.buildClassifier(bestTrainingDataAttributesInstances);
        System.out.println("The chosen alpha is:" + bestAlpha);
        System.out.println("Training error with all features is:" + trainingError);
        System.out.println("Test error with all features is:" + testingError);
        System.out.print("Training error the features ");
        printAttributes(bestTrainingDataAttributes, trainingData);
        System.out.println(bestTrainingDataAttributes[3]);
        System.out.print("Test error the features ");
        printAttributes(bestTrainingDataAttributes, trainingData);
        System.out.println(testingDataThreeAttributes.calculateMSE(bestTrainingDataAttributesInstances));
    }

    /**
     * Finds the three best attributes, and smallest error when using those attributes
     *
     * @param data
     * @param threeAtt
     * @return
     * @throws Exception
     */
    private static double[] findBestAttributes(Instances data, LinearRegression threeAtt) throws Exception {
        Remove remove = new Remove();
        Instances filtered;
        StringBuilder chosenAttributes = new StringBuilder("");
        double currentError;
        double lastError = Double.MAX_VALUE;
        //Size 4, in order to set the last index as the error when using the best attributes
        double[] bestAttributes = new double[4];
        for (int i = 1; i < data.numAttributes() - 2; i++) {
            for (int j = i + 1; j < data.numAttributes() - 1; j++) {
                for (int k = j + 1; k < data.numAttributes(); k++) {
                    chosenAttributes.delete(0, chosenAttributes.length());
                    chosenAttributes.append(i + ",");
                    chosenAttributes.append(j + ",");
                    chosenAttributes.append(k + ",15");
                    remove.setAttributeIndices(chosenAttributes.toString());
                    System.out.print(data.attribute(i - 1).name() + " ");
                    System.out.print(data.attribute(j - 1).name() + " ");
                    System.out.print(data.attribute(k - 1).name() + " ");
                    remove.setInvertSelection(true);
                    remove.setInputFormat(data); // init filter
                    filtered = Filter.useFilter(data, remove);
                    threeAtt.buildClassifier(filtered);
                    currentError = threeAtt.calculateMSE(filtered);
                    System.out.println(currentError);
                    if (currentError < lastError) {
                        bestAttributes[0] = i;
                        bestAttributes[1] = j;
                        bestAttributes[2] = k;
                        bestAttributes[3] = currentError;
                        lastError = currentError;
                    }

                }
            }
        }
        return bestAttributes;
    }

    /**
     * Returns the Instances that are a kept from the given data, according to the given array of attributes
     *
     * @param data
     * @param bestTrainingDataAttributes
     * @return
     * @throws Exception
     */
    private static Instances setInstances(Instances data, double[] bestTrainingDataAttributes) throws Exception {
        //Casting bestTrainingDataAttributes Array to int[], in order to use setAttributeIndicesArray. Also, changes the
        //last element, which was the error, into the prediction.
        int[] temp = new int[bestTrainingDataAttributes.length];
        for (int i = 0; i < bestTrainingDataAttributes.length; i++) {
            if (i == 3) {
                temp[i] = data.numAttributes() - 1;
            } else {
                temp[i] = (int) bestTrainingDataAttributes[i] - 1;
            }
        }
        Remove remove = new Remove();
        Instances testDataToRemoveFrom = data;
        remove.setInvertSelection(true);
        //Set which attributes are to be kept (Inverted is true)
        remove.setAttributeIndicesArray(temp);
        remove.setInputFormat(testDataToRemoveFrom);
        return Filter.useFilter(testDataToRemoveFrom, remove);
    }

    private static void printAttributes(double[] bestTrainingDataAttributes, Instances trainingData) {
        System.out.print(trainingData.attribute((int) bestTrainingDataAttributes[0] - 1).name() + " "
                + trainingData.attribute((int) bestTrainingDataAttributes[1] - 1).name() + " "
                + trainingData.attribute((int) bestTrainingDataAttributes[2] - 1).name() + ": ");
    }

}

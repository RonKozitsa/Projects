package Knn;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Random;

import weka.core.Instances;

public class MainKnn {


    //sets input reader for a given file
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
     * reads data from file
     * @param fileName - the file to read from
     * @return Instances  - data
     * @throws IOException
     */
    public static Instances loadData(String fileName) throws IOException {
        BufferedReader datafile = readDataFile(fileName);
        Instances data = new Instances(datafile);
        data.setClassIndex(data.numAttributes() - 1);
        return data;
    }

    public static void main(String[] args) throws Exception {
        Instances autoPrice = loadData("auto_price.txt");
        FeatureScaler scaler = new FeatureScaler();
        Knn knn = new Knn();
        MainKnn mainKnn = new MainKnn();
        Random random = new Random();
        autoPrice.randomize(random);
        mainKnn.bestFeatures("", knn, scaler, autoPrice, false);
        mainKnn.bestFeatures("scaled", knn, scaler, autoPrice, true);
    }

    /**
     *gets best feauters for our knn module
     * @param mode - mode of knn implementation {efficient , regular}
     * @param knn - the Knn
     * @param scaler - our feature scaler
     * @param data - our dataset
     * @param continueToStageThree - if to continue to final stage or not
     * @throws Exception
     */
    public void bestFeatures(String mode, Knn knn, FeatureScaler scaler, Instances data, Boolean continueToStageThree) throws Exception {
        Instances autoPrice;
        //sets parameters
        if (mode.equals("scaled")) {
            autoPrice = scaler.scaleData(data);
        } else {
            autoPrice = data;
        }
        knn.setMode("regular");
        double[] lpDistance = {1, 2, 3, Double.POSITIVE_INFINITY};
        String[] weighting_Scheme = {"uniform", "weighted"};
        double currentErrorAverage;
        double minErrorAverage = Double.MAX_VALUE;
        int[] bestParameters = new int[3];
        knn.buildClassifier(autoPrice);

        //choose best k , p , w
        for (int k = 1; k < 20; k++) {
            knn.setK(k);
            for (int p = 0; p < lpDistance.length; p++) {
                knn.setP_Value(lpDistance[p]);
                for (int w = 0; w < weighting_Scheme.length; w++) {
                    knn.setWeight(weighting_Scheme[w]);
                    currentErrorAverage = knn.crossValidationError(autoPrice, 10);
                    if (currentErrorAverage < minErrorAverage) {
                        minErrorAverage = currentErrorAverage;
                        bestParameters[0] = k;
                        bestParameters[1] = p;
                        bestParameters[2] = w;
                    }

                }
            }
        }

        //print results

        if (mode.equals("scaled")) {
            System.out.println("----------------------------\n Results for scaled dataset:  \n " +
                    "---------------------------- \n Cross validation error with K = " + bestParameters[0] + " , lp = " +
                    lpDistance[bestParameters[1]] + " , majority function = " + weighting_Scheme[bestParameters[2]] + " for auto_price data is: " + minErrorAverage + "\n");
        } else {
            System.out.println("----------------------------\n Results for original dataset:  \n " +
                    "---------------------------- \n Cross validation error with K = " + bestParameters[0] + " , lp = " +
                    lpDistance[bestParameters[1]] + " , majority function = " + weighting_Scheme[bestParameters[2]] + " for auto_price data is: " + minErrorAverage + "\n");
        }
        if (continueToStageThree) {
            //scale the data
            Instances scaled = scaler.scaleData(data);
            //shuffle the data
            Random shuffle = new Random();
            scaled.randomize(shuffle);
            int[] folds = {autoPrice.numInstances(), 50, 10, 5, 3};
            knn.buildClassifier(scaled);
            knn.setK(bestParameters[0]);
            knn.setP_Value(lpDistance[bestParameters[1]]);
            knn.setWeight(weighting_Scheme[bestParameters[2]]);
            for (int i = 0; i < folds.length; i++) {
                System.out.println("----------------------------");
                System.out.println("Results for " + folds[i] + "folds:");
                System.out.println("----------------------------");
                //regular mode
                knn.setMode("regular");
                System.out.print("Cross validation error of regular knn on auto_price dataset is : " + knn.crossValidationError(scaled, folds[i]));
                System.out.println(" and the average elapsed time is " + knn.avgTime);
                System.out.println("The total elapsed time is: " + knn.totalTime);

                //efficient mode
                knn.setMode("efficient");
                System.out.print("Cross validation error of efficient knn on auto_price dataset is : " + knn.crossValidationError(scaled, folds[i]));
                System.out.println(" and the average elapsed time is " + knn.avgTime);
                System.out.println("The total elapsed time is: " + knn.totalTime);
            }
        }
    }
}

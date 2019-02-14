package DecisionTree;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import weka.core.Instances;

public class DT {


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
        //loading our data
        Instances trainingCancer = loadData("cancer_train.txt");
        Instances validationCancer = loadData("cancer_validation.txt");
        Instances testingCancer = loadData("cancer_test.txt");

        //setting the impurity method to entropy and building a tree
        DecisionTree tree = new DecisionTree();
        tree.setUsedMethod("ENTROPY");
        tree.buildClassifier(trainingCancer);
        double entropyError = tree.calcAvgError(validationCancer);

        //setting the impurity method to gini and building a tree
        tree.setUsedMethod("GINI");
        tree.buildClassifier(trainingCancer);
        double giniError = tree.calcAvgError(validationCancer);
        System.out.println("Validation error using Entropy: " + entropyError);
        System.out.println("Validation error using Gini: " + giniError);

        //choosing the best impurity method
        tree.setUsedMethod(entropyError > giniError ? "GINI" : "ENTROPY");

        System.out.println("_________________________________________________________________");


        //choosing the best value of 'p' (used for chi square) for the minimal error
        //of the tree
        double[] p_values = tree.getP_VALUES();
        double[] validationError = new double[p_values.length];

        //prints all the results for all options
        for (int i = 0; i < p_values.length; i++) {
            tree.setpValue(p_values[i]);
            tree.buildClassifier(trainingCancer);
            validationError[i] = tree.calcAvgError(validationCancer);
            System.out.println("Decision tree with p value of " + p_values[i]);
            System.out.println("The train error of the decision tree is: " + tree.calcAvgError(trainingCancer));
            System.out.println("Max height on validation data :" + tree.getTreeMaxHeight());
            System.out.println("Average height on validation data " + tree.getTreeAverageHeight());
            System.out.println("The validation error of the decision tree is: " + validationError[i]);
            System.out.println("_________________________________________________________________\n");
        }


        //get the best values for the best tree
        int minIndex = 0;
        double min = validationError[0];
        for (int j = 1; j < validationError.length; j++) {
            if (validationError[j] < min) {
                min = validationError[j];
                minIndex = j;
            }
        }
        //calculates the test error according to best P_Value
        double bestP_Value = p_values[minIndex];

        //print the final result
        tree.setpValue(bestP_Value);
        tree.buildClassifier(trainingCancer);
        System.out.println("Best validation error at p_value : " + bestP_Value);
        System.out.println("Test error with best tree: " + tree.calcAvgError(testingCancer));
        System.out.println("Representation of the best tree by ‘if statements’ : \n");
        tree.printTree(tree.getRootNode());
    }
}
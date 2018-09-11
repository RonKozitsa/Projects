package SupportVector;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Random;

import weka.core.Instances;
import weka.classifiers.functions.supportVector.Kernel;
import weka.classifiers.functions.supportVector.PolyKernel;
import weka.classifiers.functions.supportVector.RBFKernel;

public class SupportVectorMachine {
    public static double[] Polynomial_Kernel = {2, 3, 4};
    public static double[] Gamma_Values = {0.005, 0.05, 0.5};
    public static double[] I_Values = {1, 0, -1, -2, -3, -4};
    public static double[] J_Values = {3, 2, 1};
    public static double Alpha = 1.5;
    public static double Max_Value = Double.MIN_VALUE;


    public static BufferedReader readDataFile(String filename) {
        BufferedReader inputReader = null;

        try {
            inputReader = new BufferedReader(new FileReader(filename));
        } catch (FileNotFoundException ex) {
            System.err.println("File not found: " + filename);
        }

        return inputReader;
    }

    public static Instances loadData(String fileName) throws IOException {
        BufferedReader datafile = readDataFile(fileName);
        Instances data = new Instances(datafile);
        data.setClassIndex(data.numAttributes() - 1);
        return data;
    }


    public static void main(String[] args) throws Exception {
        Instances data = loadData("cancer.txt");
        Random random = new Random(0);
        data.randomize(random);
        Instances training = data.trainCV(5, 0);
        Instances testing = data.testCV(5, 0);
        SVM svm = new SVM();
        Kernel bestKernel = null;
        int[] confusion;

        for (double kernelValue : Polynomial_Kernel) {
            PolyKernel temp = new PolyKernel();
            temp.setExponent(kernelValue);
            confusion = getConfusion(svm, temp, training, testing);
            double FPR = svm.calcFPR(confusion);
            double TPR = svm.calcTPR(confusion);
            System.out.println("For PolyKernel with degree " + kernelValue + " the rates are:\nTPR = "
                    + TPR + "\nFPR = " + FPR + "\n");

            double result = Alpha * TPR - FPR;
            if (Max_Value < result) {
                bestKernel = temp;
                Max_Value = result;
            }
        }
        for (double gamma_Value : Gamma_Values) {
            RBFKernel temp = new RBFKernel();
            temp.setGamma(gamma_Value);
            confusion = getConfusion(svm, temp, training, testing);
            double FPR = svm.calcFPR(confusion);
            double TPR = svm.calcTPR(confusion);
            double result = Alpha * TPR - FPR;
            System.out.println("For RBFKernel with gamma " + gamma_Value + " the rates are :\n"
            + "TPR = " + TPR + "\nFPR = " + FPR + "\n");
            if (result > Max_Value) {
                bestKernel = temp;
                Max_Value = result;
            }
        }

        //last time with best Kernel
        svm.m_smo.setKernel(bestKernel);
        confusion = getConfusion(svm,bestKernel,training,testing);
        double FPR = svm.calcFPR(confusion);
        double TPR = svm.calcTPR(confusion);
        double result = Alpha * TPR - FPR;
        printBestKernel(bestKernel , result);

        //C values
        for (double i: I_Values){
            for (double j: J_Values){
                double cValue = Math.pow(10, i) * (j / 3);
                svm.m_smo.setC(cValue);
                svm.buildClassifier(training);
                confusion = svm.calcConfusion(testing);
                FPR = svm.calcFPR(confusion);
                TPR = svm.calcTPR(confusion);
                System.out.println("For C: " + cValue + " the rates are:\n" +
                        "TPR = " + TPR + "\nFPR = " + FPR + "\n");
            }
        }

    }

    public static int[] getConfusion(SVM svm , Kernel kernel, Instances training , Instances testing)throws Exception{
        svm.m_smo.setKernel(kernel);
        svm.buildClassifier(training);
        return svm.calcConfusion(testing);
    }

    public static void printBestKernel(Kernel kernel ,double result){
        if (kernel instanceof PolyKernel){
            System.out.println("\nThe best kernel is Poly " + ((PolyKernel) kernel).getExponent() + " " + result + "\n");
        } else{
            System.out.println("\nThe best kernel is RBF " + ((RBFKernel) kernel).getGamma() + " " + result + "\n");
        }
    }
}
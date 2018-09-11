package Regression;

import weka.classifiers.Classifier;
import weka.core.Capabilities;
import weka.core.Instance;
import weka.core.Instances;

public class LinearRegression implements Classifier {

    private int m_ClassIndex;
    private int m_truNumAttributes;
    private double[] m_coefficients;
    private double m_alpha;
    private boolean alphaWasFound;


    //the method which runs to train the linear regression predictor, i.e.
    //finds its weights.

    @Override
    public void buildClassifier(Instances trainingData) throws Exception {
        this.m_ClassIndex = trainingData.classIndex();
        this.m_truNumAttributes = trainingData.numAttributes();
        this.m_coefficients = new double[m_truNumAttributes];
        if (!alphaWasFound) {
            findAlpha(trainingData);
        }
        this.m_coefficients = new double[m_truNumAttributes];
        this.m_coefficients = gradientDescent(trainingData);
    }

    /**
     * Finds the best alpha according to the instruction given in the assignment.
     *
     * @param data
     * @throws Exception
     */
    private void findAlpha(Instances data) throws Exception {
        //array to store all the errors
        double[] errors = new double[18];
        double minError = Double.MAX_VALUE;
        int alphaExponent = -18;
        double lastError = Double.MAX_VALUE;
        double currentError = Double.MAX_VALUE;
        //iterates from -17 to 0
        for (int i = -17; i <= 0; i++) {
            int iterations = 200;
            m_alpha = Math.pow(3, i);
            while (iterations > 0) {
                //compares the errors every 100 iterations
                if (iterations % 100 == 0) {
                    currentError = calculateMSE(data);
                    //if current error is bigger than last , store last error and stop
                    if (currentError > lastError) {
                        errors[i + 17] = lastError;
                        break;
                    }
                    lastError = currentError;
                }
                //runs gradient descent
                gradientDescent(data);
                iterations--;
            }
            //in case we finished all 20,000 iterations and didn't store the error in the array
            if (errors[i + 17] == 0) {
                errors[i + 17] = currentError;
            }
        }
        //finds the exponent of the alpha(by finding which i gave the minimal error)
        for (int i = 0; i < errors.length; i++) {
            if (errors[i] < minError) {
                minError = errors[i];
                alphaExponent++;
            }
        }
        //stores the correct value of alpha
        m_alpha = Math.pow(3, alphaExponent);
    }

    /**
     * An implementation of the gradient descent algorithm which should
     * return the weights of a linear regression predictor which minimizes
     * the average squared error.
     *
     * @param trainingData
     * @throws Exception
     */
    private double[] gradientDescent(Instances trainingData) throws Exception {
        double epsilon = 0.003;
        double currentCostFunctionValue = 0;
        double oldCostFunctionValue = Double.MAX_VALUE;
        //Checks if converged
        while (!errorIsGood(currentCostFunctionValue, oldCostFunctionValue, epsilon)) {
            oldCostFunctionValue = currentCostFunctionValue;
            for (int i = 0; i < 100; i++) {
                this.m_coefficients = Set_m_coefficients(trainingData, m_alpha);
            }
            currentCostFunctionValue = calculateMSE(trainingData);
        }
        return m_coefficients;
    }

    /**
     * Checks if the cost function decreased from the last iteration
     * less than some small value
     *
     * @param currentCostFunctionValue - The cost function value in the current run
     * @param oldCostFunctionValue     - The cost function value in the last run
     * @param epsilon                  -  The small value
     * @return - True if yes, false if no
     */
    public static boolean errorIsGood(double currentCostFunctionValue, double oldCostFunctionValue, double epsilon) {
        if (Math.abs(currentCostFunctionValue - oldCostFunctionValue) >= epsilon) {
            return false;
        }
        return true;
    }

    /**
     * Returns the prediction of a linear regression predictor with weights
     * given by m_coefficients on a single instance.
     *
     * @param instance
     * @return
     * @throws Exception
     */
    public double regressionPrediction(Instance instance) throws Exception {
        double costFunctionValue = this.m_coefficients[0];
        for (int i = 1; i < this.m_coefficients.length; i++) {
            costFunctionValue += this.m_coefficients[i] * instance.value(i - 1);
        }
        return costFunctionValue;
    }

    /**
     * Calculates the total squared error over the data on a linear regression
     * predictor with weights given by m_coefficients.
     *
     * @param testData
     * @return
     * @throws Exception
     */

    public double calculateMSE(Instances data) throws Exception {
        double costFunctionValue = 0;
        double m = data.numInstances();
        double temp;
        for (int i = 0; i < m; i++) {
            temp = regressionPrediction(data.instance(i));
            temp = temp - data.instance(i).value(m_ClassIndex);
            temp = temp * temp;
            costFunctionValue += temp;
        }
        costFunctionValue = costFunctionValue / (2 * m);
        return costFunctionValue;
    }

    /**
     * Calculates the derivative of Current coefficients according to the formula learned in class
     *
     * @param m_coefficients     - Current coefficients array
     * @param trainingData       - The data we are working with
     * @param currentCoefficient - The current Coefficient we are updating
     * @return - The partial derivative of Current coefficients
     */
    public double[] Set_m_coefficients(Instances trainingData, double alpha) throws Exception {
        double[] m_coefficients_old = new double[m_truNumAttributes];
        //Calculates each coefficient according to the formula that was learned.
        for (int i = 0; i < this.m_coefficients.length; i++) {
            m_coefficients_old[i] = this.m_coefficients[i] - (alpha * (partialDerivativeOfCurrentCoefficients(trainingData, i)));
        }
        System.arraycopy(m_coefficients_old, 0, m_coefficients, 0, m_coefficients.length);
        return this.m_coefficients;
    }

    /**
     * Calculates the partial derivative of the current coefficient, according to what was learned in class
     *
     * @param trainingData
     * @param currentCoefficient
     * @return
     * @throws Exception
     */
    public double partialDerivativeOfCurrentCoefficients(Instances trainingData, int currentCoefficient) throws Exception {
        double error = 0;
        double temp;
        double m = trainingData.numInstances();
        for (int i = 0; i < m; i++) {
            temp = regressionPrediction(trainingData.instance(i));
            temp = temp - trainingData.instance(i).value(m_ClassIndex);
            //checks if coefficient is the theta 0
            if (currentCoefficient != 0) {
                temp = temp * trainingData.instance(i).value(currentCoefficient - 1);
            }
            error += temp;
        }
        error = error / m;
        return error;
    }

    public double getAlpha() {
        return m_alpha;
    }

    public void setAlpha(double alpha) {
        m_alpha = alpha;
    }

    public void setAlphaWasFound(boolean bool) {
        this.alphaWasFound = bool;
    }

    @Override
    public double classifyInstance(Instance arg0) throws Exception {
        return 0;
    }

    @Override
    public double[] distributionForInstance(Instance arg0) throws Exception {
        return null;
    }

    @Override
    public Capabilities getCapabilities() {
        return null;
    }
}

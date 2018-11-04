package DecisionTree;

import weka.classifiers.Classifier;
import weka.core.*;
import weka.filters.Filter;
import weka.filters.unsupervised.instance.RemoveWithValues;

class Node {
    Node[] children;
    Node parent;
    int attributeIndex;
    double returnValue;
    boolean isLeaf = false;
}

public class DecisionTree implements Classifier {
    private Node rootNode;
    private String usedMethod;
    private double currentImpurity;
    private double treeMaxHeight;
    private double treeAverageHeight;
    private double pValue = 1;
    private final double[] P_VALUES = {1, 0.75, 0.5, 0.25, 0.05, 0.005};
    private final double[][] CHI_SQUARE_DISTRIBUTION = {
            //p: 1,  0.75, 0.5,  0.25,  0.05, 0.005
            {0, 0, 0, 0, 0, 0}, // deg 0
            {0, 0.102, 0.455, 1.323, 3.841, 7.879}, // deg 1
            {0, 0.575, 1.386, 2.773, 5.991, 10.597}, // deg 2
            {0, 1.213, 2.366, 4.108, 7.815, 12.838}, // deg 3
            {0, 1.923, 3.357, 5.385, 9.488, 14.860}, // deg 4
            {0, 2.675, 4.351, 6.626, 11.070, 16.750}, // deg 5
            {0, 3.455, 5.348, 7.841, 12.592, 18.548}, // deg 6
            {0, 4.255, 6.346, 9.037, 14.067, 20.278}, // deg 7
            {0, 5.071, 7.344, 10.219, 15.507, 21.955}, // deg 8
            {0, 5.899, 8.343, 11.389, 16.919, 23.589}, // deg 9
            {0, 6.737, 9.342, 12.549, 18.307, 25.188}, // deg 10
            {0, 7.584, 10.341, 13.701, 19.675, 26.757} // deg 11
    };

    //seters
    public void setUsedMethod(String usedMethod) {
        this.usedMethod = usedMethod;
    }

    public void setCurrentImpurity(double currentImpurity) {
        this.currentImpurity = currentImpurity;
    }

    public void setpValue(double pValue) {
        this.pValue = pValue;
    }


    //building a classification tree
    @Override
    public void buildClassifier(Instances arg0) throws Exception {
        buildTree(arg0);
    }

    /**
     * this function receives an instance and classifies it
     * @param instance - the instance to classify
     * @return - calssification of the given instance
     */
    @Override
    public double classifyInstance(Instance instance) {
        Node currentNode;
        int attributeIndex;
        currentNode = this.rootNode;
        double treeHeight = 0.0;
        double returnValue = 0.0;
        while (currentNode.children != null && currentNode.children.length > 0) {
            attributeIndex = (int) instance.value(currentNode.attributeIndex);
            if (currentNode.children[attributeIndex] == null) {
                returnValue = currentNode.returnValue;
                break;
            } else {
                currentNode = currentNode.children[attributeIndex];
                returnValue = currentNode.returnValue;
                treeHeight++;
            }
        }

        //updates the tree height
        if (treeHeight > treeMaxHeight) {
            treeMaxHeight = treeHeight;
        }

        //updates tree average height (making an avergae will be done in
        // the final function - calcAvgError)
        treeAverageHeight += treeHeight;
        return returnValue;
    }

    /**
     * calculates average error of the decision tree
     * @param data - data to test the tree on
     * @return - the tree error
     */
    public double calcAvgError(Instances data) {
        double numInstances = data.numInstances();
        treeAverageHeight = 0;
        treeMaxHeight = 0;
        double numOfMistakes = 0;
        double actual;
        double expected;
        Instance currentInstance;

        //runs on all instances in data and checks if the prediction of the
        //tree is the same of the actual value , if not , increase the error
        for (int i = 0; i < data.numInstances(); i++) {
            currentInstance = data.instance(i);
            actual = currentInstance.stringValue(data.classIndex()).equals("recurrence-events") ? 0.0 : 1.0;
            expected = classifyInstance(currentInstance);
            if (expected != actual) {
                numOfMistakes++;
            }
        }

        //makes an average of all heights found
        this.treeAverageHeight /= numInstances;

        return numOfMistakes / data.numInstances();
    }

    /**
     * sets root of the tree and calls another funtion to start building the tree
     * @param data - data used to build the tree
     * @throws Exception
     */
    private void buildTree(Instances data) throws Exception {
        this.rootNode = new Node();
        this.rootNode.returnValue = calcReturnValue(data);
        buildTree(rootNode, data);
    }

    /**
     * building the tree
     * @param node - root node
     * @param data -  data used to build the tree
     * @throws Exception
     */
    private void buildTree(Node node, Instances data) throws Exception {
        Attribute bestAttribute = getBestAttribute(data);

        if (!checkChi(bestAttribute, data)) {
            node.attributeIndex = bestAttribute.index();
            node.children = new Node[bestAttribute.numValues()];
            setNode(data, node);
        }
    }


    /**
     * setting a node in the tree
     * @param data -  data used to build the tree
     * @param node -  the node to set
     * @throws Exception
     */
    private void setNode(Instances data, Node node) throws Exception {
        double gaindInfo;
        Instances[] trimmedInstances;
        trimmedInstances = keepByValues(data, node.attributeIndex);
        Attribute bestAttribute;

        for (int i = 0; i < trimmedInstances.length; i++) {
            node.children[i] = new Node();
            // If the Instance according to the child is null, then set the child to null.
            if (trimmedInstances[i] == null) {
                node.children[i] = null;
                continue;
            }

            // If the Instance according to the child is pure, then the child should be a leaf.
            if (isPure(trimmedInstances[i], node)) {
                buildLeaf(node.children[i], trimmedInstances[i], node);
                continue;
            }

            bestAttribute = getBestAttribute(trimmedInstances[i]);
            if (bestAttribute == null) {
                gaindInfo = checkIfCanGetData(trimmedInstances[i]);
                // Unable to get data from the trimmedInstances[i], therefore trimmedInstances[i] contains the same data
                // with different results.
                if (gaindInfo == -1.0) {
                    node.children[i] = null;
                    continue;
                    // Able to get data from the trimmedInstances[i].
                } else {
                    node.children[i].isLeaf = true;
                    node.children[i].returnValue = gaindInfo;
                    node.children[i].attributeIndex = -1;
                    node.children[i].parent = node;
                    continue;
                }
            } else {
                node.children[i].parent = node;
                node.children[i].returnValue = calcReturnValue(trimmedInstances[i]);
                buildTree(node.children[i], trimmedInstances[i]);
            }
        }
    }

    /**
     * calculates the return value of the specific data , if there are more negatives
     * set the value of the data to negative , otherwise , set positive
     * @param data -  the data to check on
     * @return - the return value of the specific data
     */
    private double calcReturnValue(Instances data) {
        double[] positivesAndNegatives = getNumOfPositivesAndNegatives(data);
        double positives = positivesAndNegatives[0];
        double negatives = positivesAndNegatives[1];

        return positives >= negatives ? 0.0 : 1.0;
    }

    /**
     * checks if the given data gives us a good classification
     * means , if there is a different number of possitive instances than negatives.
     * if the number of positive and negative is the same , we cannot classify correctly
     * @param data -  the data to check on
     * @return - (-1) if the data is unable to be classified correctly
     */
    private double checkIfCanGetData(Instances data) {
        double[] positivesAndNegatives = getNumOfPositivesAndNegatives(data);
        double positives = positivesAndNegatives[0];
        double negatives = positivesAndNegatives[1];

        if (positives == negatives) {
            return -1.0;
        } else if (positives > negatives) {
            return 0.0;
        }
        return 1.0;
    }

    /**
     * gets number of positive instances and negatives in a given data
     * @param data - the data to check
     * @return - double array of size two , array[0] = positives , array[1] = negatives
     */
    private double[] getNumOfPositivesAndNegatives(Instances data) {
        Instance currentInstance;
        String currentValue;
        double positives = 0;
        double negatives = 0;
        double[] numOfPositivesAndNegatives = new double[2];

        for (int i = 0; i < data.numInstances(); i++) {
            currentInstance = data.instance(i);
            currentValue = currentInstance.stringValue(data.classIndex());
            if (currentValue.equals("recurrence-events")) {
                positives++;
            } else {
                negatives++;
            }
        }
        numOfPositivesAndNegatives[0] = positives;
        numOfPositivesAndNegatives[1] = negatives;

        return numOfPositivesAndNegatives;
    }

    /**
     * checks for a given node if the data it contains is pure (only positive or only
     * negative instances)
     * @param arg0 - the data to check on
     * @param node - the given node to be checked
     * @return - is pure or not
     */
    private boolean isPure(Instances arg0, Node node) {
        String data;


        if (arg0.numInstances() == 1) {
            return true;
        }

        data = arg0.instance(0).stringValue(arg0.classIndex());

        for (int i = 1; i < arg0.numInstances(); i++) {
            if (!(arg0.instance(i).stringValue(arg0.classIndex()).equals(data))) {
                return false;
            }
        }

        return true;
    }

    /**
     * checks if to prune the tree
     * @param attribute - the atrribute to be chekced
     * @param arg0 - the entire data
     * @return - if to prune the tree or not
     */
    private boolean checkChi(Attribute attribute, Instances arg0) {
        double chiValue;
        chiValue = calcChiSquare(arg0, attribute.index());
        return pruneOrNotPrune_AskTheChi(arg0, chiValue, attribute.index(), this.pValue);
    }

    /**
     * building a leaf in the tree
     * @param node - the leaf
     * @param arg0 - the data of the node
     * @param parent - the parent of the leaf
     */
    private void buildLeaf(Node node, Instances arg0, Node parent) {
        node.isLeaf = true;
        node.attributeIndex = -1;
        node.parent = parent;
        if (arg0.numInstances() > 0) {
            node.returnValue = arg0.instance(0).stringValue(arg0.classIndex()).equals("recurrence-events") ? 0.0 : 1.0;
        }
    }


    /**
     * keeps only the insatnces with the desired attributes
     * @param arg0 - the data
     * @param attributeIndex - the desired attribute
     * @return -all instances that has a feature with the desired attribute
     * @throws Exception
     */
    private Instances[] keepByValues(Instances arg0, int attributeIndex) throws Exception {
        RemoveWithValues removeWithValues = new RemoveWithValues();
        Instances[] instances = new Instances[arg0.attribute(attributeIndex).numValues()];

        for (int i = 0; i < instances.length; i++) {
            String[] options = {"-C", String.valueOf(attributeIndex + 1), "-L", String.valueOf(i + 1)};
            removeWithValues.setOptions(options);
            removeWithValues.setInvertSelection(true);
            removeWithValues.setInputFormat(arg0);
            Instances temp = Filter.useFilter(arg0, removeWithValues);
            if (temp.numInstances() == 0) {
                instances[i] = null;
            } else {
                instances[i] = temp;
            }
        }

        return instances;
    }

    /**
     * chosing best attribute to split the tree
     * @param arg0 - the data to be checked
     * @return -the best attribute
     */
    private Attribute getBestAttribute(Instances arg0) {
        calcImpurity(arg0);
        double maxGain = 0;
        double currentGain;
        int numOfAttributes = arg0.numAttributes();
        Attribute chosenAttribute = arg0.attribute(0);

        for (int i = 0; i < numOfAttributes - 1; i++) {
            currentGain = calcGain(arg0, i);
            if (maxGain < currentGain) {
                maxGain = currentGain;
                chosenAttribute = arg0.attribute(i);
            }
        }

        if (maxGain == 0) {
            return null;
        }

        return chosenAttribute;
    }

    /**
     * checks impurity of data
     * @param arg0 - the data to be checked
     * @return - value of impurity
     */
    private double calcImpurity(Instances arg0) {
        double[] positivesAndNegatives = getNumOfPositivesAndNegatives(arg0);
        double positive = positivesAndNegatives[0];
        double negative = positivesAndNegatives[1];
        double impurity;

        impurity = this.usedMethod.equals("GINI") ? giniFormula(positive, negative) : entropyFormula(positive, negative);
        setCurrentImpurity(impurity);

        return impurity;

    }

    /**
     * calculates gain of split
     * @param arg0 - data
     * @param attributeIndex - the attribute to be tested
     * @return - value of gain
     */
    private double calcGain(Instances arg0, int attributeIndex) {
        double numOfValues = arg0.attribute(attributeIndex).numValues();
        double numOfInstances = arg0.numInstances();
        double gain = this.currentImpurity;
        double probabilities;
        double impurity;
        double positive;
        double negative;
        Instance currentInstance;
        Attribute currentAttribute;
        String currentData;
        currentAttribute = arg0.attribute(attributeIndex);

        for (int i = 0; i < numOfValues; i++) {
            currentData = currentAttribute.value(i);
            positive = 0;
            negative = 0;
            for (int j = 0; j < numOfInstances; j++) {
                currentInstance = arg0.instance(j);
                if (currentInstance.stringValue(attributeIndex).equals(currentData)) {
                    if (currentInstance.stringValue(currentInstance.classIndex()).equals("recurrence-events")) {
                        positive++;
                    } else {
                        negative++;
                    }
                }
            }
            probabilities = (positive + negative) / numOfInstances;
            impurity = this.usedMethod.equals("GINI") ? giniFormula(positive, negative) : entropyFormula(positive, negative);
            gain = gain - (probabilities * impurity);
        }
        return gain;
    }


    /**
     * entropy splitting
     * @param positive - number of positives
     * @param negative - number of negatives
     * @return - entropy
     */
    private double entropyFormula(double positive, double negative) {
        double totalAmount;
        double entropy;
        totalAmount = positive + negative;

        if (totalAmount == 0.0) {
            return 0.0;
        }

        entropy = -((positive / totalAmount) * calcLog2(positive / totalAmount)) - ((negative / totalAmount) * calcLog2(negative / totalAmount));

        return entropy;
    }

    /**
     * gini splitting
     * @param positive - number of positives
     * @param negative - number of negatives
     * @return - gini
     */
    private double giniFormula(double positive, double negative) {
        double totalAmount;
        double gini;
        totalAmount = positive + negative;

        if (totalAmount == 0) {
            return 0.0;
        }

        gini = (positive / totalAmount) * (positive / totalAmount) + (negative / totalAmount) * (negative / totalAmount);
        gini = 1 - gini;

        return gini;
    }


    private double calcLog2(double x) {
        if (x == 0) {
            return 0.0;
        }
        return Math.log(x) / Math.log(2);
    }

    /**
     * calc chi square
     * @param arg0
     * @param attribute_index
     * @return
     */
    private double calcChiSquare(Instances arg0, int attribute_index) {
        Double chiCalculated = 0.0;
        Instance currentInstance;
        String currentValue;
        int class_index = arg0.classIndex();
        double numberOfTestedPeople = arg0.numInstances();
        double[] positivesAndNegatives = getNumOfPositivesAndNegatives(arg0);
        double numOfPeopleWhoRecurrence = positivesAndNegatives[0];
        double probExpectedForRecurrence = numOfPeopleWhoRecurrence / numberOfTestedPeople;
        double probExpectedForNotRecurrence = 1 - probExpectedForRecurrence;
        double expectedForRecurrence;
        double expectedForNotRecurrence;
        double actualValueForNotRecurrence;
        double actualValueForRecurrence;
        double Df;

        for (int i = 0; i < arg0.attribute(attribute_index).numValues(); i++) {
            actualValueForNotRecurrence = 0;
            Df = 0;
            actualValueForRecurrence = 0;
            currentValue = arg0.attribute(attribute_index).value(i);
            for (int j = 0; j < numberOfTestedPeople; j++) {
                currentInstance = arg0.instance(j);
                if (currentInstance.stringValue(attribute_index).equals(currentValue)) {
                    if (currentInstance.stringValue(class_index).equals("recurrence-events")) {
                        actualValueForRecurrence++;
                    } else {
                        actualValueForNotRecurrence++;
                    }
                    Df++;
                }
            }

            expectedForNotRecurrence = Df * probExpectedForNotRecurrence;
            expectedForRecurrence = Df * probExpectedForRecurrence;

            if (expectedForNotRecurrence == 0 || expectedForRecurrence == 0) {
                continue;
            } else {
                chiCalculated += (Math.pow((actualValueForNotRecurrence - expectedForNotRecurrence), 2) / expectedForNotRecurrence) +
                        (Math.pow(actualValueForRecurrence - expectedForRecurrence, 2) / expectedForRecurrence);
            }
        }

        return chiCalculated;
    }


    private int calcNumOfRelevantValues(Instances arg0, int attributeIndex) {
        int degree = 0;
        int numOfInstances = arg0.numInstances();
        double[] prob = new double[arg0.attribute(attributeIndex).numValues()];
        Instance instance;
        for (int i = 0; i < numOfInstances; i++) {
            instance = arg0.instance(i);
            prob[(int) instance.value(attributeIndex)]++;
        }
        for (int i = 0; i < prob.length; i++) {
            if (prob[i] != 0) {
                degree++;

            }
        }
        return degree;
    }


    /**
     * checks if to prune the tree or not given all the needed information
     * @param arg0 - data
     * @param chiCalculated - the chi
     * @param attributeIndex - the attribute
     * @param p_value - the chosen p value
     * @return - if to prune or not
     */
    private boolean pruneOrNotPrune_AskTheChi(Instances arg0, double chiCalculated, int attributeIndex, double p_value) {
        int degreeOfFreedom = calcNumOfRelevantValues(arg0, attributeIndex) - 1;
        int p_index = getpIndex(p_value);
        double value = CHI_SQUARE_DISTRIBUTION[degreeOfFreedom][p_index];
        return (chiCalculated < value);
    }

    /**
     * prints the tree
     * @param node - root node
     */
    public void printTree(Node node) {
        if (node.parent == null) {
            System.out.println("Root");
        }
        if (node.children == null) {
            printSpaces(node);
            System.out.println("    Leaf.Returning value: " + node.returnValue);
            return;
        }
        printSpaces(node);
        if (node.parent != null) System.out.println("  Returning value: " + node.returnValue);
        else System.out.println("Returning value: " + node.returnValue);
        for (int i = 0; i < node.children.length; i++) {
            if (node.children[i] != null) {
                printSpaces(node);
                System.out.println("    if attribute " + node.attributeIndex + " = " + i);
                printTree(node.children[i]);
            }
        }
    }

    //for organized and clear tree visualization
    private void printSpaces(Node node) {
        int n = printAux(node);
        for (int i = 0; i < n; i++) {
            System.out.print("  ");
        }
    }

    //finds how many spaces to print for each node
    private int printAux(Node node) {
        int i = 0;
        while (node.parent != null) {
            node = node.parent;
            i++;
        }
        return i;
    }


    private int getpIndex(double p_value) {
        for (int i = 0; i < P_VALUES.length; i++) {
            if (P_VALUES[i] == p_value) {
                return i;
            }
        }
        return -1;
    }

    @Override
    public double[] distributionForInstance(Instance arg0) throws Exception {
        return null;
    }

    @Override
    public Capabilities getCapabilities() {
        return null;
    }


    /*
    getters
     */
    public double getTreeMaxHeight() {
        return treeMaxHeight;
    }

    public double getTreeAverageHeight() {
        return treeAverageHeight;
    }

    public double[] getP_VALUES() {
        return P_VALUES;
    }

    public Node getRootNode() {
        return rootNode;
    }

}




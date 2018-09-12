package Knn;

import weka.classifiers.Classifier;
import weka.core.Capabilities;
import weka.core.Instance;
import weka.core.Instances;

class DistanceCalculator {
    private double p_value;

    /**
     * gets distance between two instances
     * @param one - instance one
     * @param two - instance two
     * @param p_value - the chosen p value
     * @param kthDistance - the max distance of the k neighbours
     * @param mode - efficient or regular mode
     * @return - the distance between the instances
     */
    public double distance(Instance one, Instance two, double p_value, double kthDistance, String mode) {
        this.p_value = p_value;
        if (mode.equals("efficient")) {
            if (p_value == Double.POSITIVE_INFINITY) {
                return efficientLInfinityDistance(one, two, kthDistance);
            } else {
                return efficientLpDistance(one, two, kthDistance);
            }
        } else {
            if (p_value == Double.POSITIVE_INFINITY) {
                return lInfinityDistance(one, two);
            } else {
                return lpDistance(one, two);
            }
        }
    }

    /**
     * Returns the Lp distance between 2 instances.
     * @param one - instance one
     * @param two - instance two
     * @return - Lp distance
     */
    private double lpDistance(Instance one, Instance two) {
        double lpDistance = 0.0;

        for (int i = 0; i < one.numValues() - 1; i++) {
            lpDistance += Math.pow(Math.abs(one.value(i) - two.value(i)), p_value);
        }
        if (p_value == 1) {
            return lpDistance;
        }
        if (p_value == 2) {
            return Math.sqrt(lpDistance);
        }
        if (p_value == 3) {
            return Math.cbrt(lpDistance);
        }

        // Never reach here
        return 0.0;
    }

    /**
     * Returns the L infinity distance between 2 instances.
     *
     * @param one - instance one
     * @param two - instance two
     * @return - L infinity distance
     */
    private double lInfinityDistance(Instance one, Instance two) {
        double lInfinityDistance = 0.0;

        for (int i = 0; i < one.numValues() - 1; i++) {
            lInfinityDistance = Math.max(Math.abs(one.value(i) - two.value(i)), lInfinityDistance);
        }

        return lInfinityDistance;
    }

    /**
     * Returns the Lp distance between 2 instances, while using an efficient distance check.
     * @param one - instance one
     * @param two - instance two
     * @return - Lp distance
     */
    private double efficientLpDistance(Instance one, Instance two, double kthDistance) {
        double distanceComparing = Math.pow(kthDistance, p_value);
        double lpDistance = 0.0;

        for (int i = 0; i < one.numValues() - 1; i++) {
            lpDistance += Math.pow(Math.abs(one.value(i) - two.value(i)), p_value);
            if (distanceComparing < lpDistance) {
                // makes sure the value we return would be bigger than anything else
                return Double.MAX_VALUE;
            }
        }
        if (p_value == 1) {
            return lpDistance;
        }
        if (p_value == 2) {
            return Math.sqrt(lpDistance);
        }
        if (p_value == 3) {
            return Math.cbrt(lpDistance);
        }
        //never reach here
        return 0.0;
    }

    /**
     * Returns the L infinity distance between 2 instances, while using an efficient distance check.
     * @param one - instance one
     * @param two - instance two
     * @return - L infinity
     */
    private double efficientLInfinityDistance(Instance one, Instance two, double kthDistance) {
        double lInfinityDistance = 0.0;
        double distanceComparison = Math.pow(kthDistance, p_value);


        for (int i = 0; i < one.numValues() - 1; i++) {
            lInfinityDistance = Math.max(Math.abs(one.value(i) - two.value(i)), lInfinityDistance);
            if (distanceComparison < lInfinityDistance)
                // makes sure the value we return would be bigger than anything else
                return Double.MAX_VALUE;
        }
        return lInfinityDistance;
    }
}

public class Knn implements Classifier {
    private int k;
    private String weight;
    private double p_value;
    private static final int Value = 0;
    private static final int Index = 1;
    public long totalTime;
    public long avgTime;
    private String mode;

    public enum DistanceCheck {Regular, Efficient}

    private Instances m_trainingInstances;

    @Override
    /**
     * Build the knn classifier. In our case, simply stores the given instances for
     * later use in the prediction.
     * @param instances
     */
    public void buildClassifier(Instances instances) throws Exception {
        this.m_trainingInstances = instances;
    }

    /**
     * Returns the knn prediction on the given instance.
     * @param testInstance - the instance to be classified
     * @return The instance predicted value.
     */
    public double regressionPrediction(Instance testInstance) {
        distanceInstance[] neighbors = findNearestNeighbors(testInstance);
        int k = neighbors.length;
        if (weight.equals("uniform")) {
             return getAverageValue(neighbors);
        } else { // Weighting Scheme is weighted
            return getWeightedAverageValue(neighbors);
        }
    }
    /**
     * Caclcualtes the average error on a give set of instances.
     * The average error is the average absolute error between the target value and the predicted
     * value across all insatnces.
     * @param currentInstances - the instances to be cheked
     * @return - the avg error
     */
    public double calcAvgError(Instances currentInstances) {
        double actual;
        double predicted;
        double averageError = 0.0;
        Instance testInstance;

        for (int i = 0; i < currentInstances.numInstances(); i++) {
            testInstance = currentInstances.instance(i);
            actual = testInstance.classValue();
            predicted = regressionPrediction(testInstance);

            if (actual != predicted) {
                averageError += Math.abs(actual - predicted);

            }
        }

        averageError /= currentInstances.numInstances();

        return averageError;
    }

    /**
     * Calculates the cross validation error, the average error on all folds.
     * @param insances     Insances used for the cross validation
     * @param num_of_folds The number of folds to use.
     * @return The cross validation error.
     */
    public double crossValidationError(Instances currentInstances, int numOfFolds) throws Exception {
        avgTime = 0;
        totalTime = 0;
        double sum = 0;
        for (int foldIndex = 0; foldIndex < numOfFolds; foldIndex++) {
            // reserve one subset for validation set
            Instances validationSet = currentInstances.testCV(numOfFolds, foldIndex);

            // train on the rest
            Instances trainingSet = currentInstances.trainCV(numOfFolds, foldIndex);
            buildClassifier(trainingSet);

            long notNeededTime = System.nanoTime();

            // in each subset output the error
            double currentAvgError = calcAvgError(validationSet);
            totalTime += (System.nanoTime() - notNeededTime);

            // Sum the result (average error on all subsets)

            sum += currentAvgError;
        }
        avgTime = totalTime / numOfFolds;

        return sum / numOfFolds;
    }

    /**
     * Finds the k nearest neighbors.
     * @param testedInstance - the instance to be tested , we find it's k nearest neighbors
     * @return - array of all k nearest neighbors
     */
    public distanceInstance[] findNearestNeighbors(Instance testedInstance) {
        distanceInstance[] nearestNeighbors = new distanceInstance[k];
        buildNearestNeighborsArray(nearestNeighbors);
        DistanceCalculator distanceCalculator = new DistanceCalculator();
        Instance currentInstance;
        double currentDistance;
        double[] maxDistance;
        int indexInArray = 0;
        boolean arrayIsFull = false;

        for (int i = 0; i < m_trainingInstances.numInstances(); i++) {
            currentInstance = m_trainingInstances.instance(i);
            if (currentInstance.equals(testedInstance)) {
                continue;
            }
            if (!arrayIsFull) {
                nearestNeighbors[indexInArray].setInstance(currentInstance);
                maxDistance = calcMaxDistance(nearestNeighbors);
                currentDistance = distanceCalculator.distance(testedInstance, currentInstance, p_value, maxDistance[Value], mode);
                nearestNeighbors[indexInArray].setDistance(currentDistance);
                arrayIsFull = indexInArray == (k - 1) ? true : false;
                indexInArray++;
            } else {
                maxDistance = calcMaxDistance(nearestNeighbors);
                currentDistance = distanceCalculator.distance(testedInstance, currentInstance, p_value, maxDistance[Value], mode);
                if (currentDistance < maxDistance[Value]) {
                    nearestNeighbors[(int) maxDistance[Index]].setDistance(currentDistance);
                    nearestNeighbors[(int) maxDistance[Index]].setInstance(currentInstance);
                    calcMaxDistance(nearestNeighbors);
                }
            }
        }
        return nearestNeighbors;
    }
    private void buildNearestNeighborsArray(distanceInstance[] nearestNeighbors) {
        for (int i = 0; i < k; i++) {
            nearestNeighbors[i] = new distanceInstance();
            nearestNeighbors[i].setDistance(Double.MAX_VALUE);
        }
    }


    /**
     * gets the farthest neighbor of all k neighbors
     * @param nearestNeighbors - all k nearest neighbors
     * @return - array of size two , array[0] - distance , array[1] = index of neighbor
     * out of all neighbors in the k nearest neighbors array
     */
    private double[] calcMaxDistance(distanceInstance[] nearestNeighbors) {
        double[] maxDistance = new double[2];
        maxDistance[Value] = Double.MIN_VALUE;
        maxDistance[Index] = 0;

        for (int i = 0; i < nearestNeighbors.length; i++) {
            if (nearestNeighbors[i].getDistance() > maxDistance[Value]) {
                maxDistance[Value] = nearestNeighbors[i].getDistance();
                maxDistance[Index] = i;
            }
        }

        return maxDistance;
    }


    /**
     * Cacluates the average value of the given elements in the collection.
     */
    public double getAverageValue(distanceInstance[] neighbors) {
        double prediction = 0.0;
        for (int i = 0; i < k; i++) {
            prediction += neighbors[i].getInstance().classValue();
        }
        return prediction/neighbors.length;
    }

    /**
     * Calculates the weighted average of the target values of all the elements in the collection
     * with respect to their distance from a specific instance.
     */
    public double getWeightedAverageValue(distanceInstance[] neighbors) {
        double prediction = 0.0;
        double w;
        double totalW = 0;
        double distance;
        for (int i = 0; i < neighbors.length; i++) {
            distance = neighbors[i].getDistance();
            if (distance == 0) {
                return neighbors[i].getInstance().classValue();
            }
            w = 1 / (Math.pow(distance, 2));
            prediction += neighbors[i].getInstance().classValue() * w;
            totalW += w;
        }
        prediction /= totalW;
        return prediction;
    }

    public void setK(int k) {
        this.k = k;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public void setP_Value(double value) {
        this.p_value = value;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }


    @Override
    public double[] distributionForInstance(Instance arg0) throws Exception {
        // TODO Auto-generated method stub - You can ignore.
        return null;
    }

    @Override
    public Capabilities getCapabilities() {
        // TODO Auto-generated method stub - You can ignore.
        return null;
    }

    @Override
    public double classifyInstance(Instance instance) {
        // TODO Auto-generated method stub - You can ignore.
        return 0.0;
    }
}

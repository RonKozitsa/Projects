package Knn;

import weka.core.Instance;

public class distanceInstance {

    private Instance instance;
    private double distance;

    public distanceInstance() {
        this.instance = null;
        this.distance = 0.0;
    }

    public Instance getInstance() {
        return instance;
    }

    public void setInstance(Instance instance) {
        this.instance = instance;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }
}

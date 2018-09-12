package Knn;

import weka.core.Instance;
import weka.core.Instances;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.Normalize;
import weka.filters.unsupervised.attribute.Standardize;

public class FeatureScaler {
	/**
	 * Returns a scaled version (using standarized normalization) of the given dataset.
	 *
	 * @param instances The original dataset.
	 * @return A scaled instances object.
	 */
	public Instances scaleData(Instances instances) {
		try {
			Instances data = instances;
			Standardize standardize = new Standardize();
			standardize.setInputFormat(data);
			Instances scaledInstances = Filter.useFilter(data, standardize);
			return scaledInstances;
		} catch (Exception e) {
			System.out.println("error scaling data set");
			return null;
		}
	}
}
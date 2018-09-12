package SupportVector;

import weka.classifiers.functions.SMO;
import weka.classifiers.functions.supportVector.Kernel;
import weka.core.Instance;
import weka.core.Instances;

public class SVM {
	public SMO m_smo;
	private double CValue;
	private Kernel kernel;

	public SVM() {
		this.m_smo = new SMO();
	}

	public void buildClassifier(Instances instances) throws Exception {
		m_smo.buildClassifier(instances);
	}

	public int[] calcConfusion(Instances instances) throws Exception {
         //array : 0 - TP , 1 - FP , 2 - TN ,3 -FN
		 int[] confusion = new int[4];
		 double prediction;
		 double actual;
        for (Instance instance : instances){
            prediction = m_smo.classifyInstance(instance);
            actual = instance.classValue();
            if (prediction == 1 && actual == 1)confusion[0]++;
            if (prediction == 1 && actual == 0)confusion[1]++;
            if (prediction == 0 && actual == 0)confusion[2]++;
            if (prediction == 0 && actual == 1)confusion[3]++;
        }
        return confusion;
	}

    public double calcTPR (int[] confusion) {
        return ((double)confusion[0]) / ((double)(confusion[0] + confusion[3]));
    }

    public double calcFPR (int[] confusion) {
        return ((double)confusion[1]) / ((double)(confusion[1] + confusion[2]));
    }

	void setKernel(Kernel kernel) {
	    this.kernel = kernel;
	}

	void setC(Double c){this.CValue = c;}

	double getC (){
		return this.CValue;
	}


}

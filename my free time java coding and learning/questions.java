import java.security.PublicKey;
import java.util.ArrayList;
import java.util.EmptyStackException;
import java.util.LinkedList;

public class questions {
    static int[] dictionary;


    public static void main(String[] args) {

        ////////////////
        System.out.println(isPalindrome(556655));
        ////////////////



        /////////////////
        Integer[] array = {1,2,4,3,6,5,7,5,4,6,7,10,3,2,1,3,5,6,2,9,8,10,13,12,11,14,1,3,4,5,6,5,4,3,2,1,2,3,4,6,7,8,8};//          randomizeArray(array);
        reverseArray(array);
        printArray(array);
        ////////////////

        ////////////////
        sumAllFibTillMilion();
        ///////////////

        //////////////////////
        dictionary = new int[100];
        dictionary[0] = 1;
        dictionary[1] = 2;
        System.out.println("normal: " + midgetJump(60));
        System.out.println("efficient: " + efficientMidgetJump(100));
        //////////////////////////

        //////////////////
        printAllCombinationsOfString("","abcde");
        //////////////////

        /////////////////
        int[] sumArray = {1,2,3,4,5,10,15};
        System.out.println(doesExists(sumArray));
        ////////////////
    }


    /**
     * checks if there exists a number which his left sum numbers equal to his
     * right sum numbers in the array
     * @param array - the array
     * @return - true or false
     */
    public static boolean doesExists(int[] array){
    int[] leftArray = new int[array.length];
    int[] rightArray = new int [array.length];
    leftArray[0] = 0;
    leftArray[1] = array[0];
    rightArray[array.length - 1] = 0;
    rightArray[array.length - 2] = array[array.length - 1];
    for (int i = 2; i < array.length; i++) {
        leftArray[i] += array[i-1] + leftArray[i-1];
    }
    for (int i = rightArray.length - 3; i >= 0; i--) {
        rightArray[i] = array[i + 1] + rightArray[i + 1];
    }
    for (int i = 0; i < leftArray.length; i++) {
        if (rightArray[i] == leftArray[i])return true;
    }
    return false;
}



    static private <T> boolean isPalindrome(T object){
        //option 1
//        return a.equals(new StringBuilder(a).reverse().toString());

        //option 2
        String string = object.toString();
        for (int i = 0; i < string.length()/2; i++) {
            if (string.charAt(i) != string.charAt(string.length() - 1 - i))return false;
        }
        return true;
    }


    //midget jump question
    static private int midgetJump(int n){
        if (n<=0)return 0;
        if (n==1)return 1;
        if (n==2) return 2;
        return midgetJump(n-1) + midgetJump(n-2);
    }

    //midget jump efficiently
    static private int efficientMidgetJump(int n){
        if (n <= 0 ) return 0;
        if (dictionary[n -1] != 0){
            return dictionary[n -1];
        }else{
            return (dictionary[n -1]=efficientMidgetJump(n-1) + efficientMidgetJump(n-2));
        }
    }

    //sum all even numbers of fibonacci till 1 million without recursion
    public static void sumAllFibTillMilion(){
        int current = 1;
        int prev = 1;
        int temp;
        while (current < 1000000){
            temp = current;
            current = temp + prev;
            prev = temp;
            if (current%2==0) {
                System.out.println(current);
            }
        }
    }

    //prints an array
    private static <T> void printArray(T[] array){
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " , ");
        }
    }

    //randomize an array
    public static void randomizeArray(int[] array){
        for (int i = 0; i < array.length; i++) {
            int random = (int)(Math.random() * (array.length - 1));
            int temp = array[random];
            array[random] = array[i];
            array[i] = temp;
        }
    }

    //print all combinations of a string
    public static void printAllCombinationsOfString(String permutation , String string) {
        if (string.length() == 0) System.out.println(permutation);
        for (int i = 0; i < string.length(); i++) {
            printAllCombinationsOfString(permutation + string.charAt(i) , string.substring(0,i) + string.substring(i+1,string.length()));
        }
    }

    //reverse an array
    public static <T> void reverseArray(T[] array){
        for (int i = 0; i < array.length/2; i++) {
            T temp = array[array.length - 1 - i];
            array[array.length - 1 - i] = array[i];
            array[i] = temp;
        }
    }












    class Singelton{
        private final Singelton singelton = new Singelton();

        private Singelton(){}

        public Singelton getSingelton(){
            return singelton;
        }
    }
}
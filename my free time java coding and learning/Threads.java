public class Threads implements Runnable {
    static int number = 0;
    @Override
    public void run() {
        addInt();
    }

    public static void main(String[] args) {
      Thread thread1 = new Thread(new Threads());
      Thread thread2 = new Thread(new Threads());
            thread1.start();
            thread2.start();
            System.out.println("\n\n");
        }


    public void addInt(){
        number++;
        System.out.println(number);;
    }
}
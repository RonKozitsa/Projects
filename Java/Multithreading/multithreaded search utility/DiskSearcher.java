import java.io.File;

public class DiskSearcher {

    public static final int DIRECTORY_QUEUE_CAPACITY = 50;
    public static final int RESULTS_QUEUE_CAPACITY = 50;

    public static void main(String[] args) throws InterruptedException {
        String pattern = args[0];
        File rootDir = new File(args[1]);
        File destinationDir = new File(args[2]);
        int numOfSearchers = Integer.parseInt(args[3]);
        int numOfCopiers = Integer.parseInt(args[4]);

        SynchronizedQueue<File> directoryQueue = new SynchronizedQueue<>(DIRECTORY_QUEUE_CAPACITY);
        SynchronizedQueue<File> resultsQueue = new SynchronizedQueue<>(RESULTS_QUEUE_CAPACITY);
        Thread scouter = new Thread(new Scouter(directoryQueue, rootDir));
        scouter.start();

        //searchers
        int count = 0;
        while (count < numOfSearchers) {
            Searcher searcher = new Searcher(pattern, directoryQueue, resultsQueue);
            Thread searcher_thread = new Thread(searcher);
            searcher_thread.start();
            count++;

        }

        //copiers
        count = 0;
        while (count < numOfCopiers) {
            Copier copier = new Copier(destinationDir, resultsQueue);
            Thread copier_thread = new Thread(copier);
            copier_thread.start();
            count++;
        }

        try {
            scouter.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

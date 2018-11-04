import java.io.File;

public class Searcher implements Runnable{

    private SynchronizedQueue<File> directoryQueue;
    private SynchronizedQueue<File> resultsQueue;
    private String extention;

    public Searcher(java.lang.String extension, SynchronizedQueue<File> directoryQueue, SynchronizedQueue<File> resultsQueue) {
        this.extention = extension;
        this.directoryQueue = directoryQueue;
        this.resultsQueue = resultsQueue;
    }

    public void enqueue(File directory) {
        for (File file : directory.listFiles()) {
            if (file.getName().contains(this.extention)) {
                this.resultsQueue.enqueue(file);
            }
        }

    }
    @Override
    public void run() {
        resultsQueue.registerProducer();
        File directory = directoryQueue.dequeue();
        while (directory != null) {
            enqueue(directory);
            directory = directoryQueue.dequeue();
        }
        resultsQueue.unregisterProducer();
    }
}

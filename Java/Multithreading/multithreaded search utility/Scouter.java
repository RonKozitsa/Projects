import java.io.File;

public class Scouter implements Runnable {

    private SynchronizedQueue<File> directoryQueue;
    private File rootFile;

    public Scouter(SynchronizedQueue<File> directoryQueue, File rootfile){
        this.directoryQueue = directoryQueue;
        this.rootFile = rootfile;
    }

    public void enqueueDirs (File rootFile) throws InterruptedException{
        for (File file : rootFile.listFiles()){
            if (file.isDirectory()) {
                directoryQueue.enqueue(rootFile);
                enqueueDirs(file);
            }
        }
    }
    @Override
    public void run(){
        directoryQueue.registerProducer();
        try {
            enqueueDirs(rootFile);
        }
        catch (InterruptedException e){
            e.printStackTrace();
        }
        directoryQueue.unregisterProducer();
    }
}

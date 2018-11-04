import java.io.*;

public class Copier implements Runnable{

    public static final int COPY_BUFFER_SIZE = 4096;
    SynchronizedQueue<File> resultsQueue;
    File dest;

    public Copier(java.io.File destination, SynchronizedQueue<File> resQueue) {
        this.dest = destination;
        this.resultsQueue = resQueue;
    }
    private static void copyFile(File source, File dest) throws IOException {
        InputStream inputStream = new FileInputStream(source);
        OutputStream outputStream = new FileOutputStream(dest + "\\" + source.getName());
        try {
            byte[] buff = new byte[COPY_BUFFER_SIZE];
            int length;
            while ((length = inputStream.read(buff)) != -1)
                outputStream.write(buff, 0, length);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }


    @Override
    public void run() {
        File source;
        while ((source = resultsQueue.dequeue()) != null) {
            try {
                copyFile(source,dest);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}

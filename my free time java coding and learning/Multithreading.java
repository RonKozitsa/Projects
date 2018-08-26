import sun.awt.Mutex;

/*
Implementing two threads - one sends message , and one receives them.
implemented with critical section and mutex.
 */



public class Multithreading implements Runnable {
    Mutex lock = new Mutex();
    public Thread writer;
    public Thread reader;
    int[] messages;
    boolean[] isValid;
    int writerMessagesPointer = 0;
    int readerMessagePointer = 0;
    boolean youAreReader = false;

    public Multithreading(int[] messages) {
        this.messages = messages;
        this.isValid = new boolean[messages.length];
        this.writerMessagesPointer = 0;
        this.readerMessagePointer = 0;
    }

    public void startMessaging() {
            reader.start();
            writer.start();
    }

    @Override
    public void run() {
        lock.lock();
        if (youAreReader) {
            lock.unlock();
            while (true) {
                readMessage();

            }
        }else{
            lock.unlock();
            youAreReader = true;
            for (int i = 0; i < messages.length; i++) {
               writeMessage(messages[writerMessagesPointer]);
           }
        }
    }


    public void readMessage(){
        lock.lock();
        if (isValid[readerMessagePointer]) {
            //critical section
            int message = messages[readerMessagePointer];
            isValid[readerMessagePointer] = false;
            System.out.println("reader read the message " + message);
            readerMessagePointer = (readerMessagePointer + 1) % messages.length;
            //end of critical section
            lock.unlock();
        }
        else{
//            System.out.println("no message to read");
            lock.unlock();
        }
    }


    public void writeMessage(int message){
        lock.lock();
            //critical section
            messages[writerMessagesPointer] = message;
            System.out.println("writer has wrote the message " + message);
            isValid[writerMessagesPointer] = true;
            writerMessagesPointer = (writerMessagesPointer + 1) % messages.length;
            //end of critical section
            lock.unlock();
    }




}
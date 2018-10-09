public class Queue {
    private int first;
    private int last;
    public int size;
    int[] queue;
    int top;

    public Queue(int size){
        first = -1;
        last = -1;
        queue = new int[size];
        this.size = 0;
    }

    public int dequeue(){
        int dequeue;
        if (size ==0){
            System.out.println("no elements in queue");
           return -1;
        }
        if (size ==1){
            dequeue = queue[first];
            first = -1;
            last = -1;
            size--;
            return dequeue;
        }
        dequeue = queue[first];
        first = (first+1)%queue.length;
        size--;
        return dequeue;
    }

    public void enqueue(int number){
        if (size ==0){
            first = 0;
            last =0;
            size++;
            queue[last] = number;
        }
        else if (size == queue.length){
            System.out.println("queue is full !");
        }
        else{
            last = (last + 1)%queue.length;
            queue[last] = number;
            size++;
        }
    }
}
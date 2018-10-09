import java.util.EmptyStackException;

public class Stack {
        private int size;
        private int[] stack;
        int top;

        public Stack(int size){
            stack = new int[size];
            this.size = 0;
        }
        public int pop(){
            if (size == 0 ) {
                System.out.println("empty stack");
                throw new EmptyStackException();
            }
            size--;
            return stack[size];
        }

        public void push(int number){
            if (size == stack.length){
                System.out.println("stack is full");
                throw new StackOverflowError();
            }
            stack[size] = number;
            size++;
        }

        public void printStack(){
            for (int i = 0; i <stack.length; i++) {
                System.out.println(stack[i]);
            }
        }

    public void minimumPush(int number) {
        Stack other = new Stack(this.size);
        if (this.size == 0) {
            push(number);
        } else {
            if (getTop() > number) {
                push(number);
            } else {
                while (getTop() < number) {
                    other.push(this.pop());
                    if (size == 0) break;
                }
                push(number);
                while (other.size != 0) {
                    this.push(other.pop());
                }
            }
        }
    }

    public int getTop(){
        int top = pop();
        push(top);
        return top;
    }


    }
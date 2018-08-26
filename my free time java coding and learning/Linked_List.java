public class Linked_List {
    Node first;
    Node last;
    int size;

    public Linked_List() {
        this.last = null;
        this.first = null;
        this.size = 0;
    }


    public void addItem(Node new_node){
        if (size == 0) {
            addFirstInList(new_node);
        }
        else if(new_node.value < first.value){
            addFirst(new_node);
        }
        else if (new_node.value >= last.value){
            addLast(new_node);
        }
        else{
            Node nextNode = first.next;
            Node prevNode = first;
            for (int i = 0; i < size - 1; i++) {
                if (new_node.value < nextNode.value){
                    prevNode.next = new_node;
                    new_node.next = nextNode;
                    size++;
                    break;
                }
                prevNode = nextNode;
                nextNode = nextNode.next;
            }
        }
    }

    public void deleteElement(int value) {
        if (size == 0){
            return;
        }
        if (value == first.value) {
            removeFirst();
            deleteElement(value);
        } else {
            Node nextNode = first.next;
            Node prevNode = first;
            int length = size;
            for (int i = 0; i < length - 1; i++) {
                if (nextNode.value == value) {
                    if (i == size - 1) {
                        prevNode.next = null;
                        size--;
                    } else {
                        prevNode.next = nextNode.next;
                        nextNode = nextNode.next;
                        size--;
                    }
                } else {
                    prevNode = nextNode;
                    nextNode = nextNode.next;
                }
            }
        }
    }

    public void flipList() {
            Node prev = null;
            Node current = first;
            Node next;
            last = first;
            while (current!=null){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            first = prev;
    }






    private void addFirst(Node new_node){
        new_node.next = first;
        first = new_node;
        size ++;
    }
    private void addLast(Node new_node){
        new_node.next = null;
        last.next = new_node;
        last = new_node;
        size++;
    }

    private void addFirstInList(Node new_node){
        first = new_node;
        last = new_node;
        size++;
    }

    private void removeFirst(){
        first = first.next;
        size--;
    }

    public void deleteWithPointer(Node pointer){
        Node temp = pointer.next;
        pointer.value = temp.value;
        pointer.next = temp.next;
        size--;
    }


    public void printList(){
        Node temp = first;
        for (int i = 0; i < size; i++) {
            System.out.print(i == size - 1 ? "( "+ temp.value + " ) --> null" : "( "+ temp.value + " ) --> " );
            temp=temp.next;
        }
    }

    public Node getIntersection(Linked_List otherList){
        int lengthList1 = this.size;
        int lengthList2 = otherList.size;
        int difference;
        boolean list1IsSmaller = true;
        //checks if there is a difference between lists length
        if (lengthList1 > lengthList2){
            difference = lengthList1 - lengthList2;
            list1IsSmaller = false;
        }else{
            difference = lengthList2 - lengthList1;
        }
        // pushes the longer list a 'differnece' steps forward
        Node temp1 = this.first;
        Node temp2 = otherList.first;
        for (int i = 0; i < difference; i++) {
            if (list1IsSmaller){
                temp2 = temp2.next;
            }else{
                temp1 = temp1.next;
            }
        }
        //looking for the intersection node
        for (int i = 0; i <(list1IsSmaller ? lengthList1 : lengthList2); i++) {
            if (temp1.value == temp2.value)return temp1;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        //case there is no intersection node
        return null;
    }


}



class Node {
    int value;
    Node next;

    public Node(int value) {
        this.value = value;
        this.next = null;
    }

}
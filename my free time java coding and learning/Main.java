public class Main {

    public static void main(String[] args) throws Exception {
//        //linked list
//        System.out.println("part 1\n------------");
//        Linked_List list = new Linked_List();
//        list.addItem(new Node(1));
//        list.addItem(new Node(11));
//        list.addItem(new Node(31));
//        list.addItem(new Node(2));
//        Node pointer = list.first;
//        for (int i = 0; i < 2; i++) {
//            pointer=pointer.next;
//        }
//        System.out.println(pointer.value);
//        list.deleteWithPointer(pointer);
//        list.printList();
//        list.addItem(new Node(1));
//        list.addItem(new Node(2));
//        list.addItem(new Node(3));
//        list.addItem(new Node(2));
////      list.deleteElement(2);
////      list.deleteElement(1);
//        list.printList();
//        list.flipList();
//        System.out.println("\n------------\n");
//        list.printList();
//        Linked_List list2 = new Linked_List();
//        list2.addItem(new Node(3));
//        list2.addItem(new Node(4));
//        list2.addItem(new Node(5));
//        list2.addItem(new Node(11));
//        list2.addItem(new Node(31));
//
//        System.out.println(list.getIntersection(list2).value);





//        //--------------------------------------------------------
//        Interfacing + Inheritance + Polymorphism
//        System.out.println("\n\npart 2\n------------");
//        Flying_Animals animals = new kakadu();
//        System.out.println(animals.canBeatEagle());
//        Flying_Animals superEagle = new SuperEagle();
//        System.out.println(superEagle.canBeatEagle());
//





//        //---------------------------------------------------------
//        //Collections
//        System.out.println("\n\npart 3\n------------");
//        Collections birdArrayList = new Collections();
//        birdArrayList.createAndPrintBirdArrayList();






        //---------------------------------------------
        //files
//        System.out.println("\n\npart 3\n\n\n------------");
//        Files files = new Files();
//        BufferedReader reader = files.readDataFile("data.json");
//        RandomAccessFile file = new RandomAccessFile("data.json","rw");
//        files.modifyData(file);







        //---------------------------------------------
        //general
//        int num1 = 10;
//        int num2 = 20;
//        num1 = num1 ^ num2;
//        num2 = num1 ^ num2;
//        num1 = num2 ^ num1;
//        System.out.println(num1);
//        System.out.println(num2);










        //--------------------------------
        //stack
//        Stack stack = new Stack(5);
//        stack.push(1);
//        stack.push(1);
//        stack.push(3);
//        stack.push(2);
//        stack.push(11);
//        stack.printStack();


        // O(1) minimum Stack
//
//        Stack stack = new Stack(10);
//        stack.minimumPush(11);
//        stack.minimumPush(4);
//        stack.minimumPush(3);
//        stack.minimumPush(23);
//        stack.minimumPush(8);
//        stack.minimumPush(1);
//        stack.minimumPush(0);
//        System.out.println(stack.pop());


        //---------------------------------
        //queue
//        Queue queue = new Queue(5);
//        queue.enqueue(1);
//        queue.enqueue(3);
//        queue.enqueue(4);
//        queue.enqueue(2);
//        queue.enqueue(5);
//        queue.dequeue();
//        queue.enqueue(1);
//        System.out.println(queue.dequeue());
//        queue.enqueue(3);
//        queue.dequeue();
//        queue.dequeue();
//        queue.dequeue();
//        System.out.println(queue.dequeue());



        //---------------------------------
        //binaryTree
//        binaryTree binaryTree = new binaryTree();
//        binaryTree.addUniqueNode(new TreeNode(5));
//        binaryTree.addUniqueNode(new TreeNode(3));
//        binaryTree.addUniqueNode(new TreeNode(9));
//        binaryTree.addUniqueNode(new TreeNode(13));
//        binaryTree.addUniqueNode(new TreeNode(8));
//        binaryTree.addUniqueNode(new TreeNode(7));
//        binaryTree.addUniqueNode(new TreeNode(14));
//        binaryTree.DFS(binaryTree.root);
//        TreeNode root = binaryTree.root;
//        binaryTree.printPostOrder(binaryTree.root);
//        binaryTree.printInOrder(root);
//        binaryTree.printPreOrder(root);
//        binaryTree.printBFS(binaryTree.root);
//        System.out.println();
//        binaryTree.mirrorTree(root);
//        binaryTree.printInOrder(root);
//        binaryTree.printPreOrder(root);



        //message read and write
        int[] messages = initArray(1000);
        Multithreading multithreading = new Multithreading(messages);
        multithreading.reader = new Thread(multithreading);
        multithreading.writer = new Thread(multithreading);
        multithreading.startMessaging();
    }

    public static int[] initArray(int n){
        int[] array = new int[n];
        for (int i = 0; i < n  ; i++) {
            array[i] = i;
        }
        return array;
    }
}
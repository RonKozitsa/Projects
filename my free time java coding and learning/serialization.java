import java.io.*;

public class serialization {
    public static void main(String[] args) throws Exception {
        binaryTree binaryTree = new binaryTree();
        binaryTree.size = 5;
        File file = new File("serialize.txt");
        file.createNewFile();
        FileInputStream fis = new FileInputStream(file);
        FileOutputStream fos = new FileOutputStream(file);
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(binaryTree);
        ObjectInputStream ois = new ObjectInputStream(fis);
        System.out.println(((binaryTree)ois.readObject()).size);

    }
}
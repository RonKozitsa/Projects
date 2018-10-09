import java.io.Serializable;
import java.util.*;
import java.util.Queue;
import java.util.Stack;

public class binaryTree implements Serializable {
    TreeNode root;
    int size;


    public binaryTree() {
        this.root = null;
        size = 0;
    }

    /*
    //adds node if does not exist in the tree , if it does , don't add it
     */
    public void addUniqueNode(TreeNode new_node) {
        if (size == 0) {
            root = new_node;
            size++;
            return;
        }
        TreeNode node = root;
        while (true) {
            if (new_node.value < node.value) {
                if (node.left == null) {
                    node.left = new_node;
                    size++;
                    return;
                }
                node = node.left;
                continue;
            } else if (new_node.value > node.value) {
                if (node.right == null) {
                    node.right = new_node;
                    size++;
                    return;
                }
                node = node.right;
                continue;
            } else {
                return;
            }
        }
    }

    public void deleteNode(TreeNode nodeToDelete) {
        TreeNode parent = root;
        TreeNode current = root;
        while (current != null) {
            if (current.value == nodeToDelete.value) {
                //case no children
                if (current.left == null && current.right == null) {
                    //case root
                    if (current == this.root) {
                        this.root = null;
                        size--;
                    }
                    //otherwise
                    else {
                        if (parent.left == current) {
                            parent.left = null;
                        } else {
                            parent.right = null;
                        }
                    }
                    return;
                }
                //case one child
                else if (current.left == null || current.right == null) {
                    //case root
                    if (current == this.root) {
                        if (current.left == null) {
                            this.root = current.right;
                        } else {
                            this.root = current.left;
                        }
                        size--;
                    }
                    //otherwise
                    else {
                        //if has right kid
                        if (current.left == null) {
                            //if the node to delete is a left child
                            if (parent.left == current) {
                                parent.left = current.right;
                            } else {
                                //if a right child
                                parent.right = current.right;
                            }
                        } else {
                            if (parent.left == current) {
                                parent.left = current.left;
                            } else {
                                parent.right = current.left;
                            }
                        }
                    }
                }
                //case 2 children
                else {
                    TreeNode successorParent = current;
                    TreeNode temp = current.right;
                    TreeNode successor = current;
                    //get the most left node
                    while (temp != null) {
                        successorParent = successor;
                        successor = temp;
                        temp = temp.left;
                    }
                    //case no left tree to the right node of the node to delete
                    if (successor == current.right) {
                        successor.left = current.left;
                        if (parent.left == current) {
                            parent.left = current.right;
                        } else {
                            parent.right = current.right;
                        }
                    } else {
                        successorParent.left = successor.right;
                        successor.left = current.left;
                        successor.right = current.right;
                        //replaces the nodes
                        if (current == root) {
                            root = successor;
                        } else {
                            if (parent.left == current) {
                                parent.left = successor;
                            } else {
                                parent.right = successor;
                            }
                        }
                    }
                }
                return;
            } else if (nodeToDelete.value > current.value) {
                parent = current;
                current = current.right;
            } else {
                parent = current;
                current = current.left;
            }
        }
        System.out.println("node does not exist in the tree");
    }

    public boolean isInTheTree(int value) {
        TreeNode current = root;
        while (current != null) {
            if (current.value == value) return true;
            else {
                if (current.value < value) {
                    current = current.right;
                    continue;
                }
                current = current.left;
                continue;
            }
        }
        return false;
    }

    public void printInOrder(TreeNode root) {
        if (root == null) return;
        printInOrder(root.left);
        System.out.print(" " + root.value);
        printInOrder(root.right);
    }

    public void printPreOrder(TreeNode root) {
        if (root == null) return;
        System.out.print(root.value + " ");
        printPreOrder(root.left);
        printPreOrder(root.right);
    }

    public void printPostOrder(TreeNode root) {
        if (root == null) return;
        printPostOrder(root.left);
        printPostOrder(root.right);
        System.out.print(root.value + " ");
    }

    public void printBFS(TreeNode root) {
        if (root == null) return;
        Queue<TreeNode> treeNodeQueue = new LinkedList<>();
        treeNodeQueue.add(root);
        while (!treeNodeQueue.isEmpty()) {
            TreeNode node = treeNodeQueue.remove();
            System.out.print(" " + node.value);
            if (node.left != null) {
                treeNodeQueue.add(node.left);
            }
            if (node.right != null) {
                treeNodeQueue.add(node.right);
            }
        }
    }


    public void mirrorTree(TreeNode root) {
        if (root == null) return;
        TreeNode temp = root.right;
        root.right = root.left;
        root.left = temp;
        mirrorTree(root.left);
        mirrorTree(root.right);
    }

    public void DFS(TreeNode root){
        TreeNode temp = root;
        System.out.println(root.value);
        if (temp.left != null){
            DFS(temp.left);
        }
        if (temp.right != null){
            DFS(temp.right);
        }

    }


}



class TreeNode{
     int value;
     TreeNode left;
     TreeNode right;

    public TreeNode(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}






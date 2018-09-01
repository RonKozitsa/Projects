import java.util.HashMap;

public class CurrentState {
    boolean stop;
    String secret;
    private HashMap<Character , Boolean> dictionary;

    public CurrentState(String secret , HashMap dict){
        this.secret = secret;
        this.dictionary = dict;
    }


    /**
     * prints hangman's state and current gussing state
     * @param attemptsMade - number of false attempts made
     * @param dict - the current dictionary
     */
    public boolean printState(int attemptsMade , Dictionary dict) {
        dictionary = dict.getDictionary();
        int stages = 0;
        String state = "";

        //checks current position and prints it
        stop = checkIfToStop(stages, attemptsMade);
        if (!stop) {
            state = "_____";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |  \n" +
                    "  |  \n" +
                    "  |  \n" +
                    "__|__\n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---\n" +
                    "  |    \n" +
                    "  |    \n" +
                    "__|__  \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |    \n" +
                    "__|__  \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |   |\n" +
                    "__|__  \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |   |\\\n" +
                    "__|__  \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |  /|\\\n" +
                    "__|__    \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |  /|\\\n" +
                    "__|__  \\  \n";
            stop = checkIfToStop(++stages, attemptsMade);
        }

        //case lost
        if (!stop) {
            state = "  |---|\n" +
                    "  |   0\n" +
                    "  |  /|\\\n" +
                    "__|__/ \\\n";

            System.out.println(state + " you've been hanged");
            return true;
        }
        System.out.println(state);

        //prints guessing state
        System.out.println("Current guessing state");
        for (char c : secret.toCharArray()) {
            if (c == ' ') {
                System.out.print("- ");
            } else if(dictionary.get(c).booleanValue() == false) {
                System.out.print("_ ");
            }else{
                        System.out.print(c + " ");
                }
            }
        System.out.println("");
        if (dictionary.containsValue(false)) {
            return false;
        } else {
            //case all dictionary is true - player won
            System.out.println("you won !");
            return true;
        }
    }



    private boolean checkIfToStop(int stages , int attempts){
        if(attempts > stages) return false;
        return true;
    }
}
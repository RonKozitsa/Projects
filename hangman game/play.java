public class play {
    public static void main(String[] args) {
        String secret = args[0];
        Dictionary dictionary = new Dictionary(secret);
        Hangman hangman = new Hangman(dictionary,secret);
        hangman.startGame(secret,dictionary);
    }
}
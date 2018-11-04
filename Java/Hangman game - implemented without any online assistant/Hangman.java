import java.util.Scanner;

public class Hangman {
    Dictionary dictionary;
    String secret;
    int wrongAttempts;
    CurrentState currentState;
    StringBuilder guessedCharacters;

    public Hangman(Dictionary dictionary , String secret){
        this.dictionary = dictionary;
        this.secret = secret;
        currentState = new CurrentState(secret , dictionary.getDictionary());
        wrongAttempts = 0;
        guessedCharacters = new StringBuilder("");
    }

    public void startGame(String secret, Dictionary dictionary) {
        Scanner scanner = new Scanner(System.in);
        String guess;
        Character character;
        Boolean gameEnd = false;
        currentState.printState(wrongAttempts,dictionary);

        //runs while game is not over
        while (!(gameEnd)) {
            System.out.println("\nput your guess : \n(you might guess the whole word or a single character [a-z])\n");
            if (scanner.hasNext()) {
                guess = scanner.nextLine();

                //validates good input (ignores 'empty' enters)
                while (guess.length() == 0){
                    guess = scanner.nextLine();
                }
                //case insensitive
                guess = guess.toLowerCase();

                //case trying to guess a whole word
                if (guess.length() > 1) {
                    if (checkWordGuess(guess, secret)) gameEnd = true;
                } else {
                    //guessing a single character
                    character = guess.charAt(0);
                    gameEnd = checkCharGuess(character, dictionary);
                }
            }
        }
    }

    private boolean checkWordGuess(String word , String secret){
        //word guessed correctly
        if (word.equals(secret)){
            System.out.println("great job ! you guessed correctly\n" + secret);
            return true;
        }else{
            //word guessed not correctly
            System.out.println("nope\n");
            wrongAttempts++;
            return currentState.printState(wrongAttempts,dictionary);
        }
    }

    public boolean checkCharGuess(Character character , Dictionary dictionary){
        //checks if the char was not guessed before
        if (guessedCharacters.toString().contains(character.toString())) {
            System.out.println("you already guessed that character");
            return false;
        }
        //if the char is in the word
        if (dictionary.getDictionary().containsKey(character)){
            System.out.println("correct guess !");
            //update dictionary and print new current state
            dictionary.getDictionary().replace(character,false,true);
            guessedCharacters.append(character.toString());
            return currentState.printState(wrongAttempts,dictionary);
        }else{
            //if character is not in word
            System.out.println("nope\n");
            guessedCharacters.append(character.toString());
            return currentState.printState(++wrongAttempts,dictionary);
            }

        }
    }
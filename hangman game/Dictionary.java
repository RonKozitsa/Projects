import jdk.internal.dynalink.beans.StaticClass;

import java.util.HashMap;
import java.util.StringJoiner;

public class Dictionary {
    private HashMap<Character , Boolean> dictionary;


    public Dictionary(String word) {
        //case insensitive
        word = word.toLowerCase();
        dictionary = new HashMap<>(word.length());
        for (int i = 0; i < word.length(); i++) {
            if (word.charAt(i) == ' ') continue;
            dictionary.put(word.charAt(i), false);
        }
    }
    public HashMap<Character, Boolean> getDictionary(){
        return dictionary;
    }
}
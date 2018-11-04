import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JsonRead {

    public static void ReadJson(String jsonPath) {
        JSONParser parser = new JSONParser();
        try {
            Object obj = parser.parse(new FileReader(jsonPath));
            JSONObject jsonObject = (JSONObject) obj;

            String name = jsonObject.get("name").toString();
            System.out.println(name);

            String message = jsonObject.get("message").toString();
            System.out.println(message);

            // loop array
            JSONArray cars = (JSONArray) jsonObject.get("what am i doing");
            Iterator iterator = cars.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
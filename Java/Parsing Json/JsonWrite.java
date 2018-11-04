import org.json.JSONArray;
import org.json.JSONObject;
import java.io.FileWriter;
import java.io.IOException;

public class JsonWrite {
    public static void WriteJson(String message) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name", "Ron");
        JSONArray jsonArray = new JSONArray();
        jsonArray.put("my");
        jsonArray.put("first");
        jsonArray.put("Json Code !");
        jsonObject.put("what am i doing", jsonArray);
        jsonObject.put("message" , message);

        try {
            FileWriter writer = new FileWriter("myJsonFile.json");
            writer.write(jsonObject.toString());
            writer.flush();
        } catch (
                IOException e) {
            e.printStackTrace();
        }
    }
}

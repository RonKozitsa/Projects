import java.io.*;


public class Files {
    static final char[] badChars = {',','}','{',':','\t','\b','[',']'};

        public static BufferedReader readDataFile(String filename) {
            BufferedReader inputReader = null;
            try {
                inputReader = new BufferedReader(new FileReader(filename));
            } catch (FileNotFoundException ex) {
                System.err.println("File not found: " + filename);
            }
            return inputReader;
        }

        public void modifyData(RandomAccessFile file) throws Exception {
//            RandomAccessFile newFile = new RandomAccessFile("modifiedFile.txt", "rw");
//            int value;
//            char current;
//            newFile.seek(0);
//            file.seek(0);
//            while ((value = file.read()) != -1) {
//                current = (char) value;
//                System.out.println(current);
//                //removes "name"
//                if (current == '"' && file.read() == 'n') {
//                    for (int i = 0; i < 5; i++) {
//                        file.read();
//                    }
//                    continue;
//                }
//                if (current == '"' && (isDigit((char) file.read()))) {
//                    if (isDigit((char) file.read()) && ((char) file.read() == '.')) {
//                        for (int i = 0; i < 6; i++) {
//                            file.read();
//                        }
//                        continue;
//                    }
//                }
//                    if (!containsBadChar(current)) {
//                        newFile.write(current);
//                    }
//                }
//            file.close();
//        }
        }
        private boolean isDigit(char c){
            if (c >=48 && c<=57)return true;
            return false;
        }
        private boolean containsBadChar(char a){
            for(char x : badChars){
                if (x == a) return true;
            }
            return false;
        }

    }
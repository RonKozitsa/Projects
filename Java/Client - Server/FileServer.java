package net;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;

public class FileServer {

	static final String RESP_OK = "HTTP/1.0 200 OK\r\nConnection: close\r\n\r\n";
	static final String RESP_BADPATH = "HTTP/1.0 403 Forbidden\r\nConnection: close\r\n\r\nForbidden: ";
	static final String RESP_NOTFOUND = "HTTP/1.0 404 Not Found\r\nConnection: close\r\n\r\nNot found: ";
	static final String RESP_BADMETHOD = "HTTP/1.0 405 Method not allowed\r\nConnection: close\r\nAllow: GET\r\n\r\nBad";
	static final String RESP_EXIT = RESP_OK + "Thanks, I'm done.";

	static final String MSG_IOERROR = "There was an IO Error";
	static final String PATH_EXIT = "/exit";

	/**
	 * Check if a string is a well-formed absolute path, as defined below, in the filesystem. 
	 * A well-formed absolute path must satisfy:
	 * 1. Begins with "/"
	 * 2. Consists only of English letters, numbers, and the special characters
	 * '_', '.', '-', '~' and '/'.
	 * 3. Does not contain any occurrences of the string "/../".
	 * 
	 * @param path
	 *            The path to check.
	 * @return true if the path is well-formed, false otherwise.
	 */
	public boolean isLegalAbsolutePath(String path) {
		if (path.charAt(0) != '/') {
			return false;
		}
		for (int i = 1; i < path.length(); i++) {
			char c = path.charAt(i);
			if (c <= 44 || (c > 57 && c < 65) || (c > 90 && c < 97 && c != 95) || (c > 122 && c < 125) || c == 127) {
				return false;
			}
			if (path.contains("/../")) {
						return false;
			}
		}
		return true;
	}


	/**
	 * @param serverSock
	 *            the {@link ServerSocket} on which to accept connections.
	 * @param sysErr
	 *            the {@link PrintStream} to which error messages are written.
	 */
	public void runSingleClient(ServerSocket serverSock, PrintStream sysErr) {
		BufferedWriter writer = null;
		BufferedReader reader = null;
		Socket clientServer = null;
		main_loop:
		while(true){
			try {
				clientServer = serverSock.accept();
				reader = new BufferedReader(new InputStreamReader(clientServer.getInputStream()));
				writer = new BufferedWriter(new OutputStreamWriter(clientServer.getOutputStream()));
				//removes extra spaces
				String word = reader.readLine().trim();
				//separates the word
				String[] words = word.split(" ");
				if (word.length() < 2){
					closeConnection(reader,writer,clientServer);
					continue;
				}
				//checks if the first word is "get" , if not,sends message and closes connection
				if (words[0].toLowerCase() != "get"){
					writer.write(RESP_BADMETHOD);
					writer.flush();
					closeConnection(reader,writer,clientServer);
					continue;
				}
				String path = words[1];
				//checks if second word is identical to #PATH_EXIT
				if (path.equals(PATH_EXIT)){
					writer.write(RESP_EXIT);
					writer.flush();
					closeConnection(reader,writer,clientServer);
					return;
				}
				//checks if the path is legal
				if (!isLegalAbsolutePath(path)) {
					writer.write(RESP_BADPATH + path);
					writer.flush();
					closeConnection(reader,writer,clientServer);
					continue;
				}
				//if we reached here , the path is legal , so no need to check it.
				//we will check if the file is readable or even exists
				File file = new File(path);
				if (!(file.exists() || file.canRead())){
					writer.write(RESP_NOTFOUND + path);
					writer.flush();
					closeConnection(reader,writer,clientServer);
					continue;
				}
				//if we reached here , the file exists and is readable
				writer.write(RESP_OK);
				BufferedReader fileReader = new BufferedReader(new FileReader(file));
				String line = fileReader.readLine();
				//reads as long there are lines in file
				while(line != null){
					writer.write(line);
					writer.flush();
					line = fileReader.readLine();
				}
				//reached here when we read all the lines in the file
				closeConnection(reader,writer,clientServer);
				fileReader.close();
				}
				//case of IO exceptions
				catch (IOException e){
				sysErr.print(MSG_IOERROR);
				closeConnection(reader,writer,clientServer);
				}
			}
		}

	private void closeConnection(BufferedReader reader , BufferedWriter writer , Socket socket){
		try {
			if (reader!=null)reader.close();
			if (writer!= null)writer.close();
			if (socket!=null)socket.close();
		}catch (IOException e){
			System.out.println("Error closing");
		}
	}

	/**
	 * Convert a windows-style path (e.g. "C:\dir\dir2") to POSIX style (e.g. "/dir1/dir2")
	 */
	static String convertWindowsToPOSIX(String path) {
		return path.replaceFirst("^[a-zA-Z]:", "").replaceAll("\\\\", "/");
	}
	
	/**
	 * test method
	 * enter the "test URL" printed
	 * on the console in a browser, see  a "Yahoo!..." message, 
	 * and click on a link to exit.  
	 * @param args
	 */
	static public void main(String[] args) {
		FileServer fs = new FileServer();
		HelloServer server = new HelloServer();

		File tmpFile = null;
		try {
			try {
				tmpFile = File.createTempFile("test", ".html");
				FileOutputStream fos = new FileOutputStream(tmpFile);
				PrintStream out = new PrintStream(fos);
				out.println("<!DOCTYPE html>\n<html>\n<body>Yahoo! Your test was successful! <a href=\""+ PATH_EXIT +"\">Click here to exit</a></body>\n</html>");
				out.close();

				int port = server.listen();
				System.err.println("Test URL: http://localhost:" + port
						+ convertWindowsToPOSIX(tmpFile.getAbsolutePath()));
			} catch (IOException e) {
				System.err.println("Exception, exiting: " + e);
				return;
			}

			fs.runSingleClient(server.getServerSocket(), System.err);
			System.err.println("Exiting due to client request");

			try {
				server.getServerSocket().close();
			} catch (IOException e) {
				System.err.println("Exception closing server socket, ignoring:"
						+ e);
			}
		} finally {
			if (tmpFile != null)
				tmpFile.delete();
		}
	}
}

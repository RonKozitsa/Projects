package net;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.List;

public class ThreadedHelloServer extends HelloServer{

	public static final String ERR_MESSAGE = "IO Error!";
	public static final String LISTEN_MESSAGE = "Listening on port: ";
	public static final String HELLO_MESSAGE = "hello ";
	public static final String BYE_MESSAGE = "bye"; 
	

	
	
	/**
	 * 1. Start listening on an open port. Write {@link #LISTEN_MESSAGE} followed by the port number (and a newline) to sysout.
	 * 	  If there's an IOException at this stage, exit the method.
	 * 
	 * 2. Run in an infinite loop; 
	 * in each iteration of the loop, wait for a client to connect, and execute a Thread to handle the connection.
	 * 
	 * *: in any case, before exiting the method you must close the server socket. 
	 *  
	 * @param sysout a {@link PrintStream} to which the console messages are sent.
	 * 
	 * 
	 */
	@Override
	public void run(PrintStream sysout) {
		try {
			sysout.print(LISTEN_MESSAGE + listen() + "\n");
		} catch (IOException e) {
			System.exit(-1);
		}
	}

	public static void main(String args[]) {
		ThreadedHelloServer server = new ThreadedHelloServer();

		server.run(System.err);
	}
	
	
	
	
	/**
	 *  The ConnectionHandler wraps a single connection to a client.
	 */
	private static class ConnectionHandler extends Thread{
		private Socket s; 				// The connection to the client
		private PrintStream sysout;		// a PrintStream to which the console messages are sent.
		

		public ConnectionHandler(Socket s, PrintStream sysout){
			this.s = s;
			this.sysout = sysout;
		}
		
		/**
		 * Run in a loop; 
		 * in each iteration of the loop read a line of text from the client. 
		 * If the text is {@link #BYE_MESSAGE}, send {@link #BYE_MESSAGE}, close the connection and quit the function. 
		 * Otherwise, send {@link #HELLO_MESSAGE} to the client, followed by the string sent by the client (and a newline).
		 * 
		 * If there are any IO Errors during the execution, output {@link HelloServer#ERR_MESSAGE}
		 * (followed by newline) to sysout. If the error is inside the loop,
	 	 * continue to the next iteration of the loop. Otherwise exit the method.
		 */
		@Override
		public void run() {
			BufferedReader reader;
			BufferedWriter writer;
			String line;
				try {
					reader = new BufferedReader(new InputStreamReader(s.getInputStream()));
					writer = new BufferedWriter(new OutputStreamWriter(s.getOutputStream()));
				}catch (IOException e) {
					sysout.print(ERR_MESSAGE);
					return;
				}
			while (true) {
				try {
					line = reader.readLine();
					if (line.equals(BYE_MESSAGE)){
						writer.write(BYE_MESSAGE);
						writer.flush();
						s.close();
						reader.close();
						writer.close();
						return;
					}else{
						writer.write(HELLO_MESSAGE + line + "\n");
						writer.flush();
					}


				} catch (IOException e) {
					sysout.print(ERR_MESSAGE + "\n");
					continue;
				}
			}
		}
	}
}


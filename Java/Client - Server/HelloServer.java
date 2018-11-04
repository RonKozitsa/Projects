package net;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.List;

public class HelloServer {

	public static final String ERR_MESSAGE = "IO Error!";
	public static final String LISTEN_MESSAGE = "Listening on port: ";
	public static final String HELLO_MESSAGE = "hello ";
	public static final String BYE_MESSAGE = "bye"; 

	private ServerSocket serverSocket;

	public ServerSocket getServerSocket() {
		return serverSocket;
	}
	
	/**
	 * Listen on the first available port in a given list.
	 * 
	 * <p>Note: Should not throw exceptions due to ports being unavailable</p> 
	 *  
	 * @return The port number chosen, or -1 if none of the ports were available.
	 *   
	 */
	public int listen(List<Integer> portList) throws IOException {
		for (Integer port:portList){
			try {

				return new ServerSocket(port.intValue()).getLocalPort();
			}catch (IOException e){
				continue;
			}
		}
		throw new IOException("no free port found");
	}

	
	/**
	 * Listen on an available port. 
	 * Any available port may be chosen.
	 * @return The port number chosen.
	 */
	public int listen() throws IOException {
		try{
			//look for some random available port
			serverSocket = 	new ServerSocket(0);
		}catch (IOException e){
			System.out.println("can't connect to port");
		}

        return serverSocket.getLocalPort();
	}


	/**
	 * 1. Start listening on an open port. Write {@link #LISTEN_MESSAGE} followed by the port number (and a newline) to sysout.
	 * 	  If there's an IOException at this stage, exit the method.
	 * 
	 * 2. Run in an infinite loop; 
	 * in each iteration of the loop, wait for a client to connect,
	 * then read a line of text from the client. If the text is {@link #BYE_MESSAGE}, 
	 * send {@link #BYE_MESSAGE}, close the connection and wait for the next client to connect. 
	 * Otherwise, send {@link #HELLO_MESSAGE} to the client, followed by the string sent by the client (and a newline).
	 * 
	 * If there's an IOException while in the loop, or if the client closes the connection before sending a line of text,
	 * send the text {@link #ERR_MESSAGE} to sysout, but continue to the next iteration of the loop.
	 * 
	 * *: in any case, before exiting the method you must close the server socket. 
	 *  
	 * @param sysout a {@link PrintStream} to which the console messages are sent.
	 * 
	 * 
	 */
	public void run(PrintStream sysout) {
		try {
			//getting the available port
			int port = listen();
			//writes a message to the console
			sysout.print(LISTEN_MESSAGE + port + "\n");
		} catch (IOException e) {
			System.out.println("cant get an available port");
			System.exit(-1);
			try {
				//closes the serversocket if we got an exception
				if (serverSocket != null) {
					serverSocket.close();
				}
			} catch (IOException m) {
				System.out.println("Error closing server socket");
			}
		}
		while (true) {
			try {
				//gets the client's socket
				Socket clientSocket = serverSocket.accept();
				BufferedReader clientReader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
				BufferedWriter clientWriter = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()));
				//gets message from client
				String message = clientReader.readLine();
				if (message.equals(BYE_MESSAGE)) {
					sysout.print(BYE_MESSAGE);
					clientSocket.close();
					//skips to next client
					continue;
				}
				clientWriter.write(HELLO_MESSAGE + message + "\n");
				clientWriter.flush();
			} catch (IOException e) {
				//prints error message
				sysout.print(ERR_MESSAGE);
				//skips to next client
				continue;
			} finally {
				try {
					//closes the server socket
					if (serverSocket != null) {
						serverSocket.close();
					}
				} catch (IOException e) {
					System.out.println("Error closing server socket");
				}
			}
		}
	}

	public static void main(String args[]) {
		HelloServer server = new HelloServer();
		server.run(System.err);

	}

}

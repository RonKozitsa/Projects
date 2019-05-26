import time
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008
from mpu6050 import mpu6050
from time import sleep
import wiringpi
import RPi.GPIO as GPIO
import random


CLK  = 18
MISO = 24
MOSI = 25
CS   = 21
mcp = Adafruit_MCP3008.MCP3008(clk=CLK, cs=CS, miso=MISO, mosi=MOSI)
FIRE_CHANNEL = 5
MICROPHONE_CHANNEL = 4
DISTANCE_SENSOR_CHANNEL = 3
POTENTIOMETER_CHANNEL = 2

# Hardware SPI configuration:
# SPI_PORT   = 0
# SPI_DEVICE = 0
# mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))

# set mode
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

# declare variables

gpioPin_led_blue = 20
gpioPin_led_red = 16
gpioPin_led_yellow = 12
gpioPin_led_green = 23
gpioPin_speaker = 19

frequencies = {
    gpioPin_led_blue: 784,
    gpioPin_led_green: 659,
    gpioPin_led_yellow: 523,
    gpioPin_led_red: 440,
}

leds = [gpioPin_led_green, gpioPin_led_yellow, gpioPin_led_blue, gpioPin_led_red]

game_is_on = True

# initiate pins
GPIO.setup(gpioPin_led_red, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(gpioPin_led_green, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(gpioPin_led_yellow, GPIO.OUT, initial=GPIO.LOW)
GPIO.setup(gpioPin_led_blue, GPIO.OUT, initial=GPIO.LOW)

wiringpi.wiringPiSetupGpio()
wiringpi.softToneCreate(gpioPin_speaker)

index = 0
current_num_of_moves = 1
computer_moves = []


def activate_led(pin_num, freq):
    GPIO.output(pin_num, GPIO.HIGH)
    wiringpi.softToneWrite(gpioPin_speaker, freq)
    sleep(0.5)
    GPIO.output(pin_num, GPIO.LOW)
    wiringpi.softToneWrite(gpioPin_speaker, 0)


def get_random_led_and_freq():
    global frequencies, leds
    led = random.choice(leds)
    freq = frequencies[led]
    return led, freq


def computer_turn():
    global computer_moves, index, frequencies, current_num_of_moves
    index = 0
    add_move_to_computer()
    for i in range(current_num_of_moves):
        activate_led(computer_moves[i], frequencies[computer_moves[i]])
        sleep(1)


def add_move_to_computer():
    global computer_moves, frequencies
    led, freq = get_random_led_and_freq()
    computer_moves.append(led)


def end_game():
    global game_is_on, computer_moves, leds
    computer_moves = []
    wiringpi.softToneWrite(gpioPin_speaker, 900)
    for led in leds:
        GPIO.output(led, GPIO.HIGH)
    sleep(3)


print('Reading MCP3008 values, press Ctrl-C to quit...')
# Print nice channel column headers.
print('| {0:>4} | {1:>4} | {2:>4} | {3:>4} | {4:>4} | {5:>4} | {6:>4} | {7:>4} |'.format(*range(8)))
print('-' * 57)
# Main program loop.
readAgain = True
while game_is_on:
    global index, current_num_of_moves, computer_moves
    computer_turn()
    while index < current_num_of_moves:
        # Read all the ADC channel values in a list.
        values = [0]*8
        for i in range(8):
            # The read_adc function will get the value of the specified channel (0-7).
            values[i] = mcp.read_adc(i)
            if readAgain and i is MICROPHONE_CHANNEL:
                last_microphone_sample = values[MICROPHONE_CHANNEL]
                readAgain = False
            if values[FIRE_CHANNEL] < 100 and i is FIRE_CHANNEL:
                if gpioPin_led_green == computer_moves[index]:
                    index += 1
                    activate_led(gpioPin_led_green,frequencies[gpioPin_led_green])
                else:
                    end_game()
            elif i is MICROPHONE_CHANNEL and abs(values[MICROPHONE_CHANNEL] - last_microphone_sample) > 100:
                if gpioPin_led_red == computer_moves[index]:
                    index += 1
                    activate_led(gpioPin_led_red, frequencies[gpioPin_led_red])
                    readAgain = True
                else:
                   end_game()
            elif values[DISTANCE_SENSOR_CHANNEL] < 100 and i is DISTANCE_SENSOR_CHANNEL:
                if gpioPin_led_yellow == computer_moves[index]:
                    index += 1
                    activate_led(gpioPin_led_yellow, frequencies[gpioPin_led_yellow])
                else:
                   end_game()
            elif values[POTENTIOMETER_CHANNEL] == 0 and i is POTENTIOMETER_CHANNEL:
                if gpioPin_led_blue == computer_moves[index]:
                    index += 1
                    activate_led(gpioPin_led_blue, frequencies[gpioPin_led_blue])
                else:
                   end_game()

        # Print the ADC values.
        print('| {0:>4} | {1:>4} | {2:>4} | {3:>4} | {4:>4} | {5:>4} | {6:>4} | {7:>4} |'.format(*values))
        # Pause for half a second.
        time.sleep(0.5)
    current_num_of_moves += 1
    sleep(2)



# youtube link - https://youtu.be/k-eNOb0a-rY


# set mode
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

# declare variables

gpioPin_led_blue = 20
gpioPin_led_red = 16
gpioPin_led_yellow = 12
gpioPin_led_green = 23
gpioPin_button_blue = 6
gpioPin_button_red = 5
gpioPin_button_yellow = 22
gpioPin_button_green = 27
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

GPIO.setup(gpioPin_button_red, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(gpioPin_button_green, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(gpioPin_button_yellow, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(gpioPin_button_blue, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)

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

def button_pushed_callback(channel):
    global computer_moves, index
    if channel == gpioPin_button_blue and gpioPin_led_blue == computer_moves[index]:
        index += 1
        activate_led(gpioPin_led_blue, frequencies[gpioPin_led_blue])
    elif channel == gpioPin_button_red and gpioPin_led_red == computer_moves[index]:
        index += 1
        activate_led(gpioPin_led_red, frequencies[gpioPin_led_red])
    elif channel == gpioPin_button_yellow and gpioPin_led_yellow == computer_moves[index]:
        index += 1
        activate_led(gpioPin_led_yellow, frequencies[gpioPin_led_yellow])
    elif channel == gpioPin_button_green and gpioPin_led_green == computer_moves[index]:
        index += 1
        activate_led(gpioPin_led_green, frequencies[gpioPin_led_green])
    else:
        end_game()


GPIO.add_event_detect(gpioPin_button_blue,GPIO.RISING,callback=button_pushed_callback,bouncetime=1000)
GPIO.add_event_detect(gpioPin_button_red,GPIO.RISING,callback=button_pushed_callback,bouncetime=1000)
GPIO.add_event_detect(gpioPin_button_yellow,GPIO.RISING,callback=button_pushed_callback,bouncetime=1000)
GPIO.add_event_detect(gpioPin_button_green,GPIO.RISING,callback=button_pushed_callback,bouncetime=1000)


while game_is_on:
    global index, current_num_of_moves
    computer_turn()
    while index < current_num_of_moves:
        pass
    current_num_of_moves += 1
    sleep(2)

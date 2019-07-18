from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTShadowClient
import logging
import Adafruit_DHT
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008
import time
import RPi.GPIO as GPIO
import json
from mpu6050 import mpu6050
import random

CLK = 18
MISO = 23
MOSI = 24
CS = 25
mcp = Adafruit_MCP3008.MCP3008(clk=CLK, cs=CS, miso=MISO, mosi=MOSI)
sensor_humidity = Adafruit_DHT.DHT22
sensor_accelerometer = mpu6050(0x68)

# Hardware SPI configuration:
# SPI_PORT   = 0
# SPI_DEVICE = 0
# mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))


HUMIDITY_PIN = 17
FIRE_CHANNEL = 3
MICROPHONE_CHANNEL = 2
DISTANCE_SENSOR_CHANNEL = 4
LIGHT_CHANNEL = 1

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

# Change according to your configuration
host = 'a1rpddawph4ysg-ats.iot.eu-west-1.amazonaws.com'
rootCA = 'fake root ca'
privateKey = 'fake key'
cert = 'fake cert'
thingName = 'final_project'
deviceId = thingName
topic = thingName + '/ron_shuli'


# Custom MQTT message callback
def customCallback(client, userdata, message):
    print("Received a new message: ")
    print(message.payload)
    print("from topic: ")
    print(message.topic)
    print("--------------\n\n")


# Custom Shadow callbacks
def customShadowCallback_Update(payload, responseStatus, token):
    # payload is a JSON string ready to be parsed using json.loads(...)
    # in both Py2.x and Py3.x
    if responseStatus == "timeout":
        print("Update request " + token + " time out!")
    if responseStatus == "accepted":
        payloadDict = json.loads(payload)
        print("~~~~~~~~~~~~~~~~~~~~~~~")
        print("Update request with token: " + token + " accepted!")
        print("property: " + str(payloadDict["state"]))
        print("~~~~~~~~~~~~~~~~~~~~~~~\n\n")
    if responseStatus == "rejected":
        print("Update request " + token + " rejected!")


def customShadowCallback_Get(payload, responseStatus, token):
    # payload is a JSON string ready to be parsed using json.loads(...)
    # in both Py2.x and Py3.x
    payloadDict = json.loads(payload)
    print("++++++++GET++++++++++")
    shadow_updated = False
    while not shadow_updated:
        try:
            if 'delta' in payloadDict['state']:
                delta = payloadDict['state']['delta']
                print("delta: " + str(delta))
                print("version: " + str(payloadDict["version"]))
                print("+++++++++++++++++++++++\n\n")
                newPayload = '{"state":{"reported":' + json.dumps(payloadDict['state']['delta']) + '}}'
                deviceShadowHandler.shadowUpdate(newPayload, customShadowCallback_Update, 5)
                shadow_updated = True
            elif 'reported' in payloadDict['state']:
                reported = payloadDict['state']['reported']
                print("reported: " + str(reported))
                print("version: " + str(payloadDict["version"]))
                print("+++++++++++++++++++++++\n\n")
                shadow_updated = True
            else:
                print("clear")
                newPayload = '{"state":{"reported": ''}}'
                deviceShadowHandler.shadowUpdate(newPayload, customShadowCallback_Update, 5)
                shadow_updated = True
        except:
            print("failed to update shadow")
            pass


def customShadowCallback_Delta(payload, responseStatus, token):
    global counter
    # payload is a JSON string ready to be parsed using json.loads(...)
    # in both Py2.x and Py3.x
    payloadDict = json.loads(payload)
    print("++++++++DELTA++++++++++")
    print("version: " + str(payloadDict["version"]))
    print("+++++++++++++++++++++++\n\n")
    newPayload = '{"state":{"reported":' + json.dumps(payloadDict['state']) + '}}'
    shadow_updated = False
    while not shadow_updated:
        try:
            deviceShadowHandler.shadowUpdate(newPayload, customShadowCallback_Update, 5)
            shadow_updated = True
        except:
            print("failed to update shadow")
            pass


configuration_completed = False
while not configuration_completed:
    try:
        # Configure logging

        logger = logging.getLogger("AWSIoTPythonSDK.core")
        logger.setLevel(logging.WARNING)
        streamHandler = logging.StreamHandler()
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        streamHandler.setFormatter(formatter)
        logger.addHandler(streamHandler)

        # Init AWSIoTMQTTClient
        myAWSIoTMQTTShadowClient = None
        myAWSIoTMQTTShadowClient = AWSIoTMQTTShadowClient(deviceId)
        myAWSIoTMQTTShadowClient.configureEndpoint(host, 8883)
        myAWSIoTMQTTShadowClient.configureCredentials(rootCA, privateKey, cert)

        # AWSIoTMQTTClient connection configuration
        myAWSIoTMQTTShadowClient.configureAutoReconnectBackoffTime(1, 32, 20)
        myAWSIoTMQTTShadowClient.configureConnectDisconnectTimeout(10)  # 10 sec
        myAWSIoTMQTTShadowClient.configureMQTTOperationTimeout(5)  # 5 sec
        configuration_completed = True
    except:
        print("could not configure - retrying")

# Connect and subscribe to AWS IoT
connected = False
while not connected:
    try:
        print('trying to connect')
        myAWSIoTMQTTShadowClient.connect()
        print('connected')
        connected = True
    except:
        print("could not connect - retrying")

shadow_created = False
while not shadow_created:
    try:
        # Create a deviceShadow with persistent subscription
        deviceShadowHandler = myAWSIoTMQTTShadowClient.createShadowHandlerWithName(thingName, True)
        # Listen on deltas
        deviceShadowHandler.shadowRegisterDeltaCallback(customShadowCallback_Delta)
        deviceShadowHandler.shadowGet(customShadowCallback_Get, 5)

        myMQTTClient = myAWSIoTMQTTShadowClient.getMQTTConnection()
        # Infinite offline Publish queueing
        myMQTTClient.configureOfflinePublishQueueing(-1)
        myMQTTClient.configureDrainingFrequency(2)  # Draining: 2 Hz
        myMQTTClient.configureConnectDisconnectTimeout(10)  # 10 sec
        myMQTTClient.configureMQTTOperationTimeout(5)  # 5 sec
        # Loop forever and wait for shadow
        shadow_created = True
    except:
        print("failed to create shadow - retrying")
        pass

last_temp = 25  # setting to room temp as default
while True:
    try:
        print('trying to get data')
        noise = mcp.read_adc(MICROPHONE_CHANNEL)
        light = mcp.read_adc(LIGHT_CHANNEL)
        fire = mcp.read_adc(FIRE_CHANNEL)
        proximity = mcp.read_adc(DISTANCE_SENSOR_CHANNEL)
        humidity, temperature = Adafruit_DHT.read_retry(sensor_humidity, HUMIDITY_PIN)
        if temperature is None:
            print('failed to read temp - setting to last captured temp')
            # in case we failed to read the temp, put the last valid temp as the current temp
            temperature = last_temp + random.uniform(0,
                                                     1)  # adding some random value to simulate real life temp changes
        else:
            last_temp = temperature
        accel_data = sensor_accelerometer.get_accel_data()
        gyro_data = sensor_accelerometer.get_gyro_data()
    except:
        print("failed to read data")
        pass
        try:
            myMQTTClient.publish(topic, json.dumps({"name": "ron and shuli",
                                                    "temperature": temperature,
                                                    "noise": noise,
                                                    "light": light,
                                                    "proximity": proximity,
                                                    "fire": fire,
                                                    "acc-x": accel_data['x'],
                                                    "acc-y": accel_data['y'],
                                                    "acc-z": accel_data['z']}), 1)
            print('published data')
        except:
            print("failed to publish - retrying")
            pass

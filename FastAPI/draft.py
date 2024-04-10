import cv2
import matplotlib
import tensorflow as tf
# from keras.models import load_model

model = tf.keras.models.load_model('mobile.h5')

print(model)
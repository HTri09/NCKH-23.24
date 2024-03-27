import tensorflow as tf
import numpy as np
import cv2

# Load the TensorFlow model
model = tf.keras.models.load_model('mobile.h5')

classes = [
    "Bao_Tang_Chung_Tich_Chien_Tranh",
    "Bao_Tang_Lich_Su",
    "Bao_Tang_My_Thuat",
    "Bao_Tang_Thanh_Pho",
    "Ben_Nha_Rong",
    "Bitexco",
    "Bui_Vien_Tay",
    "Buu_Dien_TPHCM",
    "Cau_Mong",
    "Cho_Ben_Thanh",
    "Cho_Binh_Tay",
    "Chua_Ba_Thien_Hau",
    "Chua_Buu_Long",
    "Chua_Ngoc_Hoang",
    "Chua_Phap_Hoa",
    "Chua_Vinh_Nghiem",
    "Cot_Co_Thu_Ngu",
    "Dinh_Doc_Lap",
    "Ho_Con_Rua",
    "Landmark_81",
    "Nha_Hat_Thanh_Pho",
    "Nha_Tho_Duc_Ba",
    "Nha_Tho_Giao_Xu_Tan_Dinh",
    "Thao_Cam_Vien",
    "UBND_TPHCM"
]

# Function to preprocess the image
def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (299, 299))  # Resize the image according to your model's input size
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    img = img / 255.0  # Normalize the pixel values (assuming the model expects inputs in [0, 1] range)
    return img

# Function to make predictions
def predict(image_path, model):
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    return prediction

# Example usage
image_path = 'Cho_Ben_Thanh.jpg'
prediction = predict(image_path, model)

print(prediction)

predicted_class_index = np.argmax(prediction)
confidence = classes[predicted_class_index]
# Print the predicted class index and confidence
print("Predicted class index:", predicted_class_index)
print("Confidence:", confidence)

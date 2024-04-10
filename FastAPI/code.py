import os
import numpy as np
import cv2
import pandas as pd
import tensorflow as tf


model = tf.keras.models.load_model('./mobile.h5')


# Gan cai folder chua may cai anh cau muon test vo
image_folder = 'FastAPI\code.py'
# test_folder = '/kaggle/input/dataset-v3-0/newDataset/Train'
# image_folder = '/kaggle/input/test-unknown-place/Unknown'

image_files = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]
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
sum = 0
lst =[]
# results = []
# max_prob_list = []
# for root, dirs, files in os.walk(test_folder):
#     for filename in files:
#         img_path = os.path.join(root, filename)
#         img = cv2.imread(img_path)
#         img = cv2.resize(img, (299, 299))
#         img = np.expand_dims(img, axis=0)
#         img = img / 255.0
        
  
#         prediction = model.predict(img)
#         predicted_class_index = np.argmax(prediction)
#         confidence = np.max(prediction)
#         predicted_class = classes[predicted_class_index]
#         max_prob_list.append(confidence)

#         results.append((filename, predicted_class, confidence))
# threshold = get_threshold(max_prob_list, k=1.5)
# print(threshold)

# for result in results:
#     print(result)
for filename in image_files:
    img_path = os.path.join(image_folder, filename)
    img = cv2.imread(img_path)
    img = cv2.resize(img, (299, 299))
    img = np.expand_dims(img, axis=0)
    img = img / 255.0
    
    prediction = model.predict(img)
    predicted_class_index = np.argmax(prediction)
    confidence = np.max(prediction)
    
    predicted_class = classes[predicted_class_index]
    sum = sum +  confidence
    if confidence > 0.7:
        lst.append((filename, predicted_class))
    print(filename, ":", predicted_class, ":", confidence, ")")
print("\n",lst)
print("Average", sum/len(image_files))
print(len(lst)/len(image_files))

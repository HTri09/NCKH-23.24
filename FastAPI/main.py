####################################### IMPORT #################################
import json
import pandas as pd
from PIL import Image
from loguru import logger
import sys

import cv2
import numpy as np

from fastapi import FastAPI, File, status, UploadFile
from fastapi.responses import RedirectResponse
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import HTTPException
from pydantic import BaseModel

from io import BytesIO

import numpy as np
import cv2
import tensorflow as tf

model = tf.keras.models.load_model('./mobile.h5')

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
            "UBND_TPHCM",
        ]

app = FastAPI()

logger.remove()
logger.add(
    sys.stderr,
    colorize=True,
    format="<green>{time:HH:mm:ss}</green> | <level>{message}</level>",
    level=10,
)
logger.add(
    "../logs/server.fastapi.log", rotation="1 MB", level='INFO', compression="zip"
)

app = FastAPI(
    title="Object Detection FastAPI Template",
    description="""Obtain object value out of image and return image and json result""",
    version="2023.1.31",
)

# This function is needed if you want to allow client requests
# from specific domains (specified in the origins argument)
# to access resources from the FastAPI server,
# and the client and server are hosted on different domains.
origins = ["http://localhost", "http://localhost:8008", "*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# redirect
@app.get("/", include_in_schema=False)
async def redirect():
    return RedirectResponse("/docs")


@app.get('/healthcheck', status_code=status.HTTP_200_OK)
def perform_healthcheck():
    return {'healthcheck': 'Everything OK!'}


@app.post('/predict')
async def predictImage(buffer: bytes = File(...)):
    try:
        bufferArray = np.frombuffer(buffer, dtype=np.uint8)
        img = cv2.imdecode(bufferArray, cv2.IMREAD_COLOR)
        sum = 0

        img = cv2.resize(img, (299, 299))
        img = np.expand_dims(img, axis=0)
        img = img / 255.0

        prediction = model.predict(img)
        predicted_class_index = np.argmax(prediction)
        confidence = np.max(prediction)

        predicted_class = classes[predicted_class_index]
        sum = sum + confidence

        print(predicted_class, ":", confidence, ")")
        return {'predict': f'{predicted_class}: {confidence}'}
    except Exception as e:
        print(e)
        return {'error': e}


@app.get("/")
async def root():
    return {"message": "Hello World"}


# uvicorn main:app --reload

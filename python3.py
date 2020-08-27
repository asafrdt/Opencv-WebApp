import numpy as np
import cv2 as cv2
import sys
from skimage import io
import urllib
import numpy as np


def Face_Eyes_detector(url):
    face_classifier = cv2.CascadeClassifier(
        './client/src/Haarcascades/haarcascade_frontalface_default.xml')
    eye_classifier = cv2.CascadeClassifier(
        './client/src/Haarcascades/haarcascade_eye.xml')

    img = io.imread(url)
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    faces = face_classifier.detectMultiScale(gray, 1.3, 5)

    # When no faces detected, face_classifier returns and empty tuple
    if faces is ():
        print("No Face Found")

    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x+w, y+h), (127, 0, 255), 2)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = img[y:y+h, x:x+w]
        eyes = eye_classifier.detectMultiScale(roi_gray)
        for (ex, ey, ew, eh) in eyes:

            cv2.rectangle(roi_color, (ex, ey),
                          (ex+ew, ey+eh), (255, 255, 0), 2)

    return (roi_color)


url = sys.argv[1]
# url = "https://firebasestorage.googleapis.com/v0/b/portfolio-6bf82.appspot.com/o/images%2Fabraham.jpg?alt=media&token=df24c8ee-4dda-4959-a2ff-b9185964139f"
img = Face_Eyes_detector(url)
cv2.imwrite("./client/src/images/face-eyes-detect.jpg", img)
print(img)

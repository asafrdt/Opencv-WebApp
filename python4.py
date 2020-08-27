import cv2 as cv2
import sys
from skimage import io
import urllib
import numpy as np


def FaceDetector(url):
    # We point OpenCV's CascadeClassifier function to where our
    # classifier (XML file format) is stored
    face_classifier = cv2.CascadeClassifier(
        './client/src/Haarcascades/haarcascade_frontalface_default.xml')

    # Load our image then convert it to grayscale
    img = io.imread(url)
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Our classifier returns the ROI of the detected face as a tuple
    # It stores the top left coordinate and the bottom right coordiantes
    faces = face_classifier.detectMultiScale(gray, 1.3, 5)
    # When no faces detected, face_classifier returns and empty tuple
    if faces is ():
        print("No faces found")

    # We iterate through our faces array and draw a rectangle
    # over each face in faces
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x+w, y+h), (127, 0, 255), 2)

    return (img)


url = sys.argv[1]
img = FaceDetector(url)
# cv2.imshow("img", img)
# cv2.waitKey()
# cv2.destroyAllWindows()
cv2.imwrite("./client/src/images/face-detect.jpg", img)
print(img)

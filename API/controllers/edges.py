from PIL import Image
import numpy as np

def welcome(req):
    return "Waiting for an image", 200

def image(req):
    image = req.files.to_dict()['image']
    img = Image.open(image).convert('L')
    img.show()
    pixels = np.array(img)
    print(pixels)
    return "Recieved image", 201
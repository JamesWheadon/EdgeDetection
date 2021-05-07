import math
import numpy as np
from PIL import Image

def welcome(req):
    return "Waiting for an image", 200

def image(req):
    image = req.files.to_dict()['image']
    img = Image.open(image).convert('L')
    v_edges = vertical_edges(img)
    h_edges = horizontal_edges(img)
    both_edges = np.sqrt((np.square(v_edges) + np.square(h_edges)))
    both_edges = np.clip(both_edges.astype(int), 0, 255)
    both_edges = np.flip(np.rot90(both_edges), 0)
    return both_edges.tolist(), 201

def vertical_edges(image):
    pixels = np.array(image)
    vertical_sobel = np.array([[1, 0, -1], [2, 0, -2], [1, 0, -1]])
    width, height = image.size
    new_image = np.zeros((width, height))
    for i in range(1, width-1):
        for j in range(1, height-1):
            pixel_kernel = pixels[j-1 : j+2, i-1 : i+2]
            value = np.sum(pixel_kernel * vertical_sobel)
            new_image[i, j] = value
    new_image = np.clip(new_image, 0, 255)
    return new_image

def horizontal_edges(image):
    pixels = np.array(image)
    horizontal_sobel = np.array([[1, 2, 1], [0, 0, 0], [-1, -2, -1]])
    width, height = image.size
    new_image = np.zeros((width, height))
    for i in range(1, width-1):
        for j in range(1, height-1):
            pixel_kernel = pixels[j-1 : j+2, i-1 : i+2]
            value = np.sum(pixel_kernel * horizontal_sobel)
            new_image[i, j] = value
    new_image = np.clip(new_image, 0, 255)
    return new_image
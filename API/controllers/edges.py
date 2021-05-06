from PIL import Image
import numpy as np


horizontal_sobel = np.array([[1, 2, 1], [0, 0, 0], [-1, -2, -1]])

def welcome(req):
    return "Waiting for an image", 200

def image(req):
    image = req.files.to_dict()['image']
    img = Image.open(image).convert('L')
    img.show()
    vertical_image = Image.fromarray(np.uint8(vertical_edges(img)))
    vertical_image.show()
    return "Recieved image", 201

def vertical_edges(image):
    pixels = np.array(image)
    vertical_sobel = np.array([[1, 0, -1], [2, 0, -2], [1, 0, -1]])
    width, height = image.size
    new_image = np.zeros((width, height))
    print(width, height)
    print(pixels.shape)
    for i in range(1, width-1):
        for j in range(1, height-1):
            pixel_kernel = pixels[j-1 : j+2, i-1 : i+2]
            if (pixel_kernel.size != 9):
                print(i, j)
                print(pixel_kernel)
            value = np.sum(pixel_kernel * vertical_sobel)
            new_image[i, j] = value
    new_image = np.clip(new_image, 0, 255)
    new_image = np.rot90(new_image)
    new_image = np.flip(new_image, 0)
    print(new_image)
    return new_image
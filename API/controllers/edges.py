from PIL import Image

def welcome(req):
    return "Waiting for an image", 200

def image(req):
    image = req.files.to_dict()['image']
    img = Image.open(image)
    print(img.size)
    img.show()
    return "Recieved image", 201
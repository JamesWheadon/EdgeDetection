def welcome(req):
    return "Waiting for an image", 200

def image(req):
    print(req)
    return "Recieved image", 201
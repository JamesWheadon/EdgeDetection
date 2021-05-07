# Project: Flask edge detection

Carries out edge detection on an image, sending the image to a Flask API which uses numpy to carry out edge detection on the image, sending back the pixel intensities to the client to be rendered in a canvas element.

![Example image of filter](API/filteredImage.jpg)

## Installation and Usage
- Clone or download this repo
- Navigate to root directory of this repository
- Open the terminal and navigate to the API subdirectory
    - `pipenv shell`
    - `pipenv install`
    - `pipenv run dev`
    - Flask server will be running on port 5000
- Navigate to the Client subdirectory
    - `npm install`
    - `npm run dev`
    - Client will be running on port 8080

## Technologies
- HTML, JavaScript, React, Webpack, Python, Flask, Numpy, Pillow 

### Dependencies: 
   - Server: Flask, Numpy, Pillow
   - Client: React, Axios

## Future Features
- Decrease computational cost for faster result
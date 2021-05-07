import React, { useState, useRef } from 'react';
import axios from 'axios';

function ImageUpload() {

    const [image, setImage] = useState("")
    const [pixels, setPixels] = useState([])

    const updateImage = async (e) => {
        const input = URL.createObjectURL(e.target.files[0])
        setImage(input)
        let formData = new FormData();
        formData.append("image", e.target.files[0]);
        const data = await axios.post('http://localhost:5000/edges', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setPixels(data.data)
    }
    const canvasRef = useRef()

    const renderCanvas = () => {
        if (pixels.length != 0) {
            console.log(pixels)
            return (
                <canvas height={pixels.length} width={pixels[0].length} ref={canvasRef}/>
            )
        }
    }

    const renderProcessedImage = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        const id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const canvasPixels = id.data;
        print(canvasPixels)
    }

    return (
        <>
            <form role="form">
                <label>
                    <input type="file" onChange={updateImage} />
                </label>
            </form>
            <img src={image} />
            {pixels.length != 0 ? [renderCanvas(), renderProcessedImage()] : null}
        </>
    );
};

export default ImageUpload;

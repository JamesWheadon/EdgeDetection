import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Canvas } from '../'

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

    return (
        <>
            <form role="form">
                <label>
                    <input type="file" onChange={updateImage} />
                </label>
            </form>
            <img src={image} />
            {pixels.length != 0 ? <Canvas pixels={pixels}/> : null}
        </>
    );
};

export default ImageUpload;

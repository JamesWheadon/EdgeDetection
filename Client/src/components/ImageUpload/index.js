import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {

    const [image, setImage] = useState("")

    const updateImage = async (e) => {
        const input = URL.createObjectURL(e.target.files[0])
        setImage(input)
        let formData = new FormData();
        formData.append("image", e.target.files[0]);
        await axios.post('http://localhost:5000/edges', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    return (
        <>
            <form role="form">
                <label>
                    <input type="file" onChange={updateImage} />
                </label>
            </form>
            <img src={image} />
        </>
    );
};

export default ImageUpload;

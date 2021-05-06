import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {

    const [image, setImage] = useState("")

    const updateImage = e => {
        console.log(e)
        const input = URL.createObjectURL(e.target.files[0])
        console.log(input)
        setImage(input)
        console.log(image)
    }

    return (
        <>
        <form role="form">
            <label>
                <input type="file" onChange={updateImage} />
            </label>
        </form>
        <img src={image}/>
        </>
    );
};

export default ImageUpload;

import React, { useRef, useEffect } from 'react';

function Canvas({ pixels }) {

    const canvasRef = useRef()

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        const id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
        const canvasPixels = id.data;
        print(canvasPixels)
    }, [])

    return <canvas height={pixels.length} width={pixels[0].length} ref={canvasRef} />
};

export default Canvas;

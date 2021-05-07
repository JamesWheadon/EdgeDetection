import React, { useRef, useEffect } from 'react';

function Canvas({ pixels }) {

    const canvasRef = useRef()

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        let id = context.createImageData(1,1); // only do this once per page
        let d  = id.data;                        // only do this once per page
        for (let row in pixels) {
            for (let column in pixels[row]) {
                d[0]   = pixels[row][column];
                d[1]   = pixels[row][column];
                d[2]   = pixels[row][column];
                d[3]   = 255;
                context.putImageData( id, column, row );
            }
        }
    }, [pixels])

    return <canvas height={pixels.length} width={pixels[0].length} ref={canvasRef} />
};

export default Canvas;

import { useEffect, useRef } from 'react';
import { MatrixEffect } from '../logic/MatrixEffect';
import { processFrame } from '../logic/MatrixAnimation';

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');

        const matrixEffect = new MatrixEffect(
            canvas.width,
            canvas.height,
        );

        let animationFrameId;
        const render = () => {
            processFrame(matrixEffect, context);
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, [processFrame]);

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;
import { useEffect, useRef } from 'react';
import { MatrixEffect } from '../logic/MatrixEffect';
import { processFrame } from '../logic/MatrixAnimation';

const BirthdayMatrix = props => {
    const canvasRef = useRef(null);

    let lastTime = 0;
    let timer = 0;
    const fps = 20;
    const nextFrame = 1000 / fps;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#FF00FF'); // Fuchsia.
        gradient.addColorStop(0.2, '#FF69B4'); // pink.
        gradient.addColorStop(0.4, '#FF00FF'); // Fuchsia.
        gradient.addColorStop(0.6, '#9F2B68'); // Amaranth.
        gradient.addColorStop(0.8, '#FF00FF'); // Fuchsia.
        gradient.addColorStop(1.0, '#FFB6C1'); // Light Pink.

        const matrixEffect = new MatrixEffect(
            canvas.width,
            canvas.height,
            gradient,
        );

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            matrixEffect.resizeWindow(canvas.width, canvas.height);
        });

        let animationFrameId;
        const render = (timeStamp) => {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            if (timer > nextFrame) {
                processFrame(matrixEffect, context, canvas.width, canvas.height, gradient);
                timer = 0;
            } else {
                timer += deltaTime;
            }
            animationFrameId = window.requestAnimationFrame(render);
        };
        render(0);
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, []);

    return <canvas ref={canvasRef} {...props}/>
}

export default BirthdayMatrix;
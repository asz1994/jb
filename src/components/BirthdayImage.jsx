import { useEffect, useRef } from 'react';
import { initializeParticles, processFrame } from '../logic/ImageParticle';
import { sourceImageBase64 } from '../logic/ImageSource';

const BirthdayImage = props => {
    const canvasImageRef = useRef(null);

    useEffect(() => {
        const canvas = canvasImageRef.current;
        const context = canvas.getContext('2d');

        const image = new Image();
        image.src = sourceImageBase64;

        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const particles = [];
            const numberOfParticles = 6000;
            initializeParticles(
                particles,
                numberOfParticles,
                canvas.width,
                canvas.height,
            );

            const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
            context.clearRect(0, 0, canvas.width, canvas.height);

            const mappedImage = [];
            for (let y = 0; y < canvas.height; y++) {
                let row = [];
                for (let x = 0; x < canvas.width; x++) {
                    const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
                    const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
                    const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
                    const brightness = calculateBrightness(red, green, blue);
                    const cell = [brightness];
                    row.push(cell);
                }
                mappedImage.push(row);
            }

            function calculateBrightness(red, green, blue) {
                return Math.sqrt(
                    (red * red) * 0.299 +
                    (green * green) * 0.587 +
                    (blue * blue) * 0.114
                ) / 100;
            }

            let animationFrameId;

            const render = () => {
                processFrame(
                    context,
                    canvas.width,
                    canvas.height,
                    particles,
                    mappedImage,
                );
                animationFrameId = window.requestAnimationFrame(render);
            }
            render();

            return () => {
                window.cancelAnimationFrame(animationFrameId);
            }
        });

    }, []);

    return <canvas ref={canvasImageRef} {...props} />
}

export default BirthdayImage;
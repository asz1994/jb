import { MatrixEffect } from './MatrixEffect';

export function processFrame(
    matrixEffect: MatrixEffect,
    context: any,
    width: number,
    height: number,
    gradient: any,
) {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, width, height);
    context.textAlign = 'center';
    context.font = matrixEffect.fontSize + 'px monospace';
    // context.fillStyle = '#FF00FF';
    context.fillStyle = gradient;
    matrixEffect.symbols.forEach(s => {
        s.draw(context);
    });
}

export default {};
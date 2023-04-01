import { MatrixEffect } from './MatrixEffect';

export function processFrame(matrixEffect: MatrixEffect, context: any) {
    context.font = matrixEffect.fontSize + 'px monospace';
    matrixEffect.symbols.forEach(s => {
        s.draw(context);
    });
}

export default {};
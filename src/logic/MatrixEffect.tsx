import { MatrixSymbol } from './MatrixSymbol';

export class MatrixEffect {
    canvasWidth: number;
    canvasHeight: number;
    fontSize: number;
    columns: number;
    symbols: MatrixSymbol[];

    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new MatrixSymbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
};

export default {};
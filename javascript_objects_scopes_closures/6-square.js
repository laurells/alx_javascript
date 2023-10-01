import Square from './5-square';
class Square extends Square {
    constructor(size) {
        super(size);
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        if (this.width !== undefined && this.height !== undefined) {
            for (let i = 0; i < this.height; i++) {
                console.log(c.repeat(this.width));
            }
        }
    }
}

// Example usage:
const square = new Square(5);
square.charPrint(); // Prints a square with 'X' characters
square.charPrint('A'); // Prints a square with 'A' characters

import Rectangle from './4-rectangle';

class Square extends Rectangle {
    constructor(size) {
        // Calling the constructor of Rectangle with size as both width and height
        super(size, size);
    }
}

export default Square;
// Example usage:
const square = new Square(4);
square.print(); // Prints a square with 4 size
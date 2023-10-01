class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        } else {
            // Create an empty object
            this.width = undefined;
            this.height = undefined;
        }
    }

    print() {
        if (this.width === undefined || this.height === undefined) {
            console.log("Empty Object");
        } else {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }

    rotate() {
        if (this.width !== undefined && this.height !== undefined) {
            const temp = this.width;
            this.width = this.height;
            this.height = temp;
        }
    }

    double() {
        if (this.width !== undefined && this.height !== undefined) {
            this.width *= 2;
            this.height *= 2;
        }
    }
}

export default Rectangle;
// Example usage:
const rectangle1 = new Rectangle(5, 3);
rectangle1.print(); // Prints a rectangle with 5 width and 3 height

rectangle1.rotate(); // Rotate the rectangle
rectangle1.print(); // Prints a rectangle with 3 width and 5 height

rectangle1.double(); // Double the rectangle
rectangle1.print(); // Prints a rectangle with 6 width and 10 height

const rectangle2 = new Rectangle(0, 4);
rectangle2.print(); // Prints "Empty Object"

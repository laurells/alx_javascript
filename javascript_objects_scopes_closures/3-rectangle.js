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
}

// Example usage:
const rectangle1 = new Rectangle(5, 3);
rectangle1.print(); // Prints a rectangle with 5 width and 3 height

const rectangle2 = new Rectangle(0, 4);
rectangle2.print(); // Prints "Empty Object"

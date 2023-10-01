#!/usr/bin/node
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
}

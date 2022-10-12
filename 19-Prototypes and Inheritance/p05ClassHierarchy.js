function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }
        get area() {
            return this._area;
        }
        changeUnits(value) {
            if (value == 'mm' || value == 'cm' || value == 'm') {
                this.units = value;
            }
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }
        get radius() {
            let radiusInCm
            switch (this.units) {
                case 'mm':
                    radiusInCm = this._radius * 10;
                    break;
                case 'cm':
                    radiusInCm = this._radius;
                    break;
                case 'm':
                    radiusInCm = this._radius / 10;
                    break;
            }
            return radiusInCm;
        }
        set radius(value) {
            this._radius = value;
        }
        get area() {
            return Math.PI * this.radius ** 2;
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this._width = width;
            this._height = height;
            this.units = units;
        }
        get height() {
            return this.dimension(this._height);
        }
        get width() {
            return this.dimension(this._width);
        }

        dimension(len) {
            let lengthInCm
            switch (this.units) {
                case 'mm':
                    lengthInCm = len * 10;
                    break;
                case 'cm':
                    lengthInCm = len;
                    break;
                case 'm':
                    lengthInCm = len / 10;
                    break;
            }
            return lengthInCm;
        }

        get area() {
            return this.width * this.height;
        }
        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure, Circle, Rectangle,
    }
}

let { Figure, Circle, Rectangle } = solve();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50


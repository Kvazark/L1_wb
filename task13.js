class Shape{

    calculateArea(){
        throw new Error('Method not implemented');
    }
    calculatePerimeter(){
        throw new Error('Method not implemented');
    }
}
class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return 3.1415*(this.radius*this.radius);
    }
    calculatePerimeter() {
        return 2*3.1415*this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    calculateArea() {
        let p = this.calculatePerimeter()/2;
        return Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC));
    }

    calculatePerimeter() {
        return this.sideA+this.sideB+this.sideC;
    }
}
const circle = new Circle(3);
console.log(circle.calculateArea());
console.log(circle.calculatePerimeter());
const rectangle = new Rectangle(2,4);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
const triangle = new Triangle(2,4, 5);
console.log(triangle.calculateArea());
console.log(triangle.calculatePerimeter());
const { Triangle, Square, Circle } = require("./shapes");
describe("Circle", () => {
  it("should return circle with color, tex, and text color", () => {
    const circle = new Circle('red', 'crc', 'yellow');
    expect(circle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="110" r="80" fill="red"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="yellow">crc</text>
</svg>`);
  });
});

describe("Triangle", () => {
  it("should return triangle with color, tex, and text color", () => {
    const triangle = new Triangle('red', 'tri', 'blue');
    expect(triangle.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="red"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="blue">tri</text>
</svg>`);
  });
});

describe("Square", () => {
  it("should return square with hexadecimal number color, tex, and text color", () => {
    const square = new Square('#990000', 'squ', '#008000');
    expect(square.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="160" x="73" y="40" fill="#990000"/>
    <text x="150" y="130" font-size="40" text-anchor="middle" fill="#008000">squ</text>
</svg>`);
  });
});


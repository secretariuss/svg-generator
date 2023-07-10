const inquirer = require('inquirer');
const fs = require("fs");
const {Triangle, Square, Circle} = require("./lib/shapes");
const fileName = "./examples/logo.svg";

function createLogo(reply) {
  const svg = writeToFile(reply);
  fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
}

function userChoises() {
  return inquirer
    .prompt([

      {
        name: 'text',
        message: 'What text would you like you logo to display? (three character maximum)',
        type: 'input'
      },
      {
        name: 'textColor',
        message: 'Choose text color?',
        type: 'input'
      },
      {
        name: 'shape',
        message: 'What shape would you like the logo to render?',
        choices: ["Triangle", "Square", "Circle"],
        type: 'list'
      },
      {
        name: 'shapeColor',
        message: 'Choose shapes color? (OR a hexadecimal number)',
        type: 'input'
      },
    ])
    .then((reply) => {
      createLogo(reply);
    })
    .catch(err => {
      console.log(err)
    });
}

function writeToFile(reply) {
  if (reply.shape === 'Circle') {
    let userShape = new Circle(reply.shapeColor, reply.text, reply.textColor)
    return userShape.render()
  }

  if (reply.shape === 'Square') {
    let userShape = new Square(reply.shapeColor, reply.text, reply.textColor)
    return userShape.render()
  }
  if (reply.shape === "Triangle") {
    let userShape = new Triangle(reply.shapeColor, reply.text, reply.textColor)
    return userShape.render()
  }
}

userChoises();
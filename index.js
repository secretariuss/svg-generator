const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(nameFile, reply) {
  let svg = "";
  svg =
    '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";
  svg += `${reply.shape}`;

  let shape;
  if (reply.shape === "Triangle") {
    shape = new Triangle();
    svg += `<polygon points="150, 18 244, 182 56, 182" fill="${reply.shapeColor}"/>`;
  } else if (reply.shape === "Square") {
    shape = new Square();
    svg += `<rect x="73" y="40" width="160" height="160" fill="${reply.shapeColor}"/>`;
  } else {
    shape = new Circle();
    svg += `<circle cx="150" cy="115" r="80" fill="${reply.shapeColor}"/>`;
  }

  svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${reply.textColor}">${reply.text}</text>`;

  svg += "</g>";

  svg += "</svg>";

  fs.writeFile(nameFile, svg, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function userChoises() {
  return inquirer
    .prompt([

      {
        name: 'text',
        message: 'What text would you like you logo to display?',
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
        message: 'Choose shapes color?',
        type: 'input'
      },
    ])
};

async function init() {
  let reply = await userChoises();
  writeToFile("logo.svg", reply);
}

init();

module.exports = userChoises;
const inquirer = require('inquirer');

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
        name: 'list',
        message: 'How do I install this application?',
        type: 'input'
      },
      {
        name: 'shapeColor',
        message: 'Choose shapes color?',
        type: 'input'
      },
    ])
};

const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions.'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How will this project be used?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "Other"
        ]
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter guidelines for contributing.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter any testing instructions.'
    },
    {
        type: 'input',
        name: 'userid',
        message: 'Please enter your github user id.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe was created");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, ' '));
    })

}

// function call to initialize program
init();

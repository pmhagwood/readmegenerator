const inquirer = require("inquirer");
const fs = require("fs");


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
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "Unlicensed"
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
        const response = generateFile(answers);

        writeToFile("README.md", response);
    })

}

const generateFile = answers => {
    return `
# ${answers.title}

${answers.license === "MIT License" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)" : answers.license === "Apache License" ? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.license === "GPL License" ? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)" : "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"}

## Description of the project
${answers.description}
    
## Table of Contents
- [instructions](#-Installation-Instructions)
- [How it is used](#-How-the-Project-Should-Be-Used)
- [License](#-License)
- [Contribution](#-Contribution-Guidelines)
- [Testing](#-Test-Instructions)
- [Questions](#-Questions)
    
## Installation Instructions
${answers.install} 
    
## How the Project Should Be Used
${answers.useage}
    
## License 
${answers.license === "MIT License" ? "This application uses The MIT License" : answers.license === "Apache License" ? "This application uses The Apache License" : answers.license === "GPL License" ? "This application uses The GPL License" : "This application is unlicensed"}
    
## Contribution Guidelines
${answers.guidelines}
    
## Test Instructions
${answers.testing}
    
## Questions
Get in touch with any questions by visiting my github:
[${answers.userid}](https://github.com/${answers.userid}/) 
  
Or you can email me at:
[${answers.email}](mailto:${answers.email})
    
`;
};

// function call to initialize program
init();

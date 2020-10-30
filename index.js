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
        const response = generateFile(answers);

        writeToFile("README.md", response);
    })

}

const generateFile = answers => {
    return `
    # ${answers.title}

    # Description of the project
    ${answers.description}
    
    ## Table of Contents
    - [instructions](#-Installation-Instructions)
    - [How it is used](#-How-the-Project-Should-Be-Used)
    - [License](#-License)
    - [Contribution](#-Contribution-Guidelines)
    - [Testing](#-Test-Instructions)
    - [Questions](#-Questions)
    
    # Installation Instructions
    ${answers.install} 
    
    # How the Project Should Be Used
    ${answers.useage}
    
    # License 
    Choose from a list of options.
    
    # Contribution Guidelines
    Insert Contribution guidelines here.
    
    # Test Instructions
    Insert Test instructions here.
    
    # Questions
    [github user name](https://github.com/pmhagwood/) 
    
    [email](https://github.com/pmhagwood/weatherdashboard)
    
    `;
  };

// function call to initialize program
init();

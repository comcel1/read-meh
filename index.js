// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What email address would you like to display on this README?'
    }, 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'How can a user install this software?'
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any additional pertinent user information.'
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Pick your License.',
        choices: ["MIT", "ISC", "APACHE", "GPL", "None"]
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how a user can contribute to this repo.'
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'How can a user run tests with this software?'
    }, 
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('README.MD', generateMarkdown({...responses}))
    })
}


// Function call to initialize app
init();

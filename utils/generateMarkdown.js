// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
  if (license === "MIT") {
    return `![badge](https://img.shields.io/badge/License-MIT-blue.svg)`;
  
  } else if (license === "ISC") {
    return `![badge](https://img.shields.io/badge/License-ISC-blue.svg)`

  } else if (license === "APACHE") {
    return `![badge](https://img.shields.io/badge/License-Apache-blue.svg)`

  } else if (license === "GPL") {
    return `![badge](https://img.shields.io/badge/License-GPL-blue.svg)`

  } else if (license === "None") {
    return '';
}
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
renderLicenseLink = license => {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}


## Table of Contents
* [Installation](#installation) \n
* [Usage](#usage)  \n
* [License](#license)  \n
* [Contributors](#contributing)  \n
* [Questions](#questions)  


## Installation
${data.installation}


## Usage
${data.usage}


## Contributions
${data.contributing}


## Tests
${data.tests}


## License
${renderLicenseBadge(data.license)}


## Questions
Please don't hesitate to reach out if you have any questions or comments. You can reach me through github or directly via email. 
[Github](https://github.com/${data.github})  
${data.email}
`
}

module.exports = generateMarkdown;

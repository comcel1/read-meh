// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return `![badge](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (license === "ISC") {
    return `![badge](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === "APACHE") {
    return `![badge](https://img.shields.io/badge/License-Apache-blue.svg)`;
  } else if (license === "GPL") {
    return `![badge](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else if (license === "None") {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "ISC") {
    return `[ISC](https://opensource.org/licenses/ISC)`;
  } else if (license === "APACHE") {
    return `[APACHE](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL") {
    return `[GPL](https://opensource.org/licenses/gpl-license)`;
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `The license for this software is provided by ${license}.`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
${data.description}

***

## Table of Contents
* [Installation](#installation) 
* [Usage](#usage)  
* [Contributions](#contributions)  
* [License](#license)  
* [Questions](#questions)  


## Installation
${data.installation}


## Usage
${data.usage}


## Contributions
${data.contributing}


## Tests
${data.tests}

***

## License
${renderLicenseSection(data.license)}
Click on the ${renderLicenseLink(data.license)} link to learn more.

***

## Video Walkthrough
https://www.awesomescreenshot.com/video/7499949?key=00048f991e03b2e06e6e01e08aeb5510

### Questions
Please don't hesitate to reach out if you have any questions or comments. You can reach me through github or directly via email. \n 
[Github](https://github.com/${data.github}) \n
${data.email}

`;
}

module.exports = generateMarkdown;

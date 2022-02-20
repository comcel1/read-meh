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
function renderLicenseLink(license) {}

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
## license 
${renderLicenseBadge(data.license)}`
}

module.exports = generateMarkdown;

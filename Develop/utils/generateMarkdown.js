// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `[${license} license badge](https://img.shields.io/badge/License-${license}-blueviolet)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}

  ## Table of Contents


  ## Description
  ${data.description}

  ## License
  ${data.license}

  ## Questions
  My repository is ${data.repo}

  If you have any questions contact ${data.username}. You can find my repository here at ${data.repo}.


`;
}

module.exports = generateMarkdown;

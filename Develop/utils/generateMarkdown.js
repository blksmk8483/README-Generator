// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

    case 'BSD 2-Clause License':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause`;

    case 'BSD 3-Clause License':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

    default:
      return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}
---
  ## Description
  ${data.description}

---
  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

---
## Installation
If applicable, describe the steps required to install your project for the Installation section.
${data.installation}

---
 ## Usage  
 Provide instructions and examples of your project in use for the Usage section.
${data.usage}

 ---
  ## License
  ${renderLicenseBadge(data.license)} 

---
  ## Contributing
  If applicable, provide guidelines on how other developers can contribute to your project.
  ${data.contributing}

---
## Test
If applicable, provide any tests written for your application and provide examples on how to run them.
${data.tests}

---
  ## Questions
 If you have any questions my github username is ${data.username}. You can find my repository here at ${data.repo}.
`;
}

module.exports = generateMarkdown;

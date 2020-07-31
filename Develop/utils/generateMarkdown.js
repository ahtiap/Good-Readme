// function to generate markdown for README
function generateMarkdown(data) {
  // badge choices
  var badgeChoices = [
    "Apache License 2.0",
    "MIT License",
    "Eclipse Public License2.0",
  ];
  // array of badge links
  var badges = [
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
  ];
  // variable to contain the coresponding badge
  var badge = badges[badgeChoices.indexOf(data.license)];
  //////////////
  return `# **${data.title}**
  ${badge}\n
  ## **_Table of Contents_**:
  ## [Description](#-Description)

  ## [Installation](#-Installation)

## [License](#-License)

## [Contributing](#-Contributing)


## [Questions](#-Questions)




## &#x1F539; **_Description_**:
    ${data.description}
  ### &#x1F539; **_Installation_**:
    ${data.installation}
  ### &#x1F539; **_License_**:
    This application is covered under ${data.license}
  ### &#x1F539; **_Contributing_**:
    Contributors are:
    ${data.contributing}
  ### &#x1F539; **_Questions_**:
    For additional informations you can reach me using the following options :\n
    [Github:](https://github.com/${data.username})
    Email: ${data.email}
  `;
}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
module.exports = generateMarkdown;

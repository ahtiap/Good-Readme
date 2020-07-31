// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  
  ## **_Table of Contents_**:
  ## [Description](#-Description)

  ## [Installation](#-Installation)

## [License](#-License)

## [Contributing](#-Contributing)


## [Questions](#-Questions)




## **_Description_**:
  ${data.description}
  ### **_Installation_**:
  ${data.installation}
  ### **_License_**:
  This application is covered under ${data.license}
  ### **_Contributing_**:
  ### **_Questions_**:
  `;
}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
module.exports = generateMarkdown;

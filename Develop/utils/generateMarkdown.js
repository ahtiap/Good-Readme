// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ## **_Description_**:
  ${data.description}
  ## **_Table of Contents_**:
  ## [Installation](#-Installation)

## [Usage](#-Usage)

## [License](#-License)

## [Contributing](#-Contributing)

## [Tests](#-Tests)

## [Questions](#-Questions)
  ### **_Installation_**:
  ### **_Usage_**:
  ### **_License_**:
  ### **_Contributing_**:
  ### **_Tests_**:
  ### **_Questions_**:
  `;
}
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
module.exports = generateMarkdown;

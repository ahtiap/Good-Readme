// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ## **_Description_**:
  ${data.description}
  `;
}

module.exports = generateMarkdown;

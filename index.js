// Import necessary packages
import inquirer from 'inquirer';
import fs from 'fs';

// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license}-green)`;
}

// Function to generate the README content
function generateReadme(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions, you can reach me at [${answers.email}](mailto:${answers.email}) or visit my [GitHub profile](https://github.com/${answers.github}).
  `;
}

// Prompt the user for information
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'video',
        message: 'What is the link to your video?',
      },

  ]);


  // Write the README file
  const readmeContent = generateReadme(answers);
  fs.writeFileSync('README.md', readmeContent);

  console.log('Successfully generated README.md');
}

// Start the CLI
promptUser();

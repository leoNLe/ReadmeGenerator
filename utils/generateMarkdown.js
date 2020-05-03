
const licenses = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GPL 3.0":  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Appache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "None": "License: None"
}

function tOc () {
    return `
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License) 
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions) 
`
}


function generateMarkdown(data) {
  
    let tableOfContents = tOc();
    return `\
# ${data.title}
${licenses[data.license]}
    
## Description
    ${data.description}

## Table of Contents 
    ${tableOfContents}

## Installation
    ${data.installCommand}

## Usage
    ${data.repoInfo}

## License
    This project is licensed under the ${data.license};

## Contributing
    ${data.contribution}

## Tests
    ${data.testCommand}

## Questions
    If you have any questions about the repo, open an issue or contact [${data.github}](${data.email}) at ${data.projURL}.
`;
}

module.exports = generateMarkdown;

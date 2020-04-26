const Choice = require("inquirer/lib/objects/choice");

const questions = [
    {
        name: "title",
        message: "What is the project title? "
    },
    {
        name: "description",
        message: "Description of the project: "
    }, 
    {
        name: "table", 
        message: "Table of content: "
    }, 
    {
        name: "installation",
        message: "installation"
    },
    {
        name: "usage",
        message: "usage"
    },
    {
        input: "checkbox",
        name: "license", 
        message: "Under what license",
        choices: [ "Appache",
            "BSD",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla"
        ]
    },
    {
        name: "contribution",
        message: "Who are the contributors? "
    },
    {
        name: "tests",
        message: ""
        
    }
    

];

function writeToFile(fileName, data) {

}

function init() {

}

init();

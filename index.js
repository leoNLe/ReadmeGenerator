const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const questions = [
    {
        name:  "github",
        message: "What is your Github username?"
    },
    {
        name: "email",
        message: "what is your email?"
    },
    {
        name: "projURL",
        message: "the URL to your project: "
    },

    {
        name: "title",
        message: "What is the project name? "
    },
    {
        name: "description",
        message: "Description of the project: "
    }, 
    {
        type: "list",
        name: "license", 
        // message: "Under what license",
        choices: [ 
            "MIT",
            "Appache 2.0",
            "GPL 3.0",
            "BSD 3", 
            "None"
        ]
    },
    {
        name: "installCommand",
        message: "What command should you run to install dependencies?"
    },
    {
        name: "testCommand",
        message: "What command should you run to tests?"
    },    
    {
        name: "repoInfo",
        message: "what user need to know about using your repo?"
    
    }, 
    {
        name: "contribution",
        message: "what user need to know about contributing to the repo?"
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) return console.log("err")
        console.log("success!");
    })
}

init = async () => {
    let answers;
    try {
        answers = await inquirer.prompt(questions);
        console.log(answers);
    } catch (err) {
        console.log(err, "error in prompt");
    }   
    writeToFile("README.md", generateMarkdown(answers));
}

init();

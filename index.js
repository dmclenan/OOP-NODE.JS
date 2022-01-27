const Manager = require("./stage1/lib/Manager");
const Engineer = require("./stage1/lib/Engineer");
const Intern = require("./stage1/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const dist = path.resolve(__dirname, "dist");
const distPath = path.join(dist, "team.html")
// Function for creating manager
menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the managers name",
                validate: (answer) => {
                    if(answer !== "" ) {
                        return true
                    }return "Please enter a name"
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the managers name",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the managers officeNumber",
            },
        
        
        
        ])

            .then(({ name, id, email, officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);
                console.log(manager);
            });
    }

    createManager();
};

menu();
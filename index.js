const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const dist = path.resolve(__dirname, "dist");
const distPath = path.join(dist, "team.html");
const render = require("./src/templet.js");
// Function for creating manager
team = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the managers name",
            validate: (answer) => {
                if (answer !== "") {
                    return true
                } return "Please enter a name"
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

        .then(({ name, id, email, officeNumber, role }) => {
            const manager = new Manager(name, id, email, officeNumber);
            team.push(manager)
            createTeam();
            //console.log(role);
            //console.log(manager);

        });
}

function createTeam() {
    inquirer.prompt([
        {

            type: "list",
            name: "role",
            message: "What employees would you like to add?",
            choices: ["Engineer", "Intern", "quit"]

        }
    ])
    .then((choice)  =>{
        if (choice.role == 'Engineer') {
        addEngineer()
    }
    else if (choice.role == 'Intern') {
        addIntern()
    }
    else {
        generateTeam()
    }
    })
    
}

function addEngineer() {
    inquirer.prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
        }

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        team.push(engineer);
        createTeam();
    });

}

function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        createTeam();
    });

}
function generateTeam() {
    if (!fs.existsSync(dist)){
        fs.mkdirSync(dist)
    }
    fs.writeFileSync(distPath,render(team),'utf-8')
};



createManager();



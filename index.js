const Manager = require("./stage1/lib/Manager");
const Engineer = require("./stage1/lib/Engineer");
const Intern = require("./stage1/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const dist = path.resolve(__dirname, "dist");
const distPath = path.join(dist, "team.html")
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
        {
            type: "list",
            name: "role",
            message: "What employees would you like to add?",
            choices: ["Engineer", "Intern", "Manager", "quit"]
        }


    ])

        .then(({ name, id, email, officeNumber, role }) => {
            const manager = new Manager(name, id, email, officeNumber);
            team.push(generateManager(manager))
            console.log(role);
            console.log(manager);
            if (role == 'Engineer') {
                addEngineer()
            }
            else if (role == 'Intern') {
                addIntern()
            }
            else if (role == 'Manager') {
                createManager()
            }
            else {
                buildHtml()
            }
        });
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
        addIntern();
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
        team.push(generateIntern(intern));
        addIntern();
    });

}

function buildHtml() {
    console.log(team);
    var htmlString =  `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">           
    ${team}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
    
   
        fs.writeFile('managerTeam.html', htmlString, err => {
            if (err) {
                console.error(err)
                return
            }
        })
}

function generateManager(manager) {
    return `<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.name}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID:${manager.id}</li>
        <li class="list-group-item">Email: <a
                href="mailto:lumberghb@Initech.com">${manager.email}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
</div>
</div>`
}
function generateIntern(intern) {
return ` <div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.name}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID:${intern.id}</li>
        <li class="list-group-item">Email: <a
                href="mailto:rioredswingline@Initech.com">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
</div>`
}

function generateEngineer(engineer) {
return `<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.name}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a
                href="mailto:boltonm@Initech.com">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: ${engineer.github}</a></li>
    </ul>
</div>
</div>`
}

createManager();



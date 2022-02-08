function buildHtml() {
    //console.log(team);
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
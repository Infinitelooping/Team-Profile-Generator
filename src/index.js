//created html for manager
function generateManager(managerArr) {

    return managerArr.map(({ name, id, email, officeNumber }) => {
        return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">Office Number: ${officeNumber}</p>

        <a href="mailto:${email}" class="card-link">Send Email: ${email}</a>
        </div>
        </div>`;
    })
        .join(" ");
}

//creates html for Engineer
function generateEngineer(engineerArr) {


    return engineerArr.map(({ name, id, email, github }) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <p class="card-text">ID: ${id}</p>
    
        <a href="mailto:${email}" class="card-link">Send Email: ${email}</a>;
        <a href="https://github.com/${github}" class="card-link">Visit github: ${github}</a>
        </div>
        </div>`;
    })
        .join(" ");

}

//creates html for Employee
function generateEmployee(employeeArr) {


    return employeeArr.map(({ name, id, email }) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
        <p class="card-text">ID: ${id}</p>

        <a href="mailto:${email}" class="card-link">Send Email: ${email}</a>
        </div>
        </div>`
    })
        .join(" ");

}

//creates html for Intern
function generateIntern(internArr) {


    return internArr.map(({ name, id, email, school }) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">School: ${school}</p>

        <a href="mailto:${email}" class="card-link">Send Email: ${email}</a>
        </div>
        </div>`;
    })
        .join(" ");

}




module.exports = roster => {
    console.log(roster);

    const managerArr = roster.filter(({ officeNumber }) => officeNumber);
    const engineerArr = roster.filter(({ github }) => github);
    const employeeArr = roster.filter(({ officeNumber, github, school }) => !officeNumber && !github && !school);
    const internArr = roster.filter(({ school }) => school);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        <title>My Team</title>
    </head>
    <body>

    <header>
        <!-- As a heading -->
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
        </nav>

    </header>

    <main>
    ${generateManager(managerArr)}
    ${generateEngineer(engineerArr)}
    ${generateEmployee(employeeArr)}
    ${generateIntern(internArr)}
    </main>
        
    </body>
    </html>`


}
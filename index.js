const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

const fs = require("fs");
const inquirer = require("inquirer");

//Employee Roster
const roster = [];

//Manager Generation
const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Manager's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an employee ID");
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the Manager's email");
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number for this manager?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter an office number");
            }
        }
    },

];

// Employee Generation
const questionsEmployee = [
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an employee ID");
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an employee email");
            }
        }
    }
];

const questionsEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an employee ID");
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an employee email");
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter engineer's github username?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's github username");
            }
        }     
    }
];

//Intern Generation
const questionsIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the Intern's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the Intern's ID");
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the Intern's email");
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter Intern's school",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the Intern's school");
            }
        }     
    }
];

// question for next employee type
const nextEmployeeQuestions =
{
    type: "confirm",
    name: "anotherEmployee",
    message: "Would you like to add another employee to your team?"
};

// role selection
const roleSelect =
{
    type: "list",
    name: "role",
    message: "What is this employees role?",
    choices: ["Manager", "Engineer", "Intern", "Employee", "No additional members"]
};


function addToTeam() {
    inquirer.prompt(nextEmployeeQuestions)
        .then(nextAnswer => {

            console.log(nextAnswer.anotherEmployee);

            if (nextAnswer.anotherEmployee) {
                inquirer.prompt(roleSelect)
                    .then(answer => {
                        switch (answer.role) {
                            case "Employee":
                                console.log("new employee!");

                                inquirer.prompt(questionsEmployee)
                                .then(answers => {
                                    roster.push(new Employee(answers.name, answers.id, answers.email));
                                    addToTeam();
                                });
                                break;
                            case "Manager":
                                console.log("new Manager!");

                                inquirer.prompt(questionsManager)
                                .then(answers => {
                                    roster.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
                                    addToTeam();
                                });
                                break;
                            case "Engineer":
                                console.log("new Engineer!");

                                inquirer.prompt(questionsEngineer)
                                .then(answers => {
                                    roster.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                                    addToTeam();
                                });
                                break;
                            case "Intern":
                                console.log("new Intern!");

                                inquirer.prompt(questionsIntern)
                                .then(answers => {
                                    roster.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                                    addToTeam();
                                });
                                break;
                            case "No additional members":
                                console.log("No one else!");
                                console.log(roster);
                                //function to generate page
                                break;

                        }
                    })
            } else {
                console.log("No other employees");
                //function to generate page
            }
        })
}

function init() {
    inquirer.prompt(questionsManager)
        .then(answers => {
            let name = answers.name;
            let id = answers.id;
            let email = answers.email;
            let officeNumber = answers.officeNumber;

            roster.push(new Manager(name, id, email, officeNumber));
            //prompts for next employee info
            addToTeam();

        });

}

init();
// download npm and inquirer
//use inquirer to ask what they want to do
    //prompt to enter team managers name, id, email and officenumber

        //prompt again with options: 
            //add engineer
                //prompted to enter:
                    //name
                    //id
                    //email
                    //github
                // then go back to main menu main menu

            //add intern
                //name, id, email, school
                //then main menu

            //Finished building team
                //generate HTML
                    //generate HTML that displays a team roster
                            //click on email address => pops open email with to: filled out address
                            //click on github username => profile opens in new tab
                //exit application

     
const inquirer = require("inquirer"); 
const fs = require("fs");
const questions = require('./src/Questions.js');
const createHTML = require('./src/createHTML');
const {menuArray, engineerArray, managerArray, internArray} = require('./src/Questions.js');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let employees= []


console.log(managerArray)



function runNewManagerData(){

    inquirer.prompt(managerArray).then((data) => {
        let newManager = new Manager (data.name, data.id, data.email, data.number, data.teamName);
        employees.push(newManager);
        buildTeam();

      return newManager;
        
      
    });
}


function runNewInternData(){
    inquirer.prompt(internArray).then((data)=> {
        let newIntern = new Intern (data.name, data.id, data.email, data.school)
        employees.push(newIntern)
        console.log('-------\nAdded: ' + newIntern.name + '\n----')
       
        buildTeam();
        return newIntern;
    })
}


function runNewEngineerData(){
    inquirer.prompt(engineerArray).then((data)=>{
        let newEngineer = new Engineer (data.name, data.id, data.email, data.github)
        employees.push(newEngineer)
        console.log('-------\nAdded: ' + newEngineer.name + '\n----')
        buildTeam();
        
        return newEngineer
    })

}

function showMenu(manager) {
    inquirer.prompt(menuArray).then((data) => {
        console.log(data, manager)
        buildTeam();
    })
}


function buildTeam() {
    inquirer.prompt({
        type: 'list',
        message: 'Build your team',
        name: 'team',
        choices: ["Add Engineer", "Add Intern", "Im done creating my team"]
    })
    .then((data) => {
        console.log(data)
        switch (data.team) {
            case 'Add Intern':
                runNewInternData();
                break;
            case 'Add Engineer':
                runNewEngineerData();
                break;
            case "Im done creating my team":
                write(employees);
            default:
                break;

    
        }

    })
    return employees;
    
}

function write(data) {
const index = `./dist/index.html`
fs.writeFile(index, createHTML(data), (err) =>
err ? console.error(err) : console.log("it works!")
);
}


runNewManagerData();



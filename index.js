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

const arrayOfQuestions = ('./src/QuestionArray');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const array = require('./src/Qustions');
let newEngineer = [];
let newIntern = [];


runManagerData();
function runManagerData(){
    inquirer.prompt(array.managerArray).then => {
        const manager = new Manager (data.name, data.id, data.email, data.number, data.teamName);
    }

    manager.getRole();
    console.log(`${manager.teamName}`);
}






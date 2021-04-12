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

const {menuArray, engineer, managerArray, internArray} = require('./src/Questions.js');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let employees= []

console.log("Hello world")
console.log(managerArray)



function runNewManagerData(){

    inquirer.prompt(managerArray).then((data) => {
        let newManager = new Manager (data.name, data.id, data.email, data.number, data.teamName);
        employees.push(newManager);

      return newManager;
        
      
    });
}


function runNewInternData(){
    inquirer.prompt(internArray).then((data)=> {
        let newIntern = new Intern (data.name, data.id, data.email, data.school)
        employees.push(newIntern)
        console.log('-------\nAdded: ' + newIntern.name + '\n----')
       
        return newIntern;
    })
}


function runNewEngineerData(){
    inquirer.prompt([...engquestions])
    .then((data)=>{
        let newEngineer = new Engineer (data.name, data.id, data.email, data.github)
        employees.push(addedEngineer)
        console.log('-------\nAdded: ' + addedEngineer.name + '\n----')
        
        return newEngineer
    })

}





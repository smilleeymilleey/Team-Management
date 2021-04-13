// arrays to put into inquirer
// Array to selcect which job you're looking for 
const newHTML = require('./createHTML');
const menuArray = [
    {
      type: "list",
      name: "add",
      message: "Would you like to add an: ",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ];
  
// questions for engineers 
  const engineerArray = [
    {
      type: "input",
      name: "name",
      message: "Input the engineer's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Input the employee ID: ",
    },
    {
      type: "input",
      name: "email",
      message: "Input the email address: ",
    },
    {
      type: "input",
      name: "githubName",
      message: "Input the github name: ",
    },
  ];

// questions for managers

  const managerArray = [
    {
      type: "input",
      name: "teamName",
      message: "Input the team name: ",
    },
    {
      type: "input",
      name: "name",
      message: "Input the manager's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Input the employee ID: ",
    },
    {
      type: "input",
      name: "email",
      message: "Input the email address: ",
    },
    {
      type: "input",
      name: "number",
      message: "Input the office number: ",
    },
  ];

//   questions for interns
  const internArray = [
    {
      type: "input",
      name: "name",
      message: "Input the intern's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Input the employee ID: ",
    },
    {
      type: "input",
      name: "email",
      message: "Input the email address: ",
    },
    {
      type: "input",
      name: "school",
      message: "Input the intern's school: ",
    },
  ];

  function writeToHTML(filename, data) {
   
      false.writeFile(filename, newHTML(data), (err) => 
        err ? console.error(err) : console.log("it works")
      )
    }
  
  module.exports = {menuArray, engineerArray, managerArray, internArray};
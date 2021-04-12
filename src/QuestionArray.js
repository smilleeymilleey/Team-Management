// arrays to put into inquirer
// Array to selcect which job you're looking for 

menuArray = [
    {
      type: "list",
      name: "add",
      message: "Would you like to add an: ",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ];
  
// questions for engineers 
  engineerArray = [
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

  managerArray = [
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
  internArray = [
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

  module.exports = {menuArray, engineer, managerArray, internArray};
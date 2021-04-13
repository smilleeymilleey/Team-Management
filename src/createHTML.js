function fillCards(text) {

    let sections = ' '
    let employeesArray = text;
    console.log(employeesArray)
    employeesArray.forEach(employee => {
        
        let employeeSpecs = ``
        if (employee.getRole() === "Manager"){
            employeeSpecs = `Office number: ${employee.officeNumber}`
    
        } else if (employee.getRole() === "Engineer"){
            employeeSpecs = `GitHub: <a class="text-danger align-self-center" target="_blank" rel="noopener noreferrer" href="https://github.com/${employee.github}">${employee.github}</a>`
     
        } else {
            employeeSpecs = `School: ${employee.school}`
        }
        
        sections += `
        <div class="rounded col-md-4 mt-5">
              <div class="rounded bg-info text-light text-center p-3">
                  ${employee.name}
                  ${employee.getRole()}
              </div>
              <div class="col-md-11 container p-2">
                  <div>ID: ${employee.id}</div>    
                  <div>Email: <a class="text-danger align-self-center" href = "mailto:${employee.email}">${employee.email}</a></div>    
                  <div>${employeeSpecs}</div>    
              </div>
        </div>`
       
    });
    return sections
  
}

//A function to generate markdown for README
function createHTML(data) {

  let sections = fillCards(data);
  console.log(sections + "-----");
    
  //Indented oddly to preserve string literal indenting in README production 
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body>
      <nav class="navbar rounded bg-info text-light justify-content-center d-flex align-items-center pt-3">
          <div>
              <h1 class="mb-0 ml-3"> My Team</h1>
          </div>
      </nav>
      <main class="container-fluid d-flex flex-wrap justify-content-center mt-1">
        ${sections}
      </main> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
  </html>
`;

}

module.exports = createHTML;
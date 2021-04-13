const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, teamName){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.teamName = teamName;
    }

    getRole(){
        this.role = "Manager";
        return this.role;
    }
    
}

module.exports = Manager;
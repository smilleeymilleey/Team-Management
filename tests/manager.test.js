const Manager = require("../lib/Manager");

describe('Manager', () => {

    // Name
    it('should return a name when I pass a name to Manager', () =>{

        // Arranging and Acting
        let newManager = new Manager("Joe", "11", "dogs@gmail.com", "0550", "Paul")
        //Assert
        expect(newManager.name).toBe("Joe")

    });

    // Id
    it('should return an ID when I pass an ID to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Joe", "11", "dogs@gmail.com", "0550", "Paul");
        //Assert
        expect(newManager.id).toBe("11")

    });
    
    // Email
    it('should return an email when I pass an email to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Joe", "11", "dogs@gmail.com", "0550", "Paul");
        //Assert
        expect(newManager.email).toBe("dogs@gmail.com")

    });
    
    // officeNumber
    it('should return an officeNumber number when I pass an officeNumber number to Manager', () =>{

        //Arrange/Acting
        let newManager = new Manager ("Joe", "11", "dogs@gmail.com", "0550", "Paul");
        //Assert
        expect(newManager.officeNumber).toBe('0550')

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the Manager", () => {

          expect(new Manager("Joe", "11", "dogs@gmail.com", "0550", "Paul").getName()).toBe("Joe");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the Manager", () => {
            
          expect(new Manager("Joe", "11", "dogs@gmail.com", "0550").getId()).toBe("11");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the Manager", () => {
            
          expect(new Manager ("Joe", "11", "dogs@gmail.com", "0550").getEmail()).toBe("dogs@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Manager'
    describe("getRole", () => {
       
        it("should return the employee role as Manager", () => {
            
          expect(new Manager ("Joe", "11", "dogs@gmail.com", "0550").getRole()).toBe("Manager");
        });
       
    });
    
})
const Engineer = require("../lib/Engineer");

describe('Engineer', () => {

    // Name
    it('should return a name when I pass a name to engineer', () =>{

        // Arranging and Acting
        let newEngineer = new Engineer("Bob", "Brown Hair", "214-555-5521", "GHUSER")
        //Assert
        expect(newEngineer.name).toBe("Bob")

    });

    // id
    it('should return an ID when I pass an ID to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER");
        //Assert
        expect(newEngineer.id).toBe("Brown Hair")

    });
    
    // email
    it('should return an email when I pass an email to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER");
        //Assert
        expect(newEngineer.email).toBe("214-555-5521")

    });
    
    // github
    it('should return a github account when I pass a github account to engineer', () =>{

        //Arrange/Acting
        let newEngineer = new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER");
        //Assert
        expect(newEngineer.github).toBe("GHUSER")

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the engineer", () => {

          expect(new Engineer("Bob", "Brown Hair", "214-555-5521", "GHUSER").getName()).toBe("Bob");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the engineer", () => {
            
          expect(new Engineer("Bob", "Brown Hair", "214-555-5521", "GHUSER").getId()).toBe("Brown Hair");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the engineer", () => {
            
          expect(new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER").getEmail()).toBe("214-555-5521");
        });
       

    });
    
    // getRole()—returns 'Engineer'
    describe("getRole", () => {
       
        it("should return the employee role as Engineer", () => {
            
          expect(new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER").getRole()).toBe("Engineer");
        });
       
    });
    
    // getGithub()—returns github account
    describe("getGithub", () => {
       
        it("should return the engineer's github account", () => {
            
          expect(new Engineer ("Bob", "Brown Hair", "214-555-5521", "GHUSER").getGithub()).toBe("GHUSER");
        });
       
    });
    
})
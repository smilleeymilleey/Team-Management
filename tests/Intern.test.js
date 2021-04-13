const Intern = require("../lib/Intern");

describe('Intern', () => {

    // Name
    it('should return a name when I pass a name to Intern', () =>{

        // Arranging and Acting
        let newIntern = new Intern("Bobby", "111111", "noemail@gmail.com", "SMU")
        //Assert
        expect(newIntern.name).toBe("Bobby")

    });

    // id
    it('should return an ID when I pass an ID to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU");
        //Assert
        expect(newIntern.id).toBe("111111")

    });
    
    // email
    it('should return an email when I pass an email to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU");
        //Assert
        expect(newIntern.email).toBe("noemail@gmail.com")

    });
    
    // school
    it('should return a school when I pass a school to Intern', () =>{

        //Arrange/Acting
        let newIntern = new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU");
        //Assert
        expect(newIntern.school).toBe("SMU")

    });
    
    // getName()
    describe("getName", () => {
       
        it("should return the name of the Intern", () => {

          expect(new Intern("Bobby", "111111", "noemail@gmail.com", "SMU").getName()).toBe("Bobby");
        });
       

    });
    
    // getId()
    describe("getId", () => {
       
        it("should get the Id of the Intern", () => {
            
          expect(new Intern("Bobby", "111111", "noemail@gmail.com", "SMU").getId()).toBe("111111");
        });
       

    });
    
    // getEmail()
    describe("getEmail", () => {
       
        it("should get the email of the Intern", () => {
            
          expect(new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU").getEmail()).toBe("noemail@gmail.com");
        });
       

    });
    
    // getRole()—returns 'Intern'
    describe("getRole", () => {
       
        it("should return the employee role as Intern", () => {
            
          expect(new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU").getRole()).toBe("Intern");
        });
       
    });
    
    // getSchool()—returns github accoSMU
    describe("getSchool", () => {
       
        it("should return the Intern's github accoSMU", () => {
            
          expect(new Intern ("Bobby", "111111", "noemail@gmail.com", "SMU").getSchool()).toBe("SMU");
        });
       
    });
    
})
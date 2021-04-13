const Employee = require("../lib/Employee");

describe('Employee', () => {

 
    it('should return a name when I pass a name to employee', () =>{

        
        let newEmployee = new Employee("Caitlyn", "214-444-7789", "0114")
      
        expect(newEmployee.name).toBe("Caitlyn")

    });


    it('should return an ID when I pass an ID to employee', () =>{

 
        let newEmployee = new Employee ("Caitlyn", "214-444-7789", "0114");
    
        expect(newEmployee.id).toBe("214-444-7789")

    });
    

    it('should return an email when I pass an email to employee', () =>{

    
        let newEmployee = new Employee ("Caitlyn", "214-444-7789", "0114");
    
        expect(newEmployee.email).toBe("0114")

    });
    

    describe("getName", () => {
       
        it("should return the name of the employee", () => {

          expect(new Employee("Caitlyn", "214-444-7789", "0114").getName()).toBe("Caitlyn");
        });
       

    });
    
  
    describe("getId", () => {
       
        it("should get the Id of the employee", () => {
            
          expect(new Employee("Caitlyn", "214-444-7789", "0114").getId()).toBe("214-444-7789");
        });
       

    });
    
    
    describe("getEmail", () => {
       
        it("should get the email of the employee", () => {
            
          expect(new Employee("Caitlyn", "214-444-7789", "0114").getEmail()).toBe("0114");
        });
       

    });

    describe("getRole", () => {
       
        it("should return the employee role as Employee", () => {
            
          expect(new Employee("Caitlyn", "214-444-7789", "0114").getRole()).toBe("Employee");
        });
       
    });
    
})
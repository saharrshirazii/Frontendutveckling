const Calculator = require ('./../code');


describe("Calculator", ()=> {
    let calculator;
    beforeEach(()=> {
       calculator = new Calculator(10, 5);
    });
    
    it("should have a and b property.", ()=> {
      expect(calculator).toHaveProperty('a');
      expect(calculator).toHaveProperty('b');
    }); 
    it("add", ()=> {
      expect(calculator.add()).toBe(15);
    }); 
     it("sub", ()=> {
      expect(calculator.sub()).toBe(5);
    }); 
     it("div", ()=> {
      expect(calculator.div()).toBe(2);
    }); 
     it("mul", ()=> {
      expect(calculator.mul()).toBe(50);
    }); 
});
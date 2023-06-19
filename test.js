const Employee = require("./employee");

let johnWick = new Employee("John Wick", "Dog Lover");

const boundEmployee = johnWick.sayName.bind(johnWick);
global.setTimeout(boundEmployee, 2000);

const boundOccupation = johnWick.sayOccupation.bind(johnWick)
global.setTimeout(boundOccupation, 3000);

//test

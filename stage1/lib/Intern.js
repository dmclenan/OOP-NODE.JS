const Employee = require("./Employee.js") 

  class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getRole() {
      return "intern"
    }
    getschool() {
      return this.school;
    }
  
}

module.exports = Intern;
// link
const employee = require('./employee');
// employee constructor + officenumber
class Manager extends employee {

constructor(name, id, email, officeNumber) {
   
    super(name, id, email);
    this.officeNumber
    }
    getOfficeNumber() { 
        return this.officeNumber;
    }
    getRole() { 
        return "manager";
    }
    }
module.exports = Manager;
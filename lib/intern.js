// link
const employee = require('./employee');
// employee constructor + school 
class Intern extends employee {
constructor(name, id, email, school) {

    super(name, id, email, school);
    this.school = school;
}
getSchool () { 
    return this.school;
}
getRole () {
    return "Intern";
}
}
module.exports = Intern;
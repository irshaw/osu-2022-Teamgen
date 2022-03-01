// link
const employee = require('./employee')

class Engineer extends employee {
// employee constructor + github
constructor(name, id, email, github){

super(name, id, email);
this.github = github;

}
getGithub(){
    return this.github;

}
getRole(){
    return "Engineer";
}
}
module.exports = Engineer;
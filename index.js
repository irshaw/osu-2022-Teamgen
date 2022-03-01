// link class librarys
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

// required nodes
const inquirer = require("inquirer");
const fs = require("fs");


// build array for team 
const teamArr = [];

// inital questions 
const questions =  () => {

 const answers = inquirer
 .prompt ([
{
  
    name: 'role',
    type: 'list',
    message: 'What is your role ?',
    choices: ['Intern', 'Manager', 'Engineer'],
},
{
    name: 'name',
    type: 'input',
    message: 'Please enter your name',
},
{
    name: 'id',
    type: 'input',
    message: 'What is your employee ID?',
},
{
    name: 'email',
    type: 'input',
    message: 'Please enter your email address',
},

])
    // create new manager
if (answers.role === 'manager') {
  const managerAnswer = inquirer
  .prompt([
{
type: 'input',
message:'Enter your office number',
name:'officeNumber',
},

]);

const Manager = new Manager (
answers.name,
answers.id,
answers.email,
managerAnswer.officeNumber

);
// push manager to array 
teamArr.push(managerAnswer);
addMember ();


} // Engineer 
  else if (answers.role === 'Engineer')
   {
     // Enginner questions
  const githubAnswer = inquirer
  .prompt([
    {
      type: 'input',
      message:'Enter your github',
      name:'github',
    }
  ]) // add Engineer answers
  const engineer = new Engineer (
    answers.name,
    answers.id,
    answers.email,
    githubAnswer.github
  );
  // push engineer to array 
teamArr.push(engineer);
addMember ();

  } //  Intern 
  else if (answers.role === 'Intern')
   {
     // Intern questions 
    const internAnswers = inquirer
    .prompt([
  {
    type: 'input',
    message: 'Enter your school name',
    name: 'school',
  },
])
 // add Intern answers 
const Intern = new Intern (
  answers.name,
  answers.id,
  answers.email,
  internAnswers.school
);
// push intern to array 
teamArr.push(Intern);
addMember ();

  }

};

 function promptQuestions () {
  
   questions()
  
const addMemberAnswers = inquirer
.prompt([
  {
name: 'addmember',
type: 'list',
choices: ['add member', 'finish  team'],
message: 'What would you like to do ?'
  }
])

if (addMemberAnswers.addMember === 'Add new member') {
  return promptQuestions()
}
 else  generateHTML();
}

// create main HTML
function generateHTML  ()  {


  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body>
    <div class="container p-6">
      <div class="row">
        <h1 class="text-center">the Team</h1>
      </div>
    </div>
    <div class="container">
        ${member(teamArr)}
      </div>
    </div>
  </body>
</html>`;
};
// generate team 
const generateTeam = ()

// generate engineer card

const generateEngineer = (engineer) => {
return `
<div class="col-4 mt-4">
<div class="card h-100">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
    </div>
    <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>
</div>`;
};
// generate intern card 

  const generateIntern = (intern) => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
</div>
</div>
    
    `;
  };


// generate manager card 

  const generateManager = (manager) => {
    return `
    
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
  };


  
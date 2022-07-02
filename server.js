const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  // console.log(`Connected to the classlist_db database.`)
);

const fn = {
viewAllEmployees() {
    db.query(`SELECT id, CONCAT(first_name, '', last_name) AS name,  FROM employee e LEFT JOIN role r ON e.role_id =r.id LEFT JOIN employee m ON e.manager_id = m.id`,
     function (err, employees) {
      if (err) return console.error(err);
      console.table(employees);
      init();
    });
  },
  addAnEmployee() {
    db.query('SELECT id AS value, title As name FROM role', function (err, roles) {
      if (err) return console.error(err);
      console.table(roles);
       init();
    });
  },
 removeAnEmployee() {
  db.query(` 
  SELECT id AS value, CONCAT( first_name, '', last_name,) AS name FROM employee`,
  (err, employees) => {
    if (err) return console.log(err);
  });
    db.query('DELETE * FROM employee WHERE id = ?', answers, (err, result) => {
      if (err) return console.error(err);
      console.table(employees);
       init();
    });
  },
  exit() {
    process.exit();
  },
};

const init = () => {
  inquirer.prompt([
    {
      type: 'rawlist',
      name: 'query',
      message: 'What option would you like to select?',
      choices: [
        { name: 'View All Employees', value: 'viewAllEmployees' },
        { name: 'Add an Employee', value: 'addAnEmployee' },
        { name: 'Remove an Empolyee', value: 'removeAnEmployee' },
        { name: 'View All Roles', value: 'viewAllRoles' },
        { name: 'View All Departments', value: 'viewAllDepartments' },
        { name: 'Add a Department', value: 'addADepartment' },
        { name: 'Update An Employee Role', value: 'updateAnEmployeeRole' },
        { name: 'Exit', value: 'exit' },
      ],
      
  
    }
  ]).then((selected) => {
    switch (selected.startApp) {
      case "view all departments":
        viewAllDepts();
        break;

      case "view all roles":
        viewAllRoles();
        break;

      case "view all employees":
        viewAllEmployees();
        break;

      case "add a department":
        addDept();
        break;

      case "add a role":
        addRole();
        break;

      case "add an employee":
        addEmployee();
        break;

      case "update an employee role":
        updateRole();
        break;

      case "exit app":
        process.exit();
        break;
    };
    return;
  });
};
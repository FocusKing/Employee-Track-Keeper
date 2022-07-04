const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  // console.log(`Connected to the employees_db database.`)
);

db.connect(function (err) {
  if (err) throw err;
  init();
});
// followed along with instructor
const allEmployees = () => {
  db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id =department.id LEFT JOIN employee manager ON manager.id = employee.manager_id',
    function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      init();
    });
}

const allRoles = () => {
  db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id=department.id',
    function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      init();
    });
}

const allDepartments = () => {
  db.query('SELECT employee.id, CONCAT(employee.first_name, " ", employee.last_name) AS employee, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id', function (err, results) {
    if (err) return console.error(err);
    const employeeChoices = res.map(({id, employee}) => ({
      name: employee,
      value: id
    })).filter(e => e);
    db.query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id=department.id', function (err, results) {
      if (err) return console.error(err);
      console.table(results);
      const roleChoices = results.map(({ id, titile }) => ({
        name: titile, 
        value: id
      }));
    })
  });
}

//   inquirer.prompt([{
//     type: 'rawlist',
//     name: 'query',
//     message: 'What option would you like to select?',
//     choices: [{
//         name: 'View All Employees',
//         value: 'viewAllEmployees'
//       },
//       {
//         name: 'Add an Employee',
//         value: 'addAnEmployee'
//       },
//       {
//         name: 'Remove an Empolyee',
//         value: 'removeAnEmployee'
//       },
//       {
//         name: 'View All Roles',
//         value: 'viewAllRoles'
//       },
//       {
//         name: 'View All Departments',
//         value: 'viewAllDepartments'
//       },
//       {
//         name: 'Add a Department',
//         value: 'addADepartment'
//       },
//       {
//         name: 'Update An Employee Role',
//         value: 'updateAnEmployeeRole'
//       },
//       {
//         name: 'Exit',
//         value: 'exit'
//       },
//     ],
//   }]).then((selected) => {
//     switch (selected.init) {
//       case "view all departments":
//         viewAllDepts();
//         break;

//       case "view all roles":
//         viewAllRoles();
//         break;

//       case "view all employees":
//         viewAllEmployees();
//         break;

//       case "add a department":
//         addDept();
//         break;

//       case "add a role":
//         addRole();
//         break;

//       case "add an employee":
//         addEmployee();
//         break;

//       case "update an employee role":
//         updateRole();
//         break;

//       case "exit app":
//         process.exit();
//         break;
//     };
//     return;
//   });
// };

// const fn = {
//   viewAllEmployees() {
//     db.query(`SELECT * FROM employee`, (err, employees) => {
//       if (err) return console.log(err);
//       console.table(employees);
//       init();
//     });
//   },
//   addAnEmployee() {
//     db.query('SELECT id AS value, title As name FROM role', (err, roles) => {
//       db.query(`SELECT id AS value, CONCAT(first_name, '', last_name) AS name FROM employee;`, (err, managers) => {
//         if (err) return console.log(err);
//         console.table(roles);
//         init();
//       })

//     });
//   },
//   removeAnEmployee() {
//     db.query(` 
//   SELECT id AS value, CONCAT( first_name, '', last_name,) AS name FROM employee`,
//       (err, employees) => {
//         if (err) return console.log(err);
//       });
//     db.query('DELETE * FROM employee WHERE id = ?', answers, (err, deletedEmployee) => {
//       if (err) return console.log(err);
//       console.table(employeeUpdated);
//       console.table(deletedEmployee);
//       init();
//     });
//   },
//   exit() {
//     process.exit();
//   },
// };
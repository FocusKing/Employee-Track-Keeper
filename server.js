const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
require('inquirer');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employees_db'
  },

);
// assistance from tutor as well as collegue when it comes to the switch case method!
const startApp = () => {
  inquirer
    .prompt({
      name: "startApp",
      message: "What would you like to do?",
      type: "rawlist",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update employee role",
        "exit app",
      ]
    }).then((selected) => {
      switch (selected.startApp) {
        case "view all departments":
          viewAllDepartments();
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
          addAnRole();
          break;

        case "add an employee":
          addAnEmployee();
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

const viewAllDepartments = () => {
  db.query(`SELECT * FROM department`, function (err, depts) {
    if (err) return console.log(err);
    console.table(depts);
    startApp();
  });
}
const viewAllRoles = () => {
  db.query(`SELECT * FROM role`, function (err, roles) {
    if (err) return console.log(err);
    console.table(roles);
    startApp();
  });
}
// followed along with instructor
const viewAllEmployees = () => {
  db.query(`SELECT * FROM employee`,
    function (err, employees) 
    {
      if (err) return console.error(err);
      console.table(employees);
      startApp();
    });
}
// add additional departments
const addDept = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'departmentName',
      message: 'What is the name of the department you would like to add?'
    }]).then((newDept) => {
      db.query(`INSERT INTO department (name) VALUES (?)`, [newDept.departmentName],
        function (err) {
          if (err) return console.log(err);
          console.log(`New department ${newDept.departmentName} added!`);
          console.table(newDept);
          startApp();
        });
    });
}
// add additional roles 
const addAnRole = () => {
  db.query(`
SELECT * FROM department`, function (err, depts) {
    if (err) return console.error(err);
    inquirer
      .prompt([{
          type: 'input',
          message: 'What is the title for this role?',
          name: 'title',

        },
        {
          type: 'input',
          message: 'What is the salary for this role?',
          name: "salary"
        },
        {
          type: 'list',
          message: 'Provide the department for this role.',
          name: 'departments',
          choices: depts.map(departmentName =>
            ({
              name: departmentName.name,
              value: departmentName.id
            })
          )
        },
      ]).then((newRole) => {
        db.query(`INSERT INTO role (title, salary, department_id) VALUES`, [newRole.title, newRole.roleSalary, newRole.departmentName],
          function (err) {
            if (err) return console.log(err);
            console.log(`New role ${newRole.title} added!`);
            console.table(newRole);
            startApp();
          })

      });
  });
}

// add additional employees
const addAnEmployee = () => {
  console.log('Add employee')
  const query =
  //Collabrated with a classmate to find query solution
    `SELECT r.id, r.title, r.salary
      FROM role r`
  db.query(query, function (error, res) {
    if (error) throw error;

    const seletRole = res.map(({ id, title, salary }) => ({
      value: id, title: `${title}`, salary: `${salary}`
    }));
    console.table(res);
    addEmpPropmt(seletRole);
  })
}
  const addEmpPropmt = (selectRole) => {
        inquirer
        .prompt([{
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee you would like to add?'
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?'
          },
          {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: "roles"
        
          },
        ]).then((newEmployee) => {
          db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES', [newEmployee.employeeFirstName, newEmployee.employeeLastName, newEmployee.role, newEmployee.manager], 
          function (err, res) {
            if (err) return console.log(err);
            console.table(newEmployee);
            startApp();
          })
        });
      }
  
    // Update employee Role
const updateRole = () => {
  updateRole =require();
        inquirer
          .prompt([{
              type: "input",
              message: "Which employee's ID would you like to update? ",
              name: "update_id",
            },
            {
              type: "input",
              message: "What is the employee's new role ID? ",
              name: "update_role",
            },
          ]).then((res) => {
              const updateEmployee = res.updated_id;
              const selectNewRole = res.update_role;

              db.query(`UPDATE employee SET role_id = ${selectNewRole} WHERE id = ${updateEmployee};`,
                function (err) {
                  if (err) return console.log(err);
                  console.log(`New employee ${res.role_id} added!`);
                  console.table(res);
                  startApp();
                })
              });

            };

              const deleteRole = () => {
                db.query(`DELETE FROM roles WHERE id =?`, 2, function (err, deletedRole) {
                  if (err) return console.log(err);
                  console.log("Employee Role Updated!");
                  console.table(deletedRole);
                  startApp();
                })
              }
              
              const deleteEmployee = () => {
                db.query(`DELETE FROM employees WHERE id =?`, 5, function (err, deletedEmployee) {
                  if (err) return console.log(err);
                  console.log("Employee Role Updated!");
                  console.table(deletedEmployee);
                  startApp();
                })
              }
            

              startApp();
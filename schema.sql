DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employee_db;
-- unsigned means id will always be positive.
CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),

);
CREATE TABLE role (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30) UNIQUE NOT NULL,
 salary DECIMAL UNSIGNED NOT NULL,
 department_id INT UNSIGNED NOT NULLL,
 INDEX dep_ind (department_id),

--  references: {
--         model: 'department',  not sure if I need to add this or not yet.
--         key: 'id',
--       },

);
CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(11),
  manager_id INTEGER(11) 

  -- references: {
  --       model: 'manager',
  --       key: 'id',
  --     },
  
);
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

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
REFERENCES department(id) ON DELETE SET NULL

);
CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(11),
  manager_id INTEGER(11) 
  REFERENCES employee(id)
  ON DELETE SET NULL 

  
);
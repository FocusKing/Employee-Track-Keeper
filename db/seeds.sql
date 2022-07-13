USE employees_db;

INSERT INTO department (name)
VALUES  ("Management");
INSERT INTO department (name)
VALUES  ("Director");
INSERT INTO department (name)
VALUES  ("Finance");
INSERT INTO department (name)
VALUES  ("Sales");


INSERT INTO role (title, salary, department_id)
VALUES ("VP of Operations", 270000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Director", 220000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 185000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Accountant", 180000, 3);


       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Cris", "Carter", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Ocho", "Cinco", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Randy", "Moss", 4, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Jerry", "Rice", 3, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Julio", "Jones", 3, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Steve", "Smith", 5, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Calvin", "Johnson", 2, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Larry", "Fitz", 2, 9);
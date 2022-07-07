USE employees_db;
INSERT INTO department (name)
VALUES ("Management"),
       ("Director"),
       ("Finance"),
       ("Engineering"),
       ("Sales"),
       ("Marketing");
       
INSERT INTO role (title, salary, department_id)
VALUES ("VP of Operations", 270000, 1),
       ("Lead Director", 220000, 2),
       ("Sales Manager", 185000, 5),
       ("Application Engineer", 110000, 4),
       ("Salesperson", 150000, 5),
       ("Accountant", 125000, 3),
       ("Senior Accountant", 180000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cris", "Carter", 1, NULL),
       ("Ocho", "Cinco", 2, 2),
       ("Randy", "Moss",3, 5),
       ("Jerry", "Rice", 4, 4),
       ("Steve", "Smith", 5, 3),
       ("Calvin", "Johnson", 6, 3),
       ("Larry", "Fitz", 7, 5);
       

       

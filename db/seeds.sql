USE employees_db;
INSERT INTO department (name)
VALUES ("Management"),
       ("Director"),
       ("Finance"),
       ("Engineering"),
       ("Sales"),
       ("Coordinator"),
       ("Customer Service"),
       ("Marketing");
       
INSERT INTO role (title, salary, department_id)
VALUES ("VP of Operations", 250000, 1),
       ("Lead Director", 200000, 2),
       ("Sales Manager", 175000, 5),
       ("Application Engineer", 110000, 4),
       ("Salesperson", 150000, 4),
       ("Accountant", 125000, 3),
       ("Senior Accountant", 180000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cris", "Carter", 1, NULL),
       ("Ocho", "Cinco", 2, 1),
       ("Randy", "Moss",3, ),
       ("Jerry", "Rice", 4, 2),
       ("Steve", "Smith", 5, 3),
       ("Calvin", "Johnson", 5, 2),
       ("Larry", "Fitz", 6, 2);
       

       

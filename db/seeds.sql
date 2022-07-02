INSERT INTO department ('name')
VALUES ("Management"),
       ("Finance"),
       ("Engineering"),
       ("Sales");
       
       
INSERT INTO role ('titles', 'salary','department_id')
VALUES ("VP of Operations", 250000, 1),
       ("Director", 200000, 1),
       ("Sales Manager", 175000, 4),
       ("Application Engineer", 110000, 2);
       ("Salesperson", 150000, 4),
       ("Accountant", 125000, 3),
       ("Senior Accountant", 180000, 3);

INSERT INTO employee ('first_name', 'last_name', 'role_id', 'manager_id')
VALUES ("Cris", "Carter", 1, null),
       ("Ocho", "Cinco", 2, 1),
       ("Randy", "Moss",3, 2),
       ("Jerry", "Rice", 4, 2),
       ("Steve", "Smith", 5, 3);
       ("Calvin", "Johnson", 5, 2);
       ("Larry", "Fitz", 6, 2);


       

       


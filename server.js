const mysql = require('mysql2'); // Import and require mysql2




// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.table(results);
});


const mysql = require("mysql");

// Inside the `connection.js` file, setup 
// the code to connect Node to MySQL.

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
  
//   Export the connection.

module.exports = connection;
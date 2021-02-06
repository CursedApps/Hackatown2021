const mysql = require("mysql");

// Database Connection for Production

let config = {
    user: "root",
    database: "",
    password: "",
}
config.socketPath = ``;

let connection = mysql.createConnection(config);

// Database Connection for Development

// let connection = mysql.createConnection({
//   host: "34.95.55.15",
//   user: "root",
//   database: "",
//   password: "",
// });

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as thread id: " + connection.threadId);
});

module.exports = connection;

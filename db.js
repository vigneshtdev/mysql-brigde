const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"35.185.82.119",
    user: "vignesh",
    password: "vignesh",
    database: "attendance_node"
});

connection.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});

module.exports = connection;
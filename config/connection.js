var mysql = require("mysql");

var connection = mysql.createConnection({
	port:8080,
	host:"localhost",
	user: "root",
	password: "H!H3yH3ll0",
	database: "burgers_db"
}); 

connection.connect(function(err) {
	if (err) {
		console.error('error connecting ' + err.stack);
		return;
	}
	console.log("connected as ID " + connection.threadId);
});

module.exports = connection;
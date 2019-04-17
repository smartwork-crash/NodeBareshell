var mysql = require("mysql");



//Create Connection to Mysql

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'FDADAO',
        
});

//Connect to Database
 connection.connect(
 	function(err){

 		if(err) throw err;
 		console.log("Connect to mySql Database");
 	}
 );


 
 module.exports = connection;
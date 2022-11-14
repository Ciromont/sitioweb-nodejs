var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'ventas'
});

connection.connect(
    (err)=>{
        if(!err){ console.log("Conexion establecida");}
    }

);


connection.end();
var express = require('express');
var router = express.Router();

/* GET home page(index.ejs).*/
router.get('/', function(req, res, next) {

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
        else{console.log("conexion fallida ");    }
    }
  
);
connection.query("SELECT * FROM tblproductos", function(err, resultados) {
    console.log(resultados);
} );
  
connection.end();

  
  res.render('index', { title: 'Express' });
});

/* GET home page(nosotros.ejs).*/
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos...' });
});

/* GET home page(productos.ejs).*/

router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Nuestros productos' });
});


module.exports = router;

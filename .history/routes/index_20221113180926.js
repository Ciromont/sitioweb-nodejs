var express = require('express');
var router = express.Router();

/* GET home page(index.ejs).*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page(nosotros.ejs).*/
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos...' });
});

/* GET home page(productos.ejs).*/
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Nuestros productos...' });
});

module.exports = router;

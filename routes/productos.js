var express = require('express');
var router = express.Router();


/* GET home page(productos.ejs).*/

router.get('/', function(req, res, next) {
    res.render('productos', { title: 'Nuestros productos' });
 });

module.exports = router;

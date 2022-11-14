/* GET home page(productos.ejs).*/

router.get('/productos', function(req, res, next) {
    res.render('productos', { title: 'Nuestros productos' });
  });
  
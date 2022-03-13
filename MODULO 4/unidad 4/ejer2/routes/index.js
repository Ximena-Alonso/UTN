var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pag', function(req, res, next) {
  res.render('pag', { title: 'Pagina de prueba' });
});

module.exports = router;

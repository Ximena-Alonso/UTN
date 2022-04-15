var express = require('express');
var router = express.Router();
var novedadesModel =require('../../models/novedadesModel')


/* vincula pagina noveades y pasa datos de base de datos */
router.get('/',async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  res.render('admin/novedades', { 
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades

  });
});

/* vincula pagina agregar  */
router.get('/agregar',(req, res, next)=> {

  res.render('admin/agregar', { 
    layout:'admin/layout'
  });
});

/* POST en caso de campo de novedes vacio */
router.post('/agregar',async (req, res, next) => {
  try {
      if (req.body.Titulo !="" && req.body.Subtitulo != "" && req.body.Descripcion !=""){
          await novedadesModel.insertNovedades(req.body);
          res.redirect ('/admin/novedades')
      }else {
        res.render('admin/agregar', { 
        layout:'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
        })
      }
  }  catch (error) {
        console.log(error)
        res.render ('admin/agregar', {
            layout:'admin/layout',
            error: true,
            message: 'No se cargo novedad' 
        })
  }
});

module.exports = router;
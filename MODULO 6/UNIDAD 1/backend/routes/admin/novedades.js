var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET novedades page. */
router.get('/', async function (req, res, next) {
  var usuario = req.session.nombre;
  var novedades = await novedadesModel.getNovedades(usuario);

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      })
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  })

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades

  });
});

/* GET agregar page. */
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',

  });
});

/* POST en caso de campo de novedes vacio */
router.post('/agregar', async (req, res, next) => {
  var usuario = req.session.nombre;
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.Servicio != "" && req.body.Plazo != "" && req.body.Descripcion != "") {
      let obj = {
        usuario: usuario,
        Servicio: req.body.Servicio,
        Plazo: req.body.Plazo,
        Descripcion: req.body.Descripcion
      }

      console.log(img_id);
      await novedadesModel.insertNovedades({
        ...req.body,
        usuario,
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo novedad'
    })
  }
});

/* GET eliminar. */
router.get('/eliminar/:item', async (req, res, next) => {
  var item = req.params.item;

  let novedad =await novedadesModel.getNovedadesById (item);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedades(item);
  res.redirect('/admin/novedades');
});


/* GET para modificar --> traer novedad por item. */
router.get('/modificar/:item', async (req, res, next) => {
  let item = req.params.item;
  console.log(req.params.item);
  var novedad = await novedadesModel.getNovedadesById(item);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});

/* POST ingresa las modificaciones a la tabla */
router.post('/modificar', async (req, res, next) => {
  try {

    let img_id =req.body.img_original;
    let borrar_img_vieja= false;
    if (req.body.img_delete ==="1") {
      img_id= null;
      borrar_img_vieja=true;
      
    }else {
      if (req.files && Object.keys (req.files).length>0) {
        imagen= req.files.imagen;
        img_id= (await uploader (imagen.tempFilePath)).public_id;
        borrar_img_vieja= true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    let obj = {
      Servicio: req.body.Servicio,
      Plazo: req.body.Plazo,
      Descripcion: req.body.Descripcion,
      img_id
    }
    await novedadesModel.modificarNovedades(obj, req.body.item);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico novedad'
    })
  }
});


module.exports = router;
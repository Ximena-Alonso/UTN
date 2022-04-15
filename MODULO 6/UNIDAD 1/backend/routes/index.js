var express = require('express');
var router = express.Router();

/* para queinicie en admin/login */
router.get('/', function(req, res, next) {
  res.redirect('admin/login');
});

module.exports = router;

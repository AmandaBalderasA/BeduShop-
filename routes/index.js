var router = require('express').Router();
const Productos = require('./productos');

router.get('/', () => res.send('Bienvenidos al API de BeduShop'));
router.use('/productos', Productos);

module.exports = router;
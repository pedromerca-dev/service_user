const express = require('express');

const productRoutes = require('./Productos/infrastructure/http/routes/ProductRoutes');

const router = express.Router();


// Rutas
router.use('/productos', productRoutes);
//router.use('/categorias', categoryRoutes);

module.exports = router;
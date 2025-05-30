const express = require('express');
const router = express.Router();

const productRoutes = require('./Productos/infrastructure/http/routes/ProductRoutes');
const categoryRoutes = require('./Categoria/infrastructure/http/routes/CategoriaRoutes');


// Rutas
router.use('/productos', productRoutes);
router.use('/categorias', categoryRoutes);
//router.use('/categorias', categoryRoutes);

module.exports = router;
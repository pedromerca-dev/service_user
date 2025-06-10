const express = require('express');
const router = express.Router();

const productRoutes = require('./Productos/infrastructure/http/routes/ProductRoutes');
const categoryRoutes = require('./Categoria/infrastructure/http/routes/CategoriaRoutes');
const authRoutes = require('./auth/infrastructure/http/routes/AuthRoutes');


// Rutas
router.use('/productos', productRoutes);
router.use('/categorias', categoryRoutes);
router.use('/auth', authRoutes);

//router.use('/categorias', categoryRoutes);

module.exports = router;
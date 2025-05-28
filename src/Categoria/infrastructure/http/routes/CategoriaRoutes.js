const express = require('express');
const CategoriaController = require('../controller/CategoriaController');
const router = express.Router();

const categoriaController = new CategoriaController();

router.get('/', categoriaController.getAll);
router.get('/:id', categoriaController.getById);
router.post('/', categoriaController.create);
router.put('/:id', categoriaController.update);
router.delete('/:id', categoriaController.delete);
router.put('/:id/habilitar', categoriaController.habilitar);
router.put('/:id/deshabilitar', categoriaController.deshabilitar);

module.exports = router;

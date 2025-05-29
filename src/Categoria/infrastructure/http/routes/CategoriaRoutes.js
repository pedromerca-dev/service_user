const express = require('express');
const CategoriaController = require('../controller/CategoriaController');
const router = express.Router();
const validateRequest = require('../../../../Middleware/Middleware')
const { param } = require('express-validator');

const categoriaController = new CategoriaController();

router.get('/', categoriaController.getAll);
router.get('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, categoriaController.getById);
router.post('/', categoriaController.create);
router.put('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, categoriaController.update);
router.delete('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest,  categoriaController.delete);
router.put('/:id/habilitar', categoriaController.habilitar);
router.put('/:id/deshabilitar', categoriaController.deshabilitar);

module.exports = router;

const express = require('express');
const TipoDocumentoController = require('../controller/TipoDocumentoController');
const { param } = require('express-validator');
const validateRequest = require('../../../../Middleware/Middleware')
const router = express.Router();

const tipoDocumentoController = new TipoDocumentoController();

router.get('/', tipoDocumentoController.getAll);
router.get('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, tipoDocumentoController.getById);
router.post('/', tipoDocumentoController.create);
router.put('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, tipoDocumentoController.update);
router.delete('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, tipoDocumentoController.delete);
router.put('/:id/habilitar', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, tipoDocumentoController.habilitar);
router.put('/:id/deshabilitar', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, tipoDocumentoController.deshabilitar);

module.exports = router;

const express = require('express');
const ProductController = require('../controller/ProductController');
const {param} = require('express-validator');
const validateRequest = require('../../../../Middleware/Middleware')
const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.get('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, productController.getById);
router.post('/', productController.create);
router.put('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, productController.update);
router.delete('/:id', param('id').isInt().withMessage('Debe ser numero entero'), validateRequest, productController.delete);
  
module.exports = router;

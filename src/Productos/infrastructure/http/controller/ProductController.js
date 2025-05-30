const ProductService = require('../../../application/services/ProductService');

const productService = new ProductService();

class ProductController {
    getAll = (request, response) => {
        productService.getAll((err, products) => {
            if (err) return response.status(500).json({ error: err.message })
            response.json(products)
        });
    };

    create = (request, response) => {
        productService.create(request.body, (err, products) => {
            if (err) return response.status(500).json({ error: err.message })
            response.status(201).json(products)
        });
    }

    getById = (request, response) => {
        productService.getById(request.params.id, (err, products) => {
            if (err) return response.status(500).json({ error: err.message });
            if (!products) return response.status(400).json({ error: 'Producto no encontrado' });
            if (products.length === 0) return response.status(400).json({ error: 'Datos vacios' });
            response.json(products)
        });
    }

    update = (request, response) => {
        productService.update(request.params.id, request.body, (err, products) => {
            if (err) return response.status(500).json({ error: err.message })
            response.json(products)
        });
    }

    delete = (request, response) => {
        productService.delete(request.params.id, (err) => {
            if (err) return response.status(500).json({ error: err.message });
            response.status(204).end();
        });
    }

    habilitar = (req, res) => {
        const id = req.params.id;
        productService.habilitar(id, true, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría habilitada correctamente' });
        });
    }

    deshabilitar = (req, res) => {
        const id = req.params.id;
        productService.deshabilitar(id, false, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría deshabilitada correctamente' });
        });
    }

}

module.exports = ProductController;
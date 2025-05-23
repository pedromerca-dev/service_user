const express = require('express');
const CategoriaService = require('../../application/services/CategoriaService');

const categoriaService = new CategoriaService();

function CategoriaController() {
    const router = express.Router();

    router.get('/', (req, res) => {
        categoriaService.getAll((err, categorias) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(categorias);
        });
    });

    router.post('/', (req, res) => {
        categoriaService.create(req.body, (err, categoria) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json(categoria);
        });
    });

    router.get('/:id', (req, res) => {
        categoriaService.getById(req.params.id, (err, categorias) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!categorias || categorias.length === 0)
                return res.status(404).json({ error: 'Categoría no encontrada' });
            res.json(categorias[0]);
        });
    });

    router.put('/:id', (req, res) => {
        categoriaService.update(req.params.id, req.body, (err, categoria) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(categoria);
        });
    });

    router.delete('/:id', (req, res) => {
        categoriaService.delete(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(204).end();
        });
    });

    return router;
}

module.exports = CategoriaController;

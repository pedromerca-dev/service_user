const CategoryService = require('../../../application/services/CategoriaService');
const categoryService = new CategoryService();

class CategoryController {
    getAll = (req, res) => {
        categoryService.getAll((err, categories) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(categories);
        });
    }

    create = (req, res) => {
        categoryService.create(req.body, (err, category) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json(category);
        });
    }

    getById = (req, res) => {
        categoryService.getById(req.params.id, (err, category) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!category || category.length === 0) return res.status(404).json({ error: 'Categoría no encontrada' });
            res.json(category);
        });
    }

    update = (req, res) => {
        categoryService.update(req.params.id, req.body, (err, category) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(category);
        });
    }

    delete = (req, res) => {
        categoryService.delete(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(204).end();
        });
    }

    habilitar = (req, res) => {
        const id = req.params.id;
        categoryService.habilitar(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría habilitada correctamente' });
        });
    }

    deshabilitar = (req, res) => {
        const id = req.params.id;
        categoryService.deshabilitar(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría deshabilitada correctamente' });
        });
    }
}

module.exports = CategoryController;

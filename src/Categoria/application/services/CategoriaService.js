const CategoriaRepository = require('../../infrastructure/db/CategoriaRepository');

const categoriaRepository = new CategoriaRepository();

class CategoriaService {
    constructor() {
        this.categoriaRepository = categoriaRepository;
    }

    getAll(callback) {
        this.categoriaRepository.getAll(callback);
    }

    create(categoria, callback) {
        this.categoriaRepository.create(categoria, callback);
    }

    getById(id, callback) {
        this.categoriaRepository.getById(id, callback);
    }

    update(id, categoria, callback) {
        this.categoriaRepository.update(id, categoria, callback);
    }

    delete(id, callback) {
        this.categoriaRepository.delete(id, callback);
    }

    habilitar(id, status, callback) {
        categoriaRepository.habilitarDeshabilitar(id, status, callback);
    }

    deshabilitar(id, status, callback) {
        categoriaRepository.habilitarDeshabilitar(id, status, callback);
    }
}

module.exports = CategoriaService;
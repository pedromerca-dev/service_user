const ProductRepository = require('./../../infrastructure/db/ProductRepository');

const productRepository = new ProductRepository();

class ProductService {
    constructor() {
        this.productRepository = productRepository;
    }

    getAll(callback) {
        this.productRepository.getAll(callback);

    }

    create(product, callback) {
        this.productRepository.create(product, callback);

    }

    getById(id, callback) {
        this.productRepository.getById(id, callback);

    }

    update(id, product, callback) {
        this.productRepository.update(id, product, callback);

    }

    delete(id, callback) {
        this.productRepository.delete(id, callback);

    }

    habilitar(id, status, callback) {
        productRepository.habilitarDeshabilitar(id, status, callback);
    }

    deshabilitar(id, status, callback) {
        productRepository.habilitarDeshabilitar(id, status, callback);
    }
}

module.exports = ProductService;
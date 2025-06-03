const TipoDocumentoRepository = require('../../infrastructure/db/TipoDocumentoRepository');

const tipoDocumentoRepository = new TipoDocumentoRepository();

class TipoDocumentoService {
    constructor() {
        this.tipoDocumentoRepository = tipoDocumentoRepository;
    }

    getAll(callback) {
        this.tipoDocumentoRepository.getAll(callback);

    }

    create(tipoDocumento, callback) {
        this.tipoDocumentoRepository.create(tipoDocumento, callback);

    }

    getById(id, callback) {
        this.tipoDocumentoRepository.getById(id, callback);

    }

    update(id, tipoDocumento, callback) {
        this.tipoDocumentoRepository.update(id, tipoDocumento, callback);

    }

    delete(id, callback) {
        this.tipoDocumentoRepository.delete(id, callback);

    }

    habilitar(id, status, callback) {
        tipoDocumentoRepository.habilitarDeshabilitar(id, status, callback);
    }

    deshabilitar(id, status, callback) {
        tipoDocumentoRepository.habilitarDeshabilitar(id, status, callback);
    }
}

module.exports = TipoDocumentoService;
const TipoDocumentoService = require('../../../application/services/TipoDocumentoService');

const tipoDocumentoService = new TipoDocumentoService();

class TipoDocumentoController {
    getAll = (request, response) => {
        tipoDocumentoService.getAll((err, tipodocuments) => {
            if (err) return response.status(500).json({ error: err.message })
            response.json(tipodocuments)
        });
    };

    create = (request, response) => {
        tipoDocumentoService.create(request.body, (err, tipodocuments) => {
            if (err) return response.status(500).json({ error: err.message })
            response.status(201).json(tipodocuments)
        });
    }

    getById = (request, response) => {
        tipoDocumentoService.getById(request.params.id, (err, tipodocuments) => {
            if (err) return response.status(500).json({ error: err.message });
            if (!tipodocuments) return response.status(400).json({ error: 'Tipo Documento no encontrado' });
            if (tipodocuments.length === 0) return response.status(400).json({ error: 'Datos vacios' });
            response.json(tipodocuments)
        });
    }

    update = (request, response) => {
        tipoDocumentoService.update(request.params.id, request.body, (err, tipodocuments) => {
            if (err) return response.status(500).json({ error: err.message })
            response.json(tipodocuments)
        });
    }

    delete = (request, response) => {
        tipoDocumentoService.delete(request.params.id, (err) => {
            if (err) return response.status(500).json({ error: err.message });
            response.status(204).end();
        });
    }

    habilitar = (req, res) => {
        const id = req.params.id;
        tipoDocumentoService.habilitar(id, true, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría habilitada correctamente' });
        });
    }

    deshabilitar = (req, res) => {
        const id = req.params.id;
        tipoDocumentoService.deshabilitar(id, false, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json({ message: 'Categoría deshabilitada correctamente' });
        });
    }

}

module.exports = TipoDocumentoController;
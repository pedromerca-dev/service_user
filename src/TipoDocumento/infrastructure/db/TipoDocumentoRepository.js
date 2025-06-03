const connect = require('../../../Config/connection');
const TipoDocumento = require('../../domain/models/TipoDocumento');

class TipoDocumentoRepository {
    getAll(callback) {
        connect.query('select * from tipo_documento WHERE habilitado = 1', (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new TipoDocumento(r)));
        });
    }

    create(tipoDocumento, callback) {
        const sql = 'INSERT INTO tipo_documento (descripcion, habilitado) VALUES (?, 1)';
        const params = [tipoDocumento.descripcion];
        connect.query(sql, params, (err, result) => {
            if (err) return callback(err);
            callback(null, { id: result.insertId, ...tipoDocumento });
        });
    }

    getById(id, callback) {
        const sql = 'SELECT * FROM tipo_documento WHERE id = ? AND habilitado = 1';
        connect.query(sql, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new TipoDocumento(r)));
        });
    }

    update(id, tipoDocumento, callback) {
        const sql = 'UPDATE tipo_documento SET  descripcion = ? WHERE id = ?';
        const params = [tipoDocumento.descripcion, id];
        connect.query(sql, params, (err) => {
            if (err) return callback(err);
            callback(null, { id, ...tipoDocumento });
        });
    }

    delete(id, callback) {
        const sql = 'UPDATE tipo_documento SET habilitado = 0 WHERE id = ?';
        connect.query(sql, [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }

    habilitarDeshabilitar(id, estatus, callback) {
        const sql = 'UPDATE tipo_documento SET habilitado = ? WHERE id = ?';
        const params = [estatus ? 1 : 0, id];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = TipoDocumentoRepository;

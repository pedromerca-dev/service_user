const connect = require('../../../Config/connection');
const Category = require('../../domain/models/Categoria');

class CategoryRepository {
    getAll(callback) {
        const sql = 'SELECT * FROM categoria WHERE habilitado = 1';
        connect.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Category(r)));
        });
    }

    create(category, callback) {
        const sql = 'INSERT INTO categoria (nombre, descripcion, habilitado) VALUES (?, ?, 1)';
        const params = [category.nombre, category.descripcion];
        connect.query(sql, params, (err, result) => {
            if (err) return callback(err);
            callback(null, { id: result.insertId, ...category });
        });
    }

    getById(id, callback) {
        const sql = 'SELECT * FROM categoria WHERE id = ? AND habilitado = 1';
        connect.query(sql, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Category(r)));
        });
    }

    update(id, category, callback) {
        const sql = 'UPDATE categoria SET nombre = ?, descripcion = ? WHERE id = ?';
        const params = [category.nombre, category.descripcion, id];
        connect.query(sql, params, (err) => {
            if (err) return callback(err);
            callback(null, { id, ...category });
        });
    }

    delete(id, callback) {
        const sql = 'UPDATE categoria SET habilitado = 0 WHERE id = ?';
        connect.query(sql, [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }

    habilitarDeshabilitar(id, estatus, callback) {
        const sql = 'UPDATE categoria SET habilitado = ? WHERE id = ?';
        const params = [estatus ? 1 : 0, id];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = CategoryRepository;

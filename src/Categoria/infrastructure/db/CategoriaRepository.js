const connect = require('../../../Config/connection');
const Category = require('../../domain/models/Categoria');

class CategoryRepository {
    getAll(callback) {
        const sql = 'SELECT * FROM categoria WHERE ESTADO = 1';
        connect.query(sql, (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Category(r)));
        });
    }

    create(category, callback) {
        const sql = 'INSERT INTO categoria (nombre, descripcion, ESTADO) VALUES (?, ?, 1)';
        const params = [category.nombre, category.descripcion];
        connect.query(sql, params, (err, result) => {
            if (err) return callback(err);
            callback(null, { id: result.insertId, ...category });
        });
    }

    getById(id, callback) {
        const sql = 'SELECT * FROM categoria WHERE id = ? AND ESTADO = 1';
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
        const sql = 'UPDATE categoria SET ESTADO = 0 WHERE id = ?';
        connect.query(sql, [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = CategoryRepository;

const connect = require('../../../Config/connection');
const Categoria = require('../../domain/models/Categoria');

class CategoriaRepository {
    getAll(callback) {
        connect.query('SELECT * FROM categoria', (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Categoria(r)));
        });
    }

    create(categoria, callback) {
        const sql = 'INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)';
        const params = [categoria.nombre, categoria.descripcion];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, { id: results.insertId, ...categoria });
        });
    }

    getById(id, callback) {
        connect.query('SELECT * FROM categoria WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Categoria(r)));
        });
    }

    update(id, categoria, callback) {
        const sql = 'UPDATE categoria SET nombre = ?, descripcion = ? WHERE id = ?';
        const params = [categoria.nombre, categoria.descripcion, id];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, { id, ...categoria });
        });
    }

    delete(id, callback) {
        connect.query('DELETE FROM categoria WHERE id = ?', [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}

module.exports = CategoriaRepository;

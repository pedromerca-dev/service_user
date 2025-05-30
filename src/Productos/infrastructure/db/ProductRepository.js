const connect = require('./../../../Config/connection');
const Product = require('./../../domain/models/Product');

class ProductRepository {
    getAll(callback) {
        connect.query('select * from producto WHERE habilitado = 1', (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Product(r)));
        });
    }

    create(product, callback) {
        const sql = 'INSERT INTO producto (nombre, descripcion, precio, cantidad, id_categoria, habilitado) VALUES (?, ?, ?, ?, ?, 1)';
        const params = [product.nombre, product.descripcion, product.precio, product.cantidad, product.id_categoria];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, { id: results.insertId, ...product });
        });
    }

    getById(id, callback) {
        connect.query('select * from producto where id=? and habilitado=1', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Product(r)));
        });
    }

    update(id, product, callback) {
        const sql = 'update producto set nombre=?,descripcion=?,precio=?,cantidad=?,id_categoria=? where id =?';
        const params = [product.nombre, product.descripcion, product.precio, product.cantidad, product.id_categoria, id];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, { id, ...product });
        });
    }

    delete(id, callback) {
        connect.query('UPDATE producto SET habilitado = 0 WHERE id = ?', [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }

    habilitarDeshabilitar(id, estatus, callback) {
        const sql = 'UPDATE producto SET habilitado = ? WHERE id = ?';
        const params = [estatus ? 1 : 0, id];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}
module.exports = ProductRepository;
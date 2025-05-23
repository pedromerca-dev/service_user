const connect = require('./../../../Config/connection');
const Product = require('./../../domain/models/Product');

class ProductRepository {
    getAll(callback) {
        connect.query('select * from producto', (err, results) => {
            if (err) return callback(err);
            callback(null, results.map(r => new Product(r)));
        });
    }

    create(product, callback) {
        const sql = 'insert into producto (nombre,descripcion,precio,cantidad,id_categoria) values(?,?)';
        const params = [product.nombre, product.descripcion, product.precio, product.cantidad, product.id_categoria];
        connect.query(sql, params, (err, results) => {
            if (err) return callback(err);
            callback(null, { id: results.insertId, ...product });
        });
    }

    getById(id, callback) {
        connect.query('select * from producto where id=?', [id], (err, results) => {
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
        connect.query('delete from producto where id =?', [id], (err) => {
            if (err) return callback(err);
            callback(null);
        });
    }
}
module.exports = ProductRepository;
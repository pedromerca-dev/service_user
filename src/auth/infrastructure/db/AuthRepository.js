const connect = require('../../../config/connection2');

class AuthRepository {
    getUsuarioPorCorreo(email) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM usuario WHERE email  = ? AND habilitado = 1';
            connect.query(sql, [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0] || null);
            });
        });
    }

    guardarToken(usuarioId, token) {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE usuario SET password = ? WHERE id = ?';
            connect.query(sql, [token, usuarioId], (err) => {
                if (err) return reject(err);
                resolve(true);
            });
        });
    }
}

module.exports = AuthRepository;
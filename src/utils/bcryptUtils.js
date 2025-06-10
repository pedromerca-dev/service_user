const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function verificarPassword(password, hash) {
    console.log('Verificar:',password);
    console.log('hash',hash);
    return await bcrypt.compare(password, hash);
}

module.exports = {
    hashPassword,
    verificarPassword
};
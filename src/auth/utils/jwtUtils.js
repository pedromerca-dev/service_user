require('dotenv').config();

const jwt = require('jsonwebtoken');

function generaToken(payload) {
    const SECRET_KEY = process.env.JWT_SECRET; 
    console.log(SECRET_KEY);
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
}

function validaToken(token) {
    const SECRET_KEY = process.env.JWT_SECRET; 
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
}

module.exports = {
    generaToken,
    validaToken
};
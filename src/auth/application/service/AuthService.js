const AuthRepository = require('../../infrastructure/db/AuthRepository');
const { generaToken } = require('../../../auth/utils/jwtUtils');
const { verificarPassword, hashPassword } = require('../../../utils/bcryptUtils');

class AuthService {
    constructor() {
        this.authRepository = new AuthRepository();
    }

    async login(email, password) {
        const usuario = await this.authRepository.getUsuarioPorCorreo(email);
        if (!usuario) return null;
        const hash = await hashPassword(password);
        console.log(hash);
        const esValido = await verificarPassword(password, usuario.password);
        console.log(esValido);
        if (!esValido) return null;
        
        const payload = { id: usuario.id, email: usuario.email };
        const token = generaToken(payload);
        
        console.log('token', token);
        await this.authRepository.guardarToken(usuario.id, token);
        return { token, usuario };
    }
}

module.exports = AuthService;
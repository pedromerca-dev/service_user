const AuthService = require('../../../application/service/AuthService');

const authService = new AuthService();
const bodyValidator = (req, res, next, fields) => {
  
    const errors = fields.map(key => (!req.body[key] ? `El parametro ${key} es requerido`:null)).filter(Boolean);
    console.log('Validacion: ',errors);
    if (errors.length) res.status(500).json({ error: errors });
       
} 
class AuthController {
    login = async (req, res, next) => {
        const { email, password } = req.body;
        //FIXME: validacion parametros
        console.log('Datos de login:', req.body);
        const fields = ['email','password']
        bodyValidator(req, res, next, fields);
        try {
            const resultado = await authService.login(email, password);
            console.log(resultado);
            if (!resultado) {
                return res.status(401).json({ error: 'Credenciales inválidas' });
            }
            res.json(resultado); // { token, usuario }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}

module.exports = AuthController;
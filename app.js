const express = require('express');
const services = require('./src/services');


const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/v1', services);
app.use((req, res, next) => {
    const errors = new Error(`Ruta no encontrada: ${req.originalUrl}`);
    errors.status= 404;
    next(errors);
})


app.use((err,req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Error interno del servidor';
    res.status(status).json({status,error: true, message})
}),


// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
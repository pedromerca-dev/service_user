const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root-secret-password',
    database: 'pedradas',
    port: '8084'
    
});

connection.connect((err) => {
    if(err) {
        console.log('Error conexión BD:',err);
        process.exit(1);         
     }
     console.log('Conexión exitosa a la BD');
} );

module.exports = connection;
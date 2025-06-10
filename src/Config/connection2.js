const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root-secret-password',
    database: 'db_administracion',
    port: '8084'
    
});

connection.connect((err) => {
    if(err) {
        console.log('Error conexión BD2:',err);
        process.exit(1);         
     }
     console.log('Conexión exitosa a la BD2');
} );

module.exports = connection;
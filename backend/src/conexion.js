var mysql = require('mysql');
const host = process.env.HOST || '192.168.0.14';
const db = process.env.DB || 'ejemplo';
const user = process.env.USER || 'root';
const password = process.env.PASS || '1234';


/*var conexion = mysql.createConnection({
    host: host,
    database: db,
    user: user,
    password: password,
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});*/


var pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: user,
    password: password,
    database: db,
    multipleStatements: true
});



module.exports = pool;
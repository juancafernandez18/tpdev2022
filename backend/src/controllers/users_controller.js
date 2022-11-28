const mysqlConnection = require('../conexion');

const get_all = (req, res) => {
    mysqlConnection.query('SELECT * FROM datos', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}


const insert = (req, res) => {


    const { Nombre } = req.body;

    //  const query = `
    //SET @id =0;
    //SET @username= ?;
    //SET @contenido = ?;
    //  CALL ADD_OR_EDIT_USER(@id, @username, @contenido);
    //`;

    const query = `insert into datos(Nombre)values('${Nombre}');`


    mysqlConnection.query(query, [Nombre], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario Agregado' });
        } else {
            console.log(err);
        }
    });
}


module.exports = {
    get_all: get_all,
    insert: insert
}
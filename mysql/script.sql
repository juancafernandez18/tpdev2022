USE `ejemplo`;

CREATE TABLE IF NOT EXISTS datos (
id_datos INT auto_increment ,
Nombre VARCHAR(255),
primary key (id_datos)
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '1234';
GRANT ALL PRIVILEGES ON . TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

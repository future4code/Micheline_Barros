CREATE TABLE user(
idUser VARCHAR(65) PRIMARY KEY,
name VARCHAR(65) UNIQUE NOT NULL,
email VARCHAR(65) UNIQUE NOT NULL,
age INT NOT NULL
);

CREATE TABLE product(
idProduct VARCHAR(65) PRIMARY KEY,
name VARCHAR(65) UNIQUE NOT NULL,
description TEXT NOT NULL,
price FLOAT NOT NULL,
source VARCHAR(65),
destiny VARCHAR(65)
);

CREATE TABLE purchase(
userId VARCHAR(65),
productId VARCHAR(65),
quantity INT NOT NULL,
total INT NOT NULL,
FOREIGN KEY (userId) REFERENCES user(idUser),
FOREIGN KEY (productId) REFERENCES product (idProduct)
);

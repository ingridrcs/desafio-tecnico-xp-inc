DROP SCHEMA IF EXISTS TechBank;

CREATE SCHEMA IF NOT EXISTS TechBank;

CREATE TABLE
    TechBank.Investments (
        codCliente INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        codAtivo INTEGER,
        qtdeAtivo INTEGER
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.Investments (codAtivo, qtdeAtivo)
VALUES (100, 100), (101, 100), (102, 100);

CREATE TABLE
    TechBank.Accounts (
        codCliente INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        saldo INTEGER 
    ) ENGINE = INNODB;

INSERT INTO TechBank.Accounts (saldo) VALUES (1000), (5000), (14000), (500);

CREATE TABLE
    TechBank.Assets (
        CodAtivo INTEGER PRIMARY KEY NOT NULL,
        QtdeAtivo INTEGER NOT NULL,
        Valor DECIMAL(6, 2) NOT NULL
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.Assets (CodAtivo, QtdeAtivo, Valor)
VALUES (111, 100, 30.00), (222, 100, 35.00), (333, 100, 15.00), (444, 50, 40.00), (555, 50, 27.00);

CREATE TABLE
    TechBank.AssetsClient (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        CodCliente INTEGER NOT NULL,
        CodAtivo INTEGER NOT NULL,
        QtdeAtivo INTEGER,
        Valor DECIMAL(6, 2),
        FOREIGN KEY (CodCliente) REFERENCES Accounts (codCliente) ON DELETE CASCADE,
        FOREIGN KEY (CodAtivo) REFERENCES Assets (CodAtivo) ON DELETE CASCADE
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.AssetsClient (
        CodCliente,
        CodAtivo,
        QtdeAtivo,
        Valor
    )
VALUES (1, 111, 100, 3000.00), (1, 222, 100, 3500.00), (2, 333, 100, 1500.00), (2, 111, 10, 300.00 ), (3, 444, 50, 2000.00), (4, 222, 10, 350.00);

CREATE TABLE
    TechBank.User (
        id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
        email VARCHAR(50) NOT NULL,
        senha VARCHAR(50) NOT NULL,
        codCliente INTEGER ,
        FOREIGN KEY (codCliente) REFERENCES Accounts (codCliente) ON DELETE CASCADE
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.User (email, senha, codCliente)
VALUES ("ingrid@gmail.com", 125587, 1), ("artur@gmail.com", 654321, 2), ("luciana@gmail.com", 457895, 3), ("mario@gmail.com", 156489, 4);
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

INSERT INTO TechBank.Accounts (saldo) VALUES (100), (101), (10);

CREATE TABLE
    TechBank.Assets (
        CodAtivo INTEGER PRIMARY KEY NOT NULL,
        QtAtivo INTEGER,
        Valor DECIMAL(5, 2)
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.Assets (CodAtivo, QtAtivo, Valor)
VALUES (111, 100, 35.00), (222, 100, 35.00), (333, 100, 35.00);
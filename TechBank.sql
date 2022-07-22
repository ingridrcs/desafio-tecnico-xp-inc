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
        QtdeAtivo INTEGER,
        Valor DECIMAL(5, 2)
    ) ENGINE = INNODB;

INSERT INTO
    TechBank.Assets (CodAtivo, QtdeAtivo, Valor)
VALUES (111, 100, 35.00), (222, 100, 35.00), (333, 100, 35.00), (444, 100, 35.00);

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
VALUES (1, 111, 100, 350.00), (1, 222, 100, 350.00), (1, 333, 100, 350.00);
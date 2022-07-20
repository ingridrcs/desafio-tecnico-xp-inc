DROP SCHEMA IF EXISTS TechBank;
CREATE SCHEMA IF NOT EXISTS TechBank;

	CREATE TABLE TechBank.Investments (
    codCliente INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    codAtivo INTEGER,
    qtdeAtivo INTEGER
    ) ENGINE=INNODB;

  INSERT INTO TechBank.Investments (codAtivo, qtdeAtivo)
VALUES 
(100, 100),
(101, 100),
(102, 100);

	CREATE TABLE TechBank.Accounts (
    codCliente INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    saldo DECIMAL
    ) ENGINE=INNODB;

  INSERT INTO TechBank.Accounts (saldo)
VALUES 
(100),
(101),
(10);
const sinon = require("sinon");
const { expect } = require("chai");
const accountModel = require("../../models/accountModel");
const connection = require("../../db/connection");


describe('Testar a camada Account na Model', () => {
  describe('Ver se o endpoint GET/account/:codCliente retorna os dados do cliente', () => {
    const insertId = 1;

    before(async () => {

      const client = [{
        "codCliente": 1,
        "saldo": 1000
      }];
      sinon.stub(connection, 'execute').resolves(client);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('Retorna um objeto', async () => {
      const response = await accountModel.getCodCliente(insertId);
      expect(response).to.be.an("object");
    });
    it('retorna "codCliente" e "saldo" ', async () => {
      const response = await accountModel.getCodCliente(insertId);
      expect(response).to.have.property("codCliente");
      expect(response).to.have.property("saldo");
    })
  });
  
  describe('Ver se a atualização é feita com sucesso', () => {
    before(async () => {

      const client = [{
        "codCliente": 1,
        "saldo": 1000
      }];
      sinon.stub(connection, 'execute').resolves(client);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('Retorna um objeto', async () => {
      const response = await accountModel.update({codCLiente:1, saldo:2000});
      expect(response).to.be.an("object");
    });
    it('retorna "codCliente" e "saldo" ', async () => {
      const response = await accountModel.update({codCLiente:1, saldo:1000});
      expect(response).to.have.property("codCliente");
      expect(response).to.have.property("saldo");
    })
  });
});


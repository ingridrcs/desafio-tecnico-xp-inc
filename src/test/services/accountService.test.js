const sinon = require("sinon");
const { expect } = require("chai");
const accountService = require('../../services/accountService');
const accountModel = require('../../models/accountModel');



describe('Testar a camada Account no Service', () => {
  describe('Ver se o endpoint GET/account/:codCliente retorna os dados do cliente', () => {
    const insertId = 1;

    before(async () => {
      const client = [{
        "codCliente": 1,
        "saldo": 1000
      }];
      sinon.stub(accountModel, 'getCodCliente').resolves(client);
    });

    after(async () => {
      accountModel.getCodCliente.restore();
    });
    it('Retorna um array', async () => {
      const response = await accountService.getCliente(insertId);
      expect(response).to.be.an("array");
    });
    it('retorna "codCliente" e "saldo" ', async () => {
      const [response] = await accountModel.getCodCliente(insertId);
      expect(response).to.have.property("codCliente");
      expect(response).to.have.property("saldo");
    })
  })
});
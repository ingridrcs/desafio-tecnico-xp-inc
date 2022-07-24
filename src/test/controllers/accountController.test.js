const sinon = require("sinon");
const { expect } = require("chai");
const accountService = require('../../services/accountService');
const accountController = require('../../controllers/accountController');

describe('Testar a camada Account no Controller', () => {
  describe('Quando é inserido com sucesso', () => {
    const codCliente = 1;
    const response = {};
    const request = { params: { codCliente }}
    before(async () => {
      const client = {
        "codCliente": 1,
        "saldo": 1000
      }
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(client);

      sinon.stub(accountService, 'getCliente').resolves(client);
    });

    after(() => {
      accountService.getCliente.restore();
    });
    it('É chamado o status com o código 200', async () => {
      await accountController.getCodCliente(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  })
});
// Teste imcompleto
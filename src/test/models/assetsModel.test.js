const sinon = require("sinon");
const { expect } = require("chai");
const assetModel = require("../../models/assetsModel");
const connection = require("../../db/connection");


describe('Testar a camada Assets na Model', () => {
  describe('Ver se o endpoint GET/assets/:codAtivo retorna o Ativo correto', () => {
    const codAsset = 111;

    before(async () => {

      const asset = [{
        "codAtivo": 111,
        "QtdeAtivo": 100,
        "Valor":30.00
      }];
      sinon.stub(connection, 'execute').resolves(asset);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('Retorna um objeto', async () => {
      const response = await assetModel.getByAssets(codAsset);
      expect(response).to.be.an("object");
    });
    it('retorna "codAtivo", "QtdeAtivo" e "Valor" ', async () => {
      const response = await assetModel.getByAssets(codAsset)
      expect(response).to.have.property("codAtivo");
      expect(response).to.have.property("QtdeAtivo");
      expect(response).to.have.property("Valor");
    })
  });
  
  describe('Ver se retorna todos os ativos de um cliente', () => {
    before(async () => {
      const allAssets = [
  {
    "id": 1,
    "CodCliente": 1,
    "CodAtivo": 111,
    "QtdeAtivo": 100,
    "Valor": "3000.00"
  },
  {
    "id": 2,
    "CodCliente": 1,
    "CodAtivo": 222,
    "QtdeAtivo": 100,
    "Valor": "3500.00"
  }
]
      sinon.stub(connection, 'execute').resolves(allAssets);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('Retorna um array', async () => {
      const response = await assetModel.getAllByClients();
      expect(response).to.be.an("array");
    });
    it('o array não está vazio" ', async () => {
      const response = await assetModel.getAllByClients();
      expect(response).to.not.be.empty;
    })
  });
});


const sinon = require("sinon");
const { expect } = require("chai");
const investmentsModel = require("../../models/investmentsModel")
const connection = require("../../db/connection");


describe('Testar a camada Investments na Model', () => {
  describe('Ver se a função retorna todos os investimentos', () => {
    before(async () => {
      const allInvestments = [
  {
    "id": 1,
    "codCliente": 1,
    "codAtivo": 111,
    "valor": "3120"
  },
  {
    "id": 2,
    "codCliente": 1,
    "codAtivo": 222,
    "valor": "3500"
  },
  {
    "id": 3,
    "codCliente": 2,
    "codAtivo": 333,
    "valor": "1500"
  },
  {
    "id": 4,
    "codCliente": 2,
    "codAtivo": 111,
    "valor": "300"
  },
  {
    "id": 5,
    "codCliente": 3,
    "codAtivo": 444,
    "valor": "2000"
  },
  {
    "id": 6,
    "codCliente": 4,
    "codAtivo": 222,
    "valor": "350"
  }
]
      sinon.stub(connection, 'execute').resolves(allInvestments);
    });

    after(async () => {
      connection.execute.restore();
    });
    it('Retorna um objeto', async () => {
      const response = await investmentsModel.getAllInvestments();
      expect(response).to.be.an("object");
    });
    it('retorna "id", "codCliente", "codAtivo" e "valor" ', async () => {
      const response = await investmentsModel.getAllInvestments()
      expect(response).to.have.property("id");
      expect(response).to.have.property("codCliente");
      expect(response).to.have.property("codAtivo");
      expect(response).to.have.property("valor");
    })
  });
});
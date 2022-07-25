const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title:"Express API com express",
      description:"Api utilizando express documentada pelo swagger para o desafio XP",
      version: "1.0"
    },
    servers: [{
    url: "http://localhost:3000",
    description: "localhost"
  }]
  },
apis: ["./src/routes/accountRoute.js", "./src/routes/assetsRoute.js", "./src/routes/investmentsRoute.js", "./src/routes/loginRoute.js"]
}
module.exports = swaggerConfig;
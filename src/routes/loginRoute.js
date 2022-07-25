const express = require('express');
const router = express.Router();
const loginUser = require('../controllers/loginController');
const loginMiddle = require('../middlewares/loginMiddleware');

// /**
//  * @swagger
//  *  tags:
//  *    name: User
//  *    description: Endpoints de User
//  */

// /**
//  * @swagger
//  *  components:
//  *    schemas:
//  *       User:
//  *           type: object
//  *           required:
//  *            - email
//  *            - password
//  *           properties:
//  *              token:
//  *                  type: string
//  */

// /**
//  * @swagger
//  *   /login:
//  *     get:
//  *       tags:
//  *         [User]
//  *       description: Endpoint retorna uma lista de usuários
//  *       responses:
//  *        200:
//  *         content:
//  *           appliccation/json:
//  *            schema:
//  *              type: array
//  *              items:
//  *                $ref: '#/components/schemas/User'
//  */
router.post('/login', loginMiddle, loginUser);

module.exports = router;


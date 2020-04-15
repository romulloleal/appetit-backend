const express = require('express');

const customersController = require('./controllers/customersController');
const ordersController = require('./controllers/ordersController');

const routes = express.Router();

routes.get('/maida/customers', customersController.index);
routes.get('/maida/orders', ordersController.index);

module.exports = routes;

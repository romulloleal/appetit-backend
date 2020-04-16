require('dotenv').config();
const express = require('express');

const customersController = require('./controllers/customersController');
const ordersController = require('./controllers/ordersController');

const routes = express.Router();

routes.get('/customers', customersController.index);
routes.get('/orders', ordersController.index);

module.exports = routes;

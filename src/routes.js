require('dotenv').config();
const express = require('express');

const customersController = require('./controllers/customersController');
const ordersController = require('./controllers/ordersController');
const productsController = require('./controllers/productsController');

const routes = express.Router();

routes.get('/customers', customersController.index);
routes.get('/orders', ordersController.index);
routes.get('/products', productsController.index);

module.exports = routes;

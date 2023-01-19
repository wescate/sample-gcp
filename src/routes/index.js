const { schema } = require('../schema');
const { customer } = require('./customer');
const { user } = require('./user');
const  {services} = require('../services');

 
services.schema = schema
const routes = (server) => {
   customer(server,services)
   user(server,services)
} 
 

module.exports = {routes}; 
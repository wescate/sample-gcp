const {repository} = require('../../infraestructure')
const Response = require('../../models/response');
const customer = require('../../models/customer')
const {util}  = require('../../crosscuting');

const findAll = async (r,h) => {    
    let response = null;
    let code = 200;
    const secrets = await util.secret.list();
    const Criptography = new util.Criptography(secrets);

    await repository.datastore.findAll('Customer')
                              .then(value=>{
                            if (!value.hasRecords) {
                                message = '0 records founded';
                            } else {
                                const Customer =  new customer(value.message.entity) 
                                Customer.creditCard.number = Criptography.decripted(Customer.creditCard.number);
                                Customer.creditCard.code = Criptography.decripted(Customer.creditCard.code);
                                Customer.email = Criptography.decripted(Customer.email);
                                message = {
                                    key : value.message.key,
                                    entity :Customer
                                }
                            }
                              
                              })
                              .catch(err =>{
                                code = 500;
                                message = err.message;
                             });  


    response = new Response(code, message)
    return h.response(response).code(code); 
}


module.exports = { findAll }
 
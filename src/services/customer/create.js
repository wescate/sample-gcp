const {repository} = require('../../infraestructure')
const Response = require('../../models/response');
const customer = require('../../models/customer')
const {util}  = require('../../crosscuting');

const create = async (r,h) => {    
    let response = null;
    let code = 200;
    let message = '';
    
    const secrets = await util.secret.list();
    const Criptography = new util.Criptography(secrets);

    const payload = r.payload;
    const Customer = new customer(payload)    
    Customer.creditCard.number = Criptography.encriptData(Customer.creditCard.number);
    Customer.creditCard.code = Criptography.encriptData(Customer.creditCard.code);
    Customer.email =  Criptography.encriptData(Customer.email);
    
    const queryResult = await repository.datastore.find1P('Customer','documentNumber',Customer.documentNumber)
    if (queryResult.hasRecords) {
        code = 400;
        message = 'Customer has been recorded previusly';
    }else{''
        const result =  await repository.datastore.create(Customer,'Customer')
        code = result.code == 0 ? 200 : 500 ;
        message = result.message;
    }
    response = new Response(code, message)
    return h.response(response).code(code); 
}


module.exports = { create }
 
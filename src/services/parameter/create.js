const {repository} = require('../../infraestructure')
const Response = require('../../models/response');

const create = async (r,h) => {    
    let response = null;
    let code = 200;
    let message = '';

    const payload = r.payload;
    const Customer = new customer(payload)    
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
 
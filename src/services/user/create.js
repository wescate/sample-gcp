const {repository} = require('../../infraestructure')
const Response = require('../../models/response');
const User = require('../../models/user');

const create = async (r,h) => {    
    let response = null;
 
    const user = new User(r.payload.userName,r.payload.userMail,r.payload.userPassword);
 
    const queryResult = await repository.datastore.find1P('User','userMail',user.userMail)
    let code = 200;
    let message = '';
    
    if(queryResult.hasRecords) {
        code = 400;
        message = 'el usuario ya se encuentra registrado'
    }else{
        const createResult = await repository.datastore.create(user,'User');        
        code = createResult.code == 0 ? 200 : 500 ;
        message = createResult.message;
    }
    response = new Response(code, message)

    return h.response(response).code(code); 
   
}

module.exports = { create }
 
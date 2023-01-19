const {Datastore} = require('@google-cloud/datastore');
const Response = require('../../models/response');
const UserValidate = require('../../models/userValidate');
const datastore = new Datastore()
const login = async (r,h) => {  
    let response = null;
    try {
        const userExistsQuery = datastore
        .createQuery('User')
        .filter('userMail' ,r.payload.userMail);    
        const userExists = await datastore.runQuery(userExistsQuery);
        let code = 200;
        let message = null
        if(userExists[0].length === 0) {
            message = 'usuario no existe'
            code = 401
        }else{
            const userValidate = new UserValidate(userExists[0][0].userMail,userExists[0][0].userPassword,userExists[0][0].salt);
            if(userValidate.validatePassword(r.payload.userPassword)){
                message = 'usuario validado'
                code = 202
            }else{
                message = 'usuario y password no coinciden'
                code = 401
            }
        }
        response = new Response(code, message)
    } catch (err) {
        console.error('ERROR:', err);
        response = new Response(500,err.message);
    }
   
    return h.response(response).code(response.code);
}

module.exports = { login }
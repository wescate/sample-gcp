const {user} = require('./user');
const {customer} = require('./customer');
 

const secrets =  async () => await secret.list();

const services = {
    user,
    customer,
    secrets
    // model : {
    //     user
    // },
    // gcp:{
        
    // }
    
}
 

module.exports = {services};

const customer = async (server,services) => {
   

    server.route({
        method: 'GET',
        path: '/customer',
        handler:  services.customer.findAll
    });
    server.route({
        method: 'POST',
        path: '/customer',
        handler:  services.customer.create,
        // options:{
        //     validate: {
        //         payload: services.schema.customer
        //     }
        // }
       
    });
  

}

module.exports = {
    customer
};
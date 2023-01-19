

const user = async (server,services) => {
   

        server.route({
            method: 'GET',
            path: '/user',
            handler:  services.user.get
        });
        server.route({
            method: 'POST',
            path: '/user',
            handler:  services.user.create,
            options:{
                validate: {
                    payload: services.schema.user
                }
            }
           
        });
        server.route({
            method: 'POST',
            path: '/user/validate',
            handler:  services.user.login,
           
        });
  
}

module.exports = {
    user
};
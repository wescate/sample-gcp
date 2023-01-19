'use strict';
const Hapi = require('@hapi/hapi');
const {routes} = require('../src/routes');
const { util } = require('./crosscuting');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    const secrets = await  util.secret.list();
     
    routes(server);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
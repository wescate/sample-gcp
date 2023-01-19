const { findAll} = require('./findAll');
const { create} = require('./create');
const { findBy1P} = require('./findBy1P');

const customer = {
    findAll,
    findBy1P,
    create
    //deleteById
}

module.exports ={ customer };
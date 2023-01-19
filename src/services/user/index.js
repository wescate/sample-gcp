const { get } = require('./get');
const { create } = require('./create');
const { login } = require('./login');

const user = {
    get,
    create,
    login
}

module.exports ={ user };
const {create} = require('./create')
const {find1P} = require('./find1P')
const {findAll} = require('./findAll')
const datastore = {
    create,
    find1P,
    findAll
}

module.exports = { datastore }
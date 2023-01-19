const Joi = require('joi');

const customer = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().alphanum(),
    lastName: Joi.string().required(),
    gender: Joi.allow('h','H','m,','M','x','X'),
    email: Joi.string().email(),
    phone: Joi.string().length(10),
    creditCard: {
        allow: Joi.boolean(),
        number: Joi.string(),
        code: Joi.number(),
    },
    documentType: Joi.allow('DNI','PASS','CE','RUC'),
    documentNumber:Joi.string().alphanum(),
    department:Joi.string().required(),
    province:Joi.string().required(),
    district:Joi.string().required(),
})



module.exports = {customer}
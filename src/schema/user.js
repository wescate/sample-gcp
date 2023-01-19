const Joi = require('joi');

const user = Joi.object({
    userName: Joi.string().min(3).max(50),
    userMail:Joi.string().email(),
    userPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

module.exports = {user}

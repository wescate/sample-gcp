const crypto = require('crypto'); 
class userValidate {
  constructor(userMail,userPassword,salt){
        this.userMail = userMail,
        this.userPassword = userPassword,
        this.salt = salt
    }
    validatePassword(userPassword){
        const hashPass = crypto.pbkdf2Sync(userPassword,  
            this.salt, 1000, 64, `sha512`).toString(`hex`); 
        return hashPass === this.userPassword;
    }
}

module.exports = userValidate;
const crypto = require('crypto'); 

class User {
    constructor(userName, userMail, userPassword) {
        this.userName = userName,
        this.userMail = userMail,
        this.salt = '',
        this.userPassword = this.encriptPassword(userPassword)
        
    }
  
    encriptPassword(userPassword) {

        // Creating a unique salt for a particular user 
        this.salt = crypto.randomBytes(16).toString('hex');
        // Hashing user's salt and password with 1000 iterations, 
        return crypto.pbkdf2Sync(userPassword, this.salt,
            1000, 64, `sha512`).toString(`hex`);
    }
  
}
module.exports = User;
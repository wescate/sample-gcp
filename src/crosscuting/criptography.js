const crypto = require('crypto');

//const algorithm  =  'aes-256-cbc';

// const cipherKey = (secrets) => {
//     const KeyPass= Buffer(secrets['KeyPass']);
//     const Salt= Buffer(secrets['Salt']);
//     const Iv= Buffer(secrets['InitializationVector']);
//     const key = crypto.scryptSync(KeyPass, Salt,32);
//     return crypto.createCipheriv(algorithm,key,Iv);
// }

// const decipher = (secrets) => {
//     const KeyPass= Buffer(secrets['KeyPass']);
//     const Iv= Buffer(secrets['InitializationVector']);
//     return crypto.createDecipheriv(algorithm,KeyPass,Iv);
// }

// const encriptData = (data) => {
//     const cKey = cipherKey;
//     let encrypted = cKey.update(data,'utf8','hex');
//     encrypted += cKey.final('hex');
//     return encrypted;
// }

// const decripted = (encrypted) => {
//     const dKey = decipher;
//     let decypted = dKey.update(encrypted,'hex','utf8');
//     decypted = dKey.final('utf8');
//     return decypted;
// }

class Criptography {
    constructor(secrets) {
        this.algorithm = 'aes-256-cbc';
        this.keyPass= Buffer.alloc(32,secrets['KeyPass'],'utf8');
        this.salt= Buffer.alloc(32,secrets['Salt'],'utf8');
        this.iv= Buffer.alloc(16,secrets['InitializationVector'],'utf8');
    }

    encriptData(data) {
       const cipher = crypto.createCipheriv(this.algorithm,this.keyPass,this.iv);
       let encrypted = cipher.update(data,'utf8','hex');
       encrypted += cipher.final('hex');
       return encrypted;
    }

    decripted(encrypted) {
        const decipher = crypto.createDecipheriv(this.algorithm,this.keyPass,this.iv);
        let decypted = decipher.update(encrypted,'hex','utf8');
        decypted += decipher.final('utf8');
        return decypted
    }
}
module.exports = { Criptography }
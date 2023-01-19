const { randomUUID } = require('crypto')
class Response {
    constructor(code,data){
        this.code = code,
        this.eventId = randomUUID(),
        this.data = data
    }
}

module.exports = Response;
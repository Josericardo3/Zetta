class Response {
    constructor(userModel = {}) {
        this.status = userModel.status
        this.message = userModel.message
        this.transaction = userModel.transaction
    }

    toJSON() {
        return {
            status: this.status,
            message: this.message,
            transaction: this.transaction
        }
    }
}
module.exports = Response
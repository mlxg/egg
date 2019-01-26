const Service = require('egg').Service

class UserService extends Service {
    async find(params) {
        const user = await this.app.mysql.get('dev').select('user', {
            where: {
                id: [params.id],
                // customer: [params.customer]
            }
        })
        return {user}
    }
}

module.exports = UserService

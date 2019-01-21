const Service = require('egg').Service

class UserService extends Service {
    async find(params) {
        const user = await this.app.mysql.get('dev').select('t_activity_address', {
            where: {
                uid: [params.uid],
                customer: [params.customer]
            }
        })
        return {user}
    }
}

module.exports = UserService
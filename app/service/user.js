const Service = require('egg').Service;

class UserService extends Service {
    async find(params) {
        const user = await this.app.mysql.get('user', params);
        return { user };
    }

    async insert(params) {
        const user = await this.app.mysql.insert('user', params);
        return { user };
    }
}

module.exports = UserService;
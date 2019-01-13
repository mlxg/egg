const Controller = require('egg').Controller

class UserController extends Controller {
    async info() {
        const ctx = this.ctx
        const queryObj = ctx.query;
        const user = await ctx.service.user.find(queryObj)

        console.log(user)


        ctx.body = {
            code: 0,
            msg: 'success',
            data: user
        }


    }
}

module.exports = UserController
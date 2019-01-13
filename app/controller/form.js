const Controller = require('egg').Controller;
class FormController extends Controller {
    async post(){
        const ctx = this.ctx
        const queryObj = ctx.query;
        await ctx.service.user.insert(queryObj)

        this.ctx.body = {
            code:0,
            msg:'success'
        }
    }
}
module.exports = FormController;
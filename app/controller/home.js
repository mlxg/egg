'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        await this.ctx.render('news/list.tpl')
    }
}

module.exports = HomeController

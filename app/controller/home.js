'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        // this.ctx.body = 'hi, egg';
        await this.ctx.render('news/list.tpl')
    }
}

module.exports = HomeController

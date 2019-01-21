'use strict'

const Controller = require('egg').Controller

class NewsController extends Controller {
    async list() {
        const dataList = await NewsController.other()
        
        this.ctx.body = {
            code: 0,
            msg: 'success',
            data: dataList
        }
    };

    static async other() {
        return {
            list: [
                {id: 1, title: 'new1', url: '/news/1'},
                {id: 2, title: 'new2', url: '/news/2'}
            ]
        }
    }

}

module.exports = NewsController

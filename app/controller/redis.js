'use strict';

const Controller = require('egg').Controller;

class redisController extends Controller {
    async redis() {
        const { ctx, app } = this;
        await app.redis.set('foo', 'bar');
        const user = await app.redis.get('foo');

        ctx.body = {
            code: 0,
            msg: 'success',
            data: user
        };


    }
}

module.exports = redisController;

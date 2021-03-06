'use strict';

/**
 * route
 * @param app
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.news.list);//api
  router.get('/user', controller.user.info);//from database
  router.get('/redis', controller.redis.redis);//from redis
};

'use strict';

/**
 * route
 * @param app
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.news.list);//api
  router.post('/user', controller.user.info);//from database
};

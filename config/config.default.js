'use strict';

module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1547291824346_7234';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };

    config.mysql = {
        clients: {
            // dev: {
            //     host: '172.18.1.77',
            //     port: '3306',
            //     user: 'root',
            //     password: 'club@1.77',
            //     database: 'club'
            // },
            dev: {
                host: 'localhost',
                port: '3306',
                user: 'debian-sys-maint',
                password: 'GgXpE86OYgR1dXDW',
                database: 'app'
            }

        },
        app: true,
        agent: false
    };

    config.security = {
        csrf: {
            enable: false,
        },
    };


    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };

    config.redis = {
        client: {
            port: 6379,
            host: 'localhost',
            password: 'admin',
            db: 0
        }
    };


    return config;
};

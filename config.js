require("dotenv").config()


module.exports = {
    app: {
        title: process.env.APP_TITLE || 'ISPAdmin',
        logo: '/public/niceadmin/img/logo.jpg',
        name: process.env.APP_NAME || 'ISPAdmin',
        port: process.env.APP_PORT || 1000,
        developer: process.env.NODE_ENV || ''
    },    
    pg: {
        host: process.env.DB_HOST || '10.88.1.6',
        user: process.env.DB_USER || 'sa',
        password: process.env.DB_PASSWORD || 'shecsid',
        port: process.env.DB_PORT || '5432',
        database: process.env.DB_NAME || 'ISPAdmin',
        client_encoding: 'utf8'
    },
    api: {
        auth: "http://appuno.dyndns.org:10001",
        catalogos: "http://appuno.dyndns.org:11001",
        mikrotik: "http://appuno.dyndns.org:14003",
    }
}
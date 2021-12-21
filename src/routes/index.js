// const productsRouter = require('./products');
const express = require('express');

const productRouter = require('./product');
const adminRouter = require('./admin');

function route(app) {
    // app.use('/products', productsRouter)
    app.use('/', productRouter)
    app.use('/admin', adminRouter)
    app.use('/admin/dashboards', adminRouter)
        // app.use('/admin/product', adminRouter)

};
module.exports = route;
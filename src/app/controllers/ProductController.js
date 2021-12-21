const Product = require('../models/Product');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const { application } = require('express');

class ProductController {

    //[GET] /
    index(req, res, next) {

            Product.find({})
                .then(products => {
                    var imgs = products.forEach((product) => {
                        console.log('imgs:', product.image)
                    })
                    console.log(imgs)
                    res.render('web/products', {
                        products: multipleMongooseToObject(products),
                        layout: 'main'
                    });
                    // console.log(products)
                    // res.json(products)
                })
                .catch(next)
        }
        //[POST]/products modal
    GetProductQuickView(req, res, next) {

        var data_id = req.body.id
        console.log(data_id)
        Product.findById(data_id)
            .then(product => {
                console.log(product)
                res.json(product)
            })
            .catch(next);

    }

}
module.exports = new ProductController;
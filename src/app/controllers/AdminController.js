const Product = require('../models/Product');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class AdminController {

    //[GET] /
    index(req, res, next) {

        Product.find({})
            .then(products => {
                res.render('admin/dashboards', {
                    products: multipleMongooseToObject(products),
                    layout: 'admin'
                });
                // console.log(products)
                // res.json(products)
            })
            .catch(next)

    }

    product(req, res, next) {

        Product.find({})
            .then(products => {
                res.render('admin/product', {
                    products: multipleMongooseToObject(products),
                    layout: 'admin'
                });
                // console.log(products)
                // res.json(products)
            })
            .catch(next)
    }


    createProduct(req, res, next) {
        var formdata = req.body;
        const file = req.file;
        console.log(file)
        formdata.image = file.path.replace('src\\public\\', '\\')
        const product = new Product(formdata);
        product.save();
        res.redirect('/admin/product')
    }

    updateProduct(req, res, next) {
        // Product.findById(req.params.id)
        // .then(products => {
        //     res.render('admin/product', {
        //         products: mongooseToObject(products),
        //     });
        // })
        // .catch(next);

        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/product'))
            .catch(next);
    }

}

module.exports = new AdminController;
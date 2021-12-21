const express = require('express');
const { product } = require('../app/controllers/AdminController');
const router = express.Router();
var path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, 'src/public/dataImg');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

const adminController = require('../app/controllers/AdminController');

router.get('/', adminController.index);

router.get('/product', adminController.product);

router.post('/product', upload.single('image'), adminController.createProduct);

router.get('/:id', adminController.updateProduct);




module.exports = router;
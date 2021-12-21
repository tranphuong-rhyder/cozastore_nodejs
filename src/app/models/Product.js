const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Product = new Schema({

    name: {
        type: String,
        maxLength: 255,
        required: true
    },
    category: {
        type: String,
        maxLength: 255,
        required: true
    },
    description: {
        type: String,
        maxLength: 600,
        required: true
    },
    image: {
        type: String,
        maxLength: 255,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);
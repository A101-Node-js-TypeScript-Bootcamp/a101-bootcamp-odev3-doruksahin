const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    productName: {
        type: String,
    },
    isDiscount: {
        type: Boolean,
    },
    category: {
        categoryId: {
            type: Number
        },
        categoryName: {
            type: String
        }

    }
});


const Product = mongoose.model("product", productSchema);


module.exports = { Product };
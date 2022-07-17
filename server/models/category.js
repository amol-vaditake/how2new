const mongoose = require('mongoose');

const categoryschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    catquestions: [{
        ref: 'Question',
        type: mongoose.Types.ObjectId
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

const CategoryModel = mongoose.model('Category', categoryschema);

module.exports = {
    CategoryModel
}
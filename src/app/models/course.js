const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);

const Schema = mongoose.Schema

const Course = new Schema({
    name : {type: String, },
    url: {type: String, },
    description: {type: String, },
    slug: {type: String, slug: "name"}
},{
    timestamps: true
})


module.exports = new mongoose.model('Course', Course)


const mongoose = require('moongoose')
async function connect(){
   await mongoose.connect('mongodb://127.0.0.1:27017/education_dev')
}
module.exports = { connect }
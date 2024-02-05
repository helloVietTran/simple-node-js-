const express = require('express')
const cors = require('cors')
const mongoose =  require('mongoose')
const path = require('path')
const bodyParser= require('body-parser')
const methodOverride = require('method-override')
const favicon = require('serve-favicon')

const route = require('./routes');

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors())// chia sẻ tài nguyên các domain khác nhau cho nhau
app.use(express.static(path.join(__dirname,'public')))
app.use(methodOverride('_method'))


mongoose.connect('mongodb://127.0.0.1:27017/education_dev');
route(app)

app.listen(3001)


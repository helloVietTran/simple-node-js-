const Course = require('../models/course')
class MeController{
    courses(req, res){
        Course.find({})
            .then((courses)=>  res.render('pages/me',{courses}))
            .catch(()=> console.log('error meController'))
       
    }
    destroy(req, res){
       Course.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('/home'))
        .catch(()=> console.log('err'))

    }
}
module.exports =  new MeController
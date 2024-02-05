const Courses= require('../models/course')
class SiteController{
    async home(req, res){
        await Courses.find({})
            .then((course)=>res.render('pages/home', {course}))
            .catch(()=> console.log('no'))
        
    }
    about(req, res){
        res.render('pages/about')
    }
}
module.exports = new SiteController
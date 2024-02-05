const Course = require('../models/course')
class CourseController{
    index(req, res){
        res.send('Course')
    }
    show(req, res){
        const slug = req.params.slug
        Course.findOne({slug})
            .then((course)=> res.render('pages/course-detail',{course}))
            .catch(()=> console.log('some error in course-detail '))
    }
    create(req, res){
       res.render('pages/course-create')
    }
    store(req, res){
        const data = req.body;
        const course = new Course(data)
        course.save()
            .then(()=> res.redirect('pages/course-create')) 
            .catch(()=> console.log('error in store'))
    } 
    edit(req, res){
        const id = req.params.id;
        Course.findById(id)
         .then((course) =>  res.render('pages/edit',{course}))
         .catch(()=> console.log('error in edit'))
    }
    update(req, res){
        Course.updateOne({_id: req.params.id}, req.body)// nhận 2 đối số, đối số 1 là obj chứa điều kiện so sánh
        // obj2 là obj cần thay thế
            .then(()=> res.send('updated'))
            .catch(()=> console.log('error in update'))
    }
}
module.exports = new CourseController
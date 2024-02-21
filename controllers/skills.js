var Skills = require('../models/skill')

function index(req,res){
    res.render('skills/index', {skill:Skills.getAll(), title: 'All SKills'})
}

function show(req, res){
    res.render('skills/show', {skill:Skills.getOne(req.params.id), title: 'All SKills'})
}

function getNewSkill(req,res){
    res.render('skills/new',{title:'All SKills'})
}

function create(req,res){
    Skills.create(req.body);
    res.redirect('/skills')

}

function deleteSkill(req,res){
    Skills.deleteOne(req.params.id);
    res.redirect('/skills')
}

module.exports = {
    index,
    show, 
    new:getNewSkill,
    create,
    delete:deleteSkill,
}
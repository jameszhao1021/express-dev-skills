var Skills = require('../models/skill')

function index(req,res){
    res.render('skills/index', {skill:Skills.getAll()})
}

function show(req, res){
    res.render('skills/show', {skill:Skills.getOne(req.params.id)})
}

module.exports = {index,show}
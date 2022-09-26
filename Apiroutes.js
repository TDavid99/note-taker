const router = require('express').Router();

const saveData = require('../saveData');

router.get('/notes', function (req, res){
    saveData
    .retriveNote()
    .then(notes => res.json(notes))
})
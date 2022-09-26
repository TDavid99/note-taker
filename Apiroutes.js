const router = require("express").Router();
const saveData = require("../db/saveData");

//get route
router.get('/notes', (req, res) => {
    saveData
        .getNotes()
        .then((notes => { 
            return res.json(notes);
})
    .catch((err) => {
        res.status(500).json(err);
    })
    });
//post routes
router.post("/notes", (req, res) => {
    saveData
    .addNotes(req.body)
    .then((note) => {
        res.json(note);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
const router = require("express").Router();
const saveData = require("../db/SaveData");

// const notes = require("../db/db.json");

//get route
router.get("/notes", (req, res) => {
    saveData
    .grabNotes()
    .then((notes) => { 
            console.log (notes)
            return res.json(notes);
})
    .catch((err) => {
        res.status(500).json(err);
    });
    });
//post routes
router.post("/notes", (req, res) => {
    saveData
    .addNote(req.body)
    .then((note) => {
        res.json(note);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

// bonus Delete button 
router.delete("/notes/:id", function (req, res){
    saveData
    .deleteNote(req.params.id)
    .then(() => res.json ({ok: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
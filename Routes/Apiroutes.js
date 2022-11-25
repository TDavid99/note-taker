const router = require("express").Router();
const saveData = require("../db/SaveData");

// const notes = require("../db/db.json");

//get route
router.get("/notes", (req, res) => {
    saveData
    .getNotes()
    .then((notes) => { 
            return res.json(notes);
})
    .catch((err) => {
        res.status(500).json(err);
    });
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

// bonus Delete button 


//       router.delete("/api/notes/:id", (req, res) => {
//         deletesNote(req.params.id, notes);
//         res.json(true);
//       });
    

module.exports = router;
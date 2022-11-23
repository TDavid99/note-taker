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
    .NewNotes(req.body)
    .then((note) => {
        res.json(note);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

// bonus Delete button 

function deletesNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
      let notes = notesArray[i];
  
      if (notes.id == id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify(notesArray, null, 2)
        );
        break;
      }}}
      router.delete("/api/notes/:id", (req, res) => {
        deletesNote(req.params.id, notes);
        res.json(true);
      });
    

module.exports = router;
const path = require("path");
const router = require("express").Router();
//first router
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//return to home page
router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports =router;

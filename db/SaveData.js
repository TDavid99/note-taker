const fs = require("fs");
const util = require("util");
const uuid = require("../helpers/uuid")

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//read write and get notes and add notes
class Save {
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    
    read() {
        return readFileAsync("db/db.json", "utf-8");
    }

getNotes() {
    return this.read().then((notes) => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (error) {
            parsedNotes = [];
        }
        return parsedNotes;

        });
}
addNotes(note) {
    const { title, text } = note;
    const newNote = { 
        title,
        text,
        id:uuid(),

    };
    return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);


// deleteNotes(note) {
//     const { title, text } = note;
//     const newNote = { 
//         title,
//         text,
//         id:uuid()

    }
}

module.exports = new Save();
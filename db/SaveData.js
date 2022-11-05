const fs = require("fs");
const util = require("util");
const uuidv4 = require("uuidv4")

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//read write and get notes and add notes
class Save {
    write(note) {
        return writeFile("db/db.json", JSON.stringify(note));
    }
    
    read() {
        return readFile("db/db.json", "utf-8");
    }

getNotes() {
    return this.read().then(notes => {
        console.log(notes)
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (error) {
            parsedNotes = [];
        }
        return parsedNotes;

        });
}

addNote(note) {
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
}
}

module.exports = new Save();
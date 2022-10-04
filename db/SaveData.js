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
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (error) {
            parsedNotes = [];
        }
        return 

        });
}

aadNotes(note) {
    const { title, text } = note;
    if (!title || !text) {
        throw new error("please type title ans text");
    }
    const newNote = {
        title,
        text,
        id:uuidv4()

    };
    return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);
}
};

module.exports = new Save();
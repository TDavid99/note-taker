const fs = require("fs");
const util = require("util");
const uuid = require("../Helper/uuid");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//read write and get notes and add notes
const Save {
    read() {
        return readFile("db/db.json","utf-8");
    }
    write(note); {
       return writeFileAsync("db/db.json", JSON.stringify(note));
    }
getNotes() {
    return this.read().then((notes) => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
         } catch (error) {
            parsedNotes=[];
         
    });
}

aadNotes(note) {
    const {title, text } = note;
    if(!title || !text) {
        throw new error("please type title ans text");
    }
    const newNote = {
        title,
        text,
        id:uuid()

    };
    return this.getNotes()
    .then(notes => [...notes, newNote])
    .then(updatedNotes => this.write(updatedNotes))
    .then(() => newNote);
}
};

module.exports = new Save();
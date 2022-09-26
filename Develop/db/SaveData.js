const fs = require("fs");
const { getEnabledCategories } = require("trace_events");
const util = require("util");
const uuid = require("../Helper/uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//read write and get notes and add notes
const saveData=> {
    read() {
        return readFileAsync("db/db.json","utf-8");
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
         }
    })
}
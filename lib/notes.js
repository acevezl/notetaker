const fs = require("fs");
const path = require("path");

function filterByQuery (query, notesArray) {
    let filteredResults = notesArray;
    if(query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    return filteredResults;
}

function validateNote (note) {
    if (!note.title || note.title === '' || typeof note.title !== 'string') {
        return false;
    }
    return true;
}

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync (
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray},null,2)
    );

    return note;
}

module.exports = {
    filterByQuery,
    validateNote,
    createNewNote
}
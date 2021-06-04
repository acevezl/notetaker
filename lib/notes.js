const fs = require("fs");
const path = require("path");

function filterByQuery (query, notesArray) {
    let filteredResults = notesArray;
    if(query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    return filteredResults;
}

module.exports = {
    filterByQuery
}
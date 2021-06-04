const { filterByQuery, validateNote, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

const router = require('express').Router();

// Gets all notes - no filter
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// Saves note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(req.body);
    if (!validateNote(req.body)) {
        res.status(400).send('The note is missing a title');
    } else {
        let note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// Get note by ID
router.get('/notes/:id', (req, res) => {
    let results = findByID(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;
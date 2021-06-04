const { filterByQuery } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

const router = require('express').Router();

// Gets all notes - no filter
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(notes);
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
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
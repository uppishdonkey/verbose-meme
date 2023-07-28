const router = require('express').Router()
const UUID = require('../helpers/uuid')
const { readFromFile, readAndAppend, readAndRemove } = require("../helpers.fsUtils");

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)))
})

router.post("/notes", (req, res) => {
    if (req.body.title && req.body.text) {
        let newNote = { title: req.body.title, text: req.body.text, id: UUID() };
        readAndAppend(newNote, "./db/db.json")
        res.json("Success!")
    }
    else res.json("Error!")
})  

router.delete("/notes/:id", (req, res) => {
    readAndRemove(req.params.id, "./db/db.json")
    res.json("Success!")
})

module.exports = router;
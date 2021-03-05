const express = require('express')
const router = new express.Router()
const Note = require('../models/note')

router.post('/notes', async (req, res) => {
    const note = new Note(req.body)

    try {
        await note.save()
        res.status(201).send(note)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find({})
        res.send(notes)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router

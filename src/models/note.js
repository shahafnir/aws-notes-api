const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    },
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note

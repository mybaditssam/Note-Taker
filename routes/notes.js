const notes = require('express').Router();
const {v4: uuidv4} = require('uuid');
const {
    readFromFile,
    writeToFile,
    readAndAppend,
} = require('../helpers/fsUtils');

notes.get('/',(req,res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notes.delete('/:note_id', (req,res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notes.json').then((data)=>JSON.parse(data))
    .then((json)=>{
        const result = json.filter((note)=> note.note_id !== noteId);
        writeToFile('./db/notes.json', result);
        res.json(`${noteId} has been deleted! 🗑️`)
    }).catch((error) => {
        console.log(error)
        res.status(500).json({error: 'Failted to delete!'})
    })
});

notes.post('/', (req, res) => {
    console.log(req.body);
    const { text, title } = req.body;
  
    if (req.body) {
      const newNote = {
        text,
        title,
        note_id: uuidv4(),
      };
      readAndAppend(newNote, './db/notes.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });

module.exports = notes;
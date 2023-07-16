const express = require('express');
const path = require('path')
const api = require('./routes/index.js')
const notesRouter = require('./routes/notes')


const app = express();

const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',api);
app.use('/api/notes',notesRouter)

app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.join(_dirname, '/public/index.html'))
});

app.get('/notes',(req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'/public/404.html'))
});

app.listen (PORT, ()=> {
    console.log('App Listening to local host')
});

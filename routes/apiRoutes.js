var notesData = require('../db/db.json')
const fs = require('fs')

const apiRoute = function (app){
    app.get('/api/notes',function (req,res){
        for(let i=0;i<notesData.length;i++){
            notesData[i].id = i
        }
        return res.json(notesData)
    })

    app.post('/api/notes',(req,res)=>{
        let incomingData = req.body
        notesData.push(incomingData)
        fs.writeFile('./db/db.json',JSON.stringify(notesData),function(err){
            err ? console.log(err) : console.log('Were sending over that data. Hang tight...')
        })
        res.send('Thanks for adding a note')
    })

    app.delete('/api/notes/:id',(req,res)=>{
        let selectedNote = req.params.id
        console.log(selectedNote)
        notesData.splice(selectedNote,1)
        fs.writeFile('./db/db.json',JSON.stringify(notesData),function(err){
            err ? console.log(err) : console.log('Were sending over that data. Hang tight...')
        })
        res.send('Item Successfully deleted')
    })
}

module.exports = apiRoute
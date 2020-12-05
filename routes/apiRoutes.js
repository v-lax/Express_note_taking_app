var notesData = require('../db/db.json')
const fs = require('fs')

const apiRoute = function (app){
    app.get('/api/notes',function (req,res){
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

    app.delete('api/notes/:id',(req,res)=>{

    })
}

module.exports = apiRoute
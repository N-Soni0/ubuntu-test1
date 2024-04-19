import express from 'express';
const app = express()
const port = 3000
import users from  './db.json' assert { type: 'json'};


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/users', async(req, res) => {
    
    res.json(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
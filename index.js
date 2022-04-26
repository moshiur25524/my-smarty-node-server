const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

// MiddleWare

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('My first personal funny server is working')
})

const users = [
    { id: 1, name: 'Moshiur Rahman', email: 'moshi@gmail.com', number: '015643165666' },
    { id: 2, name: 'hafizur Rahman', email: 'hafiz@gmail.com', number: '0156463646646' },
    { id: 3, name: 'Nahid Shikder', email: 'nahid@gmail.com', number: '015643165666' },
    { id: 4, name: 'Osman Goni', email: 'osman@gmail.com', number: '015643165666' },
    { id: 5, name: 'Salehin Chowdury', email: 'salehin@gmail.com', number: '015643165666' }
]

app.get('/users', (req, res) => {

    // filter by search query perameter

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening the port', port);
})
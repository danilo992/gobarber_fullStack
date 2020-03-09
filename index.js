const express = require('express');

const app = express();

app.use(express.json());

const users = ['car', 'file', 'package'];

app.get('/users', (req, res) => {
    return res.json(users);
})

app.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

app.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
})

app.put('/users/:index', (req ,res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

app.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.json(users);
})
app.listen(3000);
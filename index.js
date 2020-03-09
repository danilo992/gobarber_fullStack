const express = require('express');

const app = express();

app.use(express.json());

const users = ['car', 'file', 'package'];

app.use((req, res, next) => {
    console.time('Request');
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();
    console.timeEnd('Request');
})

function checkUsersExit(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json( { error: 'User name is required' });
    }
    return next();
}

function checkUsersInArray(req, res, next) {
    if(!users[req.params.index]) {
        return res.status(400).json( { error: 'User does not exits'})
    }
    return next();
}

app.get('/users', (req, res) => {
    return res.json(users);
})

app.get('/users/:index', checkUsersInArray, (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

app.post('/users', checkUsersExit ,(req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
})

app.put('/users/:index', checkUsersExit, checkUsersInArray, (req ,res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

app.delete('/users/:index', checkUsersInArray, (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.json(users);
})
app.listen(3000);
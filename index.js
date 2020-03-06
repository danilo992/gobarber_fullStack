const express = require('express');

const app = express();

app.use(express.json());

const users = ['car', 'file', 'package'];

app.get('/users', (req, res) => {
    return res.json(users);
})

app.listen(3000);
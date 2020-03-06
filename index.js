const express = require('express');

const app = express();

app.get('/teste', (req, res) => {

    const name = req.query.name;

    return res.json({
         message: `Hello ${name}`,
         contat: '11-000-0000'
         });
})

/*
app.get('/users/:id', (req, res) => {

    const { id } = req.params;

    return res.json({
         message: `user ${id}`,
         contat: '11-000-0000'
         });
})

app.get('/user/:id', (req, res) => {

    const { id } = req.params;

    return res.json({
         message: `user ${id}`,
         contat: '11-000-0000'
         });
})
*/
const users = ['Di', 'Dolla', 'Mony']

app.get('/users/:index', (req, res) => {

    const { index } = req.params;

    return res.json(
         users[index]
         );
})

app.listen(3000);
const express = require('express');

const app = express();

app.get('/teste', (req, res) => {
    return res.json({
         message: 'Hello Word',
         contat: '11-000-0000'
         });
})

app.listen(3000);
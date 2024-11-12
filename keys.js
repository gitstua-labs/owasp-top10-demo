'use strict';

const port = 3000;
const express = require('express');
const keys = require('node-serialize');
const app = express();

app.use(express.text({type: 'text/plain'}))
app.post('/keys', function(req, res) {
    let parsedBody;
    try {
        parsedBody = JSON.parse(req.body);
    } catch (e) {
        return res.status(400).send('Invalid JSON');
    }
    const unserialized = keys.unserialize(parsedBody);
    res.end('keys are ' + Object.keys(unserialized));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
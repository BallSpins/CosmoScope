const express = require('express');
const path = require('path');
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'));
    // res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'app', 'assets')))

app.listen(3000, () => {
    console.log('Listening port 3000...')
})
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
app.use(express.static('public'));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.post('/api/notes', (req, res) => res.send('I have now created a POST route'));
app.delete('/api/notes', (req, res) => res.send('I have now created a DELETE route'));
app.put('/api/notes', (req, res) => res.send('I have now created a PUT route'));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
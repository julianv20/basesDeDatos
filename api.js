const express = require('express');

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://julianv21:J1000295153@cluster0.kqrpv.mongodb.net/miapp?retryWrites=true&w=majority'
);

const user = require('./user.controller');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/users', user.list);
app.get('/users/:id', user.get);
app.post('/users', user.create);
app.put('/users/:id', user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app'));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.post('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

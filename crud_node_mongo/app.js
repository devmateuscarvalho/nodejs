const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoute = require('./routes/contactRoute');

mongoose.connect('mongodb://localhost/contactsApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

let db = mongoose.connection;

db.on('error', () => {
  console.log('houve um erro');
});

db.once('open', () => {
  console.log('Banco carregado!');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', contactRoute);

app.listen(port, () => console.log(`Rodando na porta ${port} :)`));

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mateuscarvalho:RB0k01HPB6l5tnkW@cluster0.ltqaz.mongodb.net/chat?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(client => {
    console.log('Connected to Database')
}).catch((err)=>console.error(err));


const server = app.listen(5000, () => {
  console.log(`Server Started on Port 5000`);
});

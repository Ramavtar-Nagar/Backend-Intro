require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!!!")
})

app.get('/twitter', (req, res) => {
    res.send("RamavtarNagar.com")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at my page First </h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Coffee and CODE</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Your application is listenung at PORT ${port}`);
})
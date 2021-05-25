const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');

// estou dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// rotas
app.get("/",(req, res) => {
    res.render("index");
});

app.post("/ticker",(req, res) => {
    var ativo = req.body.Ticker.toUpperCase();
        res.render("ticker", {
            ativo: ativo
        });
});

app.listen(8080, () => {
    console.log("app rodando!");
});
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

app.post("/ticker", (req, res) => {
    var ativo = req.body.Ticker.toUpperCase();
    var url = "https://api.hgbrasil.com/finance/stock_price?&fields=only_results&key=58db6e68&symbol=" + ativo;
    axios.get(url).then(resp => {
        var cotacao =  resp.data[ativo];
        if(cotacao.symbol != ativo){  
            res.redirect("/");
        }else{
            res.render("ticker", {
                cotacao: cotacao,
                ativo: ativo
            });
        };
    });
});


app.listen(8080, () => {
    console.log("app rodando!");
});
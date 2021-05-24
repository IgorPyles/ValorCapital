const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// estou dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// rotas
app.get("/",(req, res) => {
    res.render("index");
});


app.listen(8080, () => {
    console.log("app rodando!");
});
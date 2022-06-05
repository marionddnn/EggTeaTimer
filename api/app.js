const data = require ("../data.json");
const dataParsed = JSON.parse(JSON.stringify(data));
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const dataJson = Object.values(dataParsed);
const array = dataJson.find(item=>item);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(data);
});

app.get("/recipes/:type", (req, res) => {
    let dataJson = Object.values(dataParsed);
    let array = dataJson.find(item=>item);
    let result = array.find(item => item.title === req.params.type);
    res.send(result);
});

app.get("/recipe/:type/:id", (req, res)=> {
    let result = Object.values(array.find(item => item.title === req.params.type));
    let r = result[1].find(item => item.id === parseInt(req.params.id));
    res.send(r);
});

app.listen(8081, () => {
    console.log("App's running on port 8081");
});

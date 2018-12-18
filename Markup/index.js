let express = require ('express');
let bodyParser = require('body-parser');

let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src/index.html", charset="UTF-8");
});

app.post('/', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
});

app.listen(3000);
console.log('Server is done!');
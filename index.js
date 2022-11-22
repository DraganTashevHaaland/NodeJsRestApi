const express = require("events");
const app = express();

const fs = require("fs");

const { Parser } = require("json2csv");

var information = [
    {
        "Artist": "Artist1",
        "Birthday": "10-19-1990"
    },
    {
        "Artist": "Artist2",
        "Birthday": "11-08-1987"
    },
    {
        "Artist": "Artist3",
        "Birthday": "01-09-1976"
    }
]

fs.writeFile("information.csv", csv,function(err){
    if (err) {
        throw err;
    }
    console.log('File Saved');
});

app.get('/get-csv', function(req, res){

    const jsoncsvParser = new Parser();
    const csv = jsoncsvParser.parse(information);

    res.attachment("informations.csv");
    res.status(200).send(csv);
});

app.listen(3000, function(){
    console.log("running");
})
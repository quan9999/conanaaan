const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  var jsonParser = bodyParser.json()

const newfeed = [
    {
        "newfeeduser": "llsdfl",
        "hours": new Date,
        "caption": "sadafddfcvx",
        "comment": "dsfsfds"
    },
    {
        "newfeeduser": "llasddvl",
        "hours": new Date,
        "caption": "acxcvsadafddfcvx",
        "comment": "dsvcxfsfds"
    },
    {
        "newfeeduser": "llacxvvl",
        "hours": new Date,
        "caption": "sadxcvafddfcvx",
        "comment": "dsf xcvsfds"
    },
    {
        "newfeeduser": "lll",
        "hours": new Date,
        "caption": "saddzfsafddfcvx",
        "comment": "dsdsdffsfds"
    },
    {
        "newfeeduser": "lll",
        "hours": new Date,
        "caption": "s dsvsfadafddfcvx",
        "comment": "sdfdsfsfds"
    }
];


app.get('/', (req, res)=>{
    res.json({
        "stories": [
            {"name":"la"},
            {"name":"phong"},
            {"name": "ten"},
            {"name": "hu"}
        ],
        "meetingroom": [
             {"id":1},
             {"id":2},
             {"id":3},
             {"id":4},
             {"id":5},
             {"id":6},
             {"id":7},
             {"id":8},
             {"id":9}
            
        ],
        "newfeed": newfeed
    })
});

app.get('/messenge', (req, res) => {
    res.json({
        "name":"name"
    })
});


app.post('/post', jsonParser, (req, res)=>{
    console.log(req.body);
     
    newfeed.unshift({
        "caption": req.body
    })
    res.redirect('http://localhost:3000/');
});


app.get('/messengeisonline', (req, res) => {
    res.json({
        "name": [
            "acsc",
            "sjnka",
            "aajknkan",
            "nkjanf",
            "jankjnfa",
            "kndkns",
            "sdnKJ",
            " bfdnv",
            "slndvs",
            "nkjanf",
            "jankjnfa",
            "kndkns",
            "sdnKJ",
            " bfdnv",
            "slndvs"
        ],
        
    })
})

app.listen(8080);
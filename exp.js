const express = require('express')
const app = express();
const db = require('/db');

app.get('/' , function(req,res){
    res.send('welcom to jym')
})

app.listen(4000);
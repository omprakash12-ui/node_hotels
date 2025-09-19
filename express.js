const express = require('express')
const app = express();

app.get('/w3',(req,res)=>{
   var w3 = {
    name : "node js",
    sub : " express",
    tutorial : " express learn"

    
   }
    res.send(w3)
})

app.listen(5000);
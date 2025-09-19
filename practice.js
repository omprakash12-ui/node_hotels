const express = require('express');
const app = express();

app.get('/' , (req,res) => {
    const weatherData = {
        temperature : 25,
        conditions : 'good',
        is_rain : true

    }
})

app.listen(4000 , () => {
    console.log('listening on port 4000')
})
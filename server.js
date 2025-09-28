const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const person = require('./models/person');
const menuItem = require('./models/menuItem');

const personRoutes = require('./routs/personRoutes');  
app.use('/person', personRoutes); 

const menuItemRoutes = require('./routs/menuItemRoutes');  
app.use('/menu', menuItemRoutes);

app.get('/', function(req, res) {
    res.send('welcome to Hotel');
});



app.listen(PORT, () => {
    console.log('listening on port 3000');
});

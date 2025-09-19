const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person = require('./models/person');
const MenuItem = require('./models/menuItem');

const personRoutes = require('./routs/personRoutes');  
app.use('/person', personRoutes); 

const menuItemRoutes = require('./routs/menuItemRoutes');  
app.use('/menu', menuItemRoutes);

app.get('/', function(req, res) {
    res.send('welcome to Hotel');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});

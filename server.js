const express = require('express');

const app = express();

const methodOverride = require('method-override');

const routes = require('./routes');

app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use('/equipment', routes.equipment);

app.use('/users', routes.users);

app.use(express.static('public'));

app.listen(3003, () => {
    console.log('listening on port 3003');
})
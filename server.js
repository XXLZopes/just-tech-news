const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => { /*force: false doesn't have to exist but if it was set to true it would
                                                drop and re-create all the database tables on start up*/
    app.listen(PORT, () => console.log('Now listening'));
});
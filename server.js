const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// turn on connection to db and server
//force : true is like DROP TABLE IF EXISTS, use everytime you update the table associations
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
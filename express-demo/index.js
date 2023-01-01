const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

const public = path.join(__dirname, 'public');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(public);
    res.render('home')
})

app.get('/about', (req, res) => res.render('about'));

app.use('/q', (req, res, next) => {
    res.redirect('/about');
    next();
})

app.listen(3000, () => console.log('App is running at http://localhost:3000 ...'));
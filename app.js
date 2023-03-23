require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servidor contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Joaquin Nuñez',
        titulo: 'Curso de Node'
    });
  });

  app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Page Generic',
        titulo: 'Curso de Node'
    });
  });

  app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Page Elements',
        titulo: 'Curso de Node'
    });
  });


  app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/template/generic.html')
  });

  app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/template/elements.html')
  });

  app.get('*',  (req, res) => {
    res.send('404 | Page not found')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
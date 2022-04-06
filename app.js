const express = require("express");
app = express()
const { renderInit } = require('./controllers/initial')
const { voteCast, mostPopular } = require('./controllers/vote')
const { createMember, renderRegister } = require('./controllers/auth/register')
const { memberLogin, renderLogin } = require('./controllers/auth/login')
const { createNewCones } = require('./controllers/create')

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()

const session = require('cookie-session')
app.use(session({
    name: 'session',
    keys: [process.env.SESSION_SECRET]
}))

//Request handelers block

app.get('/', renderInit)

// Authentication's
app.get('/pages/register', renderRegister)

app.post('/register', createMember)

app.post('/login', memberLogin)

app.get('/pages/login', renderLogin)

app.post('/logout', (req, res) => {
    req.session = null
    res.redirect('/')
    console.log(req.session)
})



app.post('/vote', voteCast)

app.get('/pages/thanks', mostPopular)

app.get('/pages/about', (req, res) => {
    let member = req.session.member
    res.render('pages/about', { member })
})

app.post('/pages/create', createNewCones)

app.get('/pages/create', (req, res) => {
    let member = req.session.member
    res.render('pages/create', { member })
})


const port = 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
});
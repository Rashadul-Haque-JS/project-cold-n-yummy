const express = require("express");
app = express()
const { Images, Cones, Voters, Members } = require('./models/index')
const { renderInit } = require('./modules/initial')
const { voteCast, mostPopular } = require('./modules/vote')

const { createMember, renderRegister } = require('./modules/auth/register')
const { memberLogin, renderLogin } = require('./modules/auth/login')

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

app.get('/', renderInit())

// Authentication's
app.get('/pages/register', renderRegister())

app.post('/register', createMember())

app.post('/login', memberLogin())

app.get('/pages/login', renderLogin())

app.post('/logout', (req, res) => {
    req.session = null
    res.redirect('/')
    console.log(req.session)
})



app.post('/vote', voteCast())

app.get('/pages/thanks',mostPopular() )



app.get('/pages/about', (req, res) => {
    const member = req.session.member
    res.render('pages/about', { member: member })

})

const port = 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
});
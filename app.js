const express = require("express");
app = express()
const { Images, Cones, Voters, Members } = require('./models/index')
const { renderInit } = require('./modules/initial')
const { voteCast } = require('./modules/vote')

const { createMember } = require('./modules/auth/register')
const { memberLogin } = require('./modules/auth/login')

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
app.get('/pages/register', (req, res) => {
    res.render('pages/register')
})



app.post('/register', createMember())

app.post('/login', memberLogin())

app.get('/pages/login', (req, res) => {
    const errorMessage = req.session.errorMessage
    req.session.errorMessage = null
    res.render('pages/login', { errorMessage })
})

app.post('/logout', (req, res) => {
    req.session = null
    res.redirect('/')
    console.log(req.session)
})


app.post('/vote', voteCast())

app.get('/pages/thanks', async (req, res) => {
    const topCones = await Cones.max('vote_count');
    res.render('pages/thanks', { topCones })
    console.log(topCones)
})



app.get('/pages/welcome', (req, res) => {
    const member = req.session.member
    res.render('pages/welcome', { member: member })
})


app.get("/pages/thanks", async (req, res) => {
    const newVoter = await Voters.findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
    })
    res.render("pages/thanks", { thanks: newVoter });
    console.log(newVoter)
});

app.get('/pages/about', (req, res) => {
 
    res.render('pages/about')

})

const port = 5000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
});
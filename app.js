const express = require("express");
app = express()
const { Images, Cones, Voters, Members } = require('./models/index')
const { renderInit } = require('./modules/initial')
const { voteCast } = require('./modules/vote')

const { createMember } = require('./modules/auth')

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

app.get('/pages/register', (req, res) => {
    res.render('pages/register')
})

app.get('/', (req, res) => {
    res.render('/')
})

app.post('/register', createMember())

app.get('/partials/welcome', (req,res) => {
    res.render('partials/welcome', { member: req.session })
    res.redirect('/')
  })

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const member = await Members.authenticate(email, password)
        req.session.member = {
            email: member.email,
            id: member.id
        }
        res.redirect('partials/welcome')
        console.log(member.email)
       
        
    } catch (error) {
        req.session.errorMessage = error.message
        res.redirect('pages/login')
    }
})

app.get('/pages/login', (req, res) => {
    const errorMessage = req.session.errorMessage
    req.session.errorMessage = null
    res.render('pages/login', { errorMessage })
})

app.post('/logout', (req,res) => {
    req.session = null
    res.redirect('/')
    console.log(req.session)
  })


app.post('/vote', voteCast())




   
        
      
  









const port = 5000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
});
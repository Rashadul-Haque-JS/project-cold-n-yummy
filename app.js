const express = require("express");
app = express()
const {Images} = require('./models/index')

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

require('dotenv').config()
// const session = require('cookie-session')
// app.use( session({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET]
//   }))

app.get('/', (req, res) => {
    res.redirect('pages/home')
})

app.get('/pages/home', async (req, res) => {
    const {imagesName} = await Images.findOne()
    console.log(imagesName)
    res.render('pages/home',{data:imagesName})
})

app.post('/register', (req, res) => {
    
    res.render('pages/register')
    console.log(req.body.name)
})














const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
  });
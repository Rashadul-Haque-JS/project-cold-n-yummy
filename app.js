const express = require("express");
app = express()
const {Images, Cones} = require('./models/index')

app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

require('dotenv').config()

// const session = require('cookie-session')
// app.use( session({
//     name: 'session',
//     keys: [process.env.SESSION_SECRET]
//   }))



app.get('/', async (req, res) => {
    const allImages = await Images.findAll()
    const items = await Cones.findAll()
    res.render('pages/home',{allImages,items})
})

// app.post('/register', (req, res) => {
    
//     res.render('pages/register')
//     console.log(req.body.name)
// })














const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT: ${port}`);
  });
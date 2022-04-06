

const { Images, Cones} = require('../models/index')

//Initial rendering
async function renderInit (req, res){
    const allImages = await Images.findAll()
    const items = await Cones.findAll()
    const member = req.session.member
    res.render('pages/home', { allImages, items, member })
    
}

    module.exports = { renderInit}
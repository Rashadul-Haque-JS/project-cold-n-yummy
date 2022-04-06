

const { Images, Cones} = require('../models/index')

//Initial rendering
const renderInit = () => async (req, res) => {
    const allImages = await Images.findAll()
    const items = await Cones.findAll()
    const member = req.session.member
    console.log(member)
    res.render('pages/home', { allImages, items, member })
    
}

    module.exports = { renderInit}
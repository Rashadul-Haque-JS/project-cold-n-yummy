

const { Images, Cones, Voters, Members } = require('../models/index')

//Initial rendering
const renderInit = () => async (req, res) => {
    const allImages = await Images.findAll()
    const items = await Cones.findAll()

    res.render('pages/home', { allImages, items })
}

    module.exports = { renderInit}
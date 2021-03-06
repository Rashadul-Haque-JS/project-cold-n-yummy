
const { Cones } = require('../models/index')
const { matched, succesfull } = require('../controllers/alerts')


async  function createNewCones (req, res){
    const { new_cone_name } = req.body
    const array = await Cones.findAll({ attributes: ['name'], raw: true }) 

    const isName = array.some((o) => o.name.toLowerCase() == new_cone_name)

    if (isName == false) {
        await Cones.create({
            name: new_cone_name,
            vote_count: 0
        })

        res.send(succesfull)

    } else {
        res.send(matched)
    }


}



module.exports = { createNewCones }  
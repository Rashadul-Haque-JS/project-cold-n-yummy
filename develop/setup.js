
const { Cones, Voters, Members, Images } = require("../models/index");


async function modelsSetup(){
    await Cones.sync({ force: true })
    await Voters.sync({force:true})
    await Members.sync({force:true})
    await Images.sync({force:true})

    console.log('Models is set!')
}

modelsSetup()
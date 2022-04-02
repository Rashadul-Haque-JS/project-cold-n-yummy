
const { Members, Voters, Cones, Images } = require('../models/index')
const { flavours, imageList } = require('../modules/flavours')


function createCones() {
    const names = flavours().forEach(async (name) => {
        await Cones.create({
            name: name,
            vote:0
        })
        
    })
    return names
}



function createImages() {
    const images = imageList.forEach(async (i) => {

        await Images.create({
            image_name: `/images/${i}`
        })
    })
    return images
}


createCones()
createImages()

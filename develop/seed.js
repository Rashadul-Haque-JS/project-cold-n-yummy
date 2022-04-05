
const { Members, Voters, Cones, Images } = require('../models/index')
const { flavours, imageList } = require('../modules/flavours')


function createCones() {
    const names = flavours().forEach(async (name) => {
        await Cones.create({
            name: name,
            vote_count:0
        })
        
    })
    return names
}



function createImages() {
    const images = imageList.forEach(async (image,index) => {

        await Images.create({
            image_name: image,
            coneId: index + 1
        })
    })
    return images
}


createCones()
createImages()

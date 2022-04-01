
const imageList = ['amul.jpg', 'crunchy.png', 'kulfi.png', 'optimus.png', 'pinky.jpg', 'seasalt.png', 'tricon.png', 'velvet.png','sundew.png','lovello.png']


function flavours() {
    const name = [];
    imageList.forEach(i => {
        const index = i.split('.')[0]
        name.push(index)
    })
    return name
}



module.exports = { imageList, flavours }
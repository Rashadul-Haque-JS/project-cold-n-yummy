
const imageList = ['lovello.png', 'cornetto.png', 'orbizz.png', 'optimus.png', 'pinky.png', 'kulfi.png', 'tricon.png', 'valvet.png', 'mallow.png', 'prillon.png']


function flavours() {
    const name = [];
    imageList.forEach(i => {
        const index = i.split('.')[0]
        name.push(index)
    })
    return name
}



module.exports = { imageList, flavours }
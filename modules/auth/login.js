
const { Members } = require('../../models/index')
// const { Images, Cones, Voters, Members } = require('../../models/index')

// let allImages;
// let items;

// const getData = async () => {
//     allImages = await Images.findAll()
//     items = await Cones.findAll()


// }

// getData()
    

const memberLogin = ()=>async (req, res) => {
    try {
        const { email, password } = req.body
        const member = await Members.authenticate(email, password)
        req.session.member = {
            email: member.email,
            id: member.id,
            raw:true
        }
//Initial rendering
    res.redirect('pages/welcome')
       
        
    } catch (error) {
        req.session.errorMessage = error.message
        res.redirect('pages/login')
    }
}



module.exports ={memberLogin}
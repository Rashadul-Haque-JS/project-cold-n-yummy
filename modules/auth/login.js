
const { Members } = require('../../models/index')

const memberLogin = ()=>async (req, res) => {
    try {
        const { email, password } = req.body
        const member = await Members.authenticate(email, password)
        req.session.member = {
            email: member.email,
            id: member.id
        }
        res.redirect('/partials/nav')
        console.log(member.email)
       
        
    } catch (error) {
        req.session.errorMessage = error.message
        res.redirect('pages/login')
    }
}



module.exports ={memberLogin}
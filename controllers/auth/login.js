
const { Members } = require('../../models/index')

    
async function memberLogin (req, res){
    try {
        const { email, password } = req.body
        const member = await Members.authenticate(email, password)
        const memberTolog = await Members.findOne({where:{email}})
        req.session.member = {
            name:memberTolog.name,
            email: member.email,
            id: member.id,
            raw:true
        }

    res.redirect('/')
       
        
    } catch (error) {
        req.session.errorMessage = error.message
        res.redirect('pages/login')
    }
}

 function renderLogin(req, res){
    const value = req.session.member
    if (value == null) {
        const errorMessage = req.session.errorMessage
        req.session.errorMessage = null
        res.render('pages/login', { errorMessage })
    } else {
        res.redirect('/')
    }
    
}


module.exports = { memberLogin, renderLogin }
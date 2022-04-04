
const { Members } = require('../../models/index')
const { alreadyRegistered, unmacthed } = require('../alerts')

//check member's existence
const registered = async (email) => {
    const registered = await Members.findOne({ where: { email } });
    return registered ? false : true
}

//check password match
const passwordControl = (password, confirm) => {
    return password == confirm ? true : false
}

// Create new member
const createMember = () => async (req, res) => {
    const { name, email, password, confirm } = req.body
    const valid = passwordControl(password, confirm)
    const regiCheck = await registered(email)
    if (!regiCheck) {
        res.send(alreadyRegistered);
    } else if (!valid) {
        // res.render('pages/register', { message: 'Password not matched!' })
        res.send(unmacthed);
    } else {
        const member = await Members.create({
            name,
            email,
            password_hash: password
        })
            req.session.member = {
            membername: member.membername,
            id: member.id
        }
    }

}

const renderRegister = () => (req, res) => {
    const isSession = req.session.member
    if (isSession == null) {
        res.render('pages/register')
    }
    res.redirect('/')
    console.log('Here is the '+ isSession)
}

module.exports = { createMember, renderRegister }
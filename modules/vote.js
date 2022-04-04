
const { Cones, Voters, Members } = require('../models/index')
const {alreadyVoted} = require('./alerts')


// Dubble voting check
const voted = async (email) => {
    const isVoted = await Voters.findOne({ where: { email } });
    return !isVoted ? true : false
}

//Member voting check
const memberVote = async (email) => {
    if (email) {
        const isMember = await Members.findOne({ where: { email } })
        if (isMember) {
            return isMember
        } else {
            return ''
        }
        
    } else {
        return ''
    }

}

//Vote casting

const voteCast = () => async (req, res) => {
    const { email, number } = req.body
    const voterCheck = await voted(email)
    const mId = await memberVote(email)
    if (voterCheck) {
        await Voters.create({
            email: email,
            coneId: number,
            memberId: mId.id

        })

        const selected = await Cones.findOne({ where: { id: number } })
        selected.increment('vote_count',{by:1})
        console.log(selected)

        res.redirect('pages/thanks')
    } else {
        res.send(alreadyVoted);
    }

}

module.exports = { voteCast }

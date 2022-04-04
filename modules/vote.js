
const Sequelize = require('sequelize')
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


// Get most popular cones
const mostPopular = ()=>async (req, res) => {
    const member = req.session.member
    const conesList = await Cones.findAll({
        order: [[Sequelize.col('vote_count'), 'DESC']],
        limit: 10,
        raw:true
    })
    const topCones = []
    conesList.forEach(c => {
        if (c.vote_count > 0) {
            topCones.push(c)
        }
    })

    if (topCones.length > 0) {
    res.render('pages/thanks', { topCones, member: member })
    console.log(topCones)
    } else{
    console.log('No cones has got any vote yet!')
    }
    

    
}

module.exports = { voteCast, mostPopular }

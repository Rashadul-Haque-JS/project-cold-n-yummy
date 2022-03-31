const register = (req, res) => {
    res.status(200).send(`Your message is ${req.params.message}`)
}

const login = async(req, res) => {
    console.log(req.body)
}

module.exports = {register, login}
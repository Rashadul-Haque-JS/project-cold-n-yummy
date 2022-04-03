
const alreadyVoted = "<script>alert('Alrady voted!'); window.location.href = '/'; </script>"

const alreadyRegistered = "<script>alert('Already member, please login!'); window.location.href = 'pages/login'; </script>"

const unmacthed = "<script>alert('Password not match!'); window.location.href = 'pages/register'; </script>"


module.exports = {alreadyVoted, alreadyRegistered, unmacthed}
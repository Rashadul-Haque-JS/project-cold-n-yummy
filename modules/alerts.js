
const alreadyVoted = "<script>alert('Alrady voted!'); window.location.href = '/'; </script>"

const alreadyRegistered = "<script>alert('Already member, please login!'); window.location.href = 'pages/login'; </script>"

const unmacthed = "<script>alert('Password not match!'); window.location.href = 'pages/register'; </script>"

const succesfull = "<script>alert('Successful! Thank you'); window.location.href = '/'; </script>"
const matched = "<script>alert(' Sorry! Name is already on the list, find another one!'); window.location.href = './create'; </script>"


module.exports = {alreadyVoted, alreadyRegistered, unmacthed ,succesfull, matched}
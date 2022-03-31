
const { RegCustomers, UnRegCustomers, IceCreams, Images } = require('../models/index')


async function databaseSetup() {
    await RegCustomers.sync({ force: true });
    await UnRegCustomers.sync({ force: true });
    await IceCreams.sync();
    await Images.sync()

    console.log('SETUP IS DONE!')

}

databaseSetup()
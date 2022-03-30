
const { RegCustomers, UnRegCustomers, IceCreams } = require('../models/index')


async function databaseSetup() {
    await RegCustomers.sync({ force: true });
    await UnRegCustomers.sync({ force: true });
    await IceCreams.sync({ force: true });

    console.log('SETUP IS DONE!')

}

databaseSetup()
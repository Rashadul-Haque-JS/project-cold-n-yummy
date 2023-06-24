
const { Cones, Voters, Members, Images } = require("../models/index");

async function modelsSetup() {
    try {
      await Members.sync({ force: true });
      await Cones.sync({ force: true });
      await Voters.sync({ force: true });
      await Images.sync({ force: true });
  
      console.log('Models are set!');
    } catch (error) {
      console.error('Error setting up models:', error);
    }
  }
  
  modelsSetup();
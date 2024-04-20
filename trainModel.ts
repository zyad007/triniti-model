import fs from 'fs';
import trainIntent from './utils/trainIntent';

async function trainModel(manager: any) {
  // if (fs.existsSync('./model.nlp')) {
  //   manager.load('./model.nlp');
  //   return;
  // }
  const greetings = await trainIntent(manager, 'greetings', '../data/greetings.txt', '../answers/greetings.txt')
  const listRequirements = await trainIntent(manager, 'list.requirements', '../data/list.requirements.txt', '../answers/list.requirements.txt')
  const addRequirement = await trainIntent(manager, 'add.requirement', '../data/add.requirement.txt', '../answers/add.requirement.txt')
  const sendTeam = await trainIntent(manager, 'send.team', '../data/send.team.txt', '../answers/send.team.txt')
  const listVendors = await trainIntent(manager, 'list.vendors', '../data/list.vendors.txt', '../answers/list.vendors.txt')
  if (
    greetings &&
    listRequirements &&
    addRequirement &&
    sendTeam &&
    listVendors
  ) {
    await manager.train()
    await manager.save();
  }
};

export default trainModel
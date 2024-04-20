import fs, { write } from 'fs';
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
  const sourcingOptions = await trainIntent(manager, 'sourcing.options', '../data/sourcing.options.txt', '../answers/sourcing.options.txt')
  const sendMessage = await trainIntent(manager, 'send.message', '../data/send.message.txt', '../answers/send.message.txt')
  const writeThank = await trainIntent(manager, 'write.thank', '../data/write.thank.txt', '../answers/write.thank.txt')
  const sendThank = await trainIntent(manager, 'send.thank', '../data/send.thank.txt', '../answers/send.thank.txt')
  const strategy = await trainIntent(manager, 'strategy', '../data/strategy.txt', '../answers/strategy.txt')
  const proposeVendors = await trainIntent(manager, 'propose.vendors', '../data/propose.vendors.txt', '../answers/propose.vendors.txt')
  const chartTCO = await trainIntent(manager, 'chart.TCO', '../data/chart.TCO.txt', '../answers/chart.TCO.txt')
  const generateRFP = await trainIntent(manager, 'generate.rfp', '../data/generate.rfp.txt', '../answers/generate.rfp.txt')
  const portal = await trainIntent(manager, 'portal', '../data/portal.txt', '../answers/portal.txt')
  const compare = await trainIntent(manager, 'compare', '../data/compare.txt', '../answers/compare.txt')

  if (
    greetings &&
    listRequirements &&
    addRequirement &&
    sendTeam &&
    listVendors &&
    sourcingOptions &&
    sendMessage &&
    writeThank &&
    sendThank
    strategy && 
    proposeVendors && 
    chartTCO && 
    generateRFP &&
    portal && 
    compare

  ) {
    await manager.train()
    await manager.save();
  }
};

export default trainModel
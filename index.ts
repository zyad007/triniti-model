import { NlpManager } from 'node-nlp';
import trainModel from './trainModel';

const nlp = new NlpManager({ languages: ['en'] });

(async () => {
  await trainModel(nlp);
})();
const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

function madlibs(template) {
  template = template.replaceAll('VERB', () => randomVal(VERBS));
  template = template.replaceAll('ADJECTIVE', () => randomVal(ADJECTIVES));
  template = template.replaceAll('NOUN', () => randomVal(NOUNS));
  template = template.replaceAll('ADVERB', () => randomVal(ADVERBS));
  console.log(template);

  function randomVal(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

madlibs('The ADJECTIVE ADJECTIVE NOUN VERB over the ADJECTIVE NOUN.');
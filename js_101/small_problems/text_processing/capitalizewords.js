function wordCap(words) {
  let wordsArray = words.split(' ');
  return wordsArray.map(element => element = element[0].toUpperCase() + element.substring(1)).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
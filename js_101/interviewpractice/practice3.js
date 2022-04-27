function toWeirdCase(sentence) {
    // splits sentence into words
    let wordsList = sentence.split(' ');

    for (let i = 0; i < wordsList.length; i++) {
        // every second word
        if ((i + 1) % 2 === 0) {

            let letters = wordsList[i].split('');
            for (let j = 0; j < letters.length; j++) {
                if ((j + 1) % 4 === 0) {
                    letters[j] = letters[j].toUpperCase();
                }
            }
            wordsList[i] = letters.join('');
        }
    }
    return wordsList.join(' ');
}

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

console.log(
    toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
                'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
toWeirdCase('It is a long established fact that a reader will be distracted') ===
            'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
            'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
  
// The tests above should print "true".
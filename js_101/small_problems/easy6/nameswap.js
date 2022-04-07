function swapName(name) {
  let nameSplit = name.split(' ');
  return nameSplit.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
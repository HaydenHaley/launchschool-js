function greetings(nameArray, infoObject) {
  let name = nameArray.join(' ');
  let occupation = infoObject.title + " " + infoObject.occupation;
  return `Hey there, ${name}! I heard you were a ${occupation}?`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
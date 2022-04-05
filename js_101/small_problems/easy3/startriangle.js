function triangle(stars) {
  for (let index = 0; index <= stars; index++) {
    console.log(('*'.repeat(index).padStart(stars)));
  }
}

triangle(5);
triangle(9);
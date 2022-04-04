function isOdd(integer) {
  return !(integer % 2 === 0);
}

for (let index = 0; index < 100; index++) {
  if (!isOdd(index) && index !== 0) {
    console.log(index);
  }
}
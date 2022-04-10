function triangle(angle1, angle2, angle3) {
  // checks for invalid triangles
  let angleArray = [angle1, angle2, angle3];

  // any side is 0
  if (angleArray.some(angle => angle === 0)) return "invalid";

  // two shortest sides must be greater than longest side
  angleArray.sort((a, b) => a - b);
  if (angleArray[0] + angleArray[1] < angleArray[2]) return "invalid";
  
  if (angle1 === angle2 && angle1 === angle3) return "equilateral";

  if (angle1 === angle2 ||
    angle1 === angle3 ||
    angle2 === angle3)
    return "isosceles";

  return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
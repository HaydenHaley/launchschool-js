function triangle(angle1, angle2, angle3) {
  // checks for invalid triangles
  let angleArray = [angle1, angle2, angle3];

  // no side may be 0 or negative
  if (angleArray.some(angle => angle <= 0)) return "invalid";

  // angles must all add to 180
  if (angleArray.reduce((prev, cur) => prev + cur) !== 180) return "invalid";

  // if one side is 90, right triangle
  if (angleArray.some(angle => angle === 90)) return "right";

  // if one side is 90, right triangle
  if (angleArray.some(angle => angle > 90)) return "obtuse";

  return "acute";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
function dms(angle) {
  if (Number.isInteger(angle)) return angle + '˚' + '00\'00"';
  let unparsedMinutes = angle % 1;
  angle = Math.floor(angle);
  unparsedMinutes *= 60;
  let unparsedSeconds = unparsedMinutes % 1;
  let minutes = Math.floor(unparsedMinutes);
  let seconds = Math.round(unparsedSeconds * 60);
  return angle + '˚' + minutes + "'" + seconds + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
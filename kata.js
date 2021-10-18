const accum = (s) => {
  const arrS = s.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(arrS[i].toUpperCase());
    for (let j = 0; j < i; j++) {
      result[i] += arrS[i];
    }
  }
  return result.join('-');
};

console.log(accum("abcd"));
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

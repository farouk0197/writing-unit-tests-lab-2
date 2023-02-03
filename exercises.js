function octalToDecimal(num) {
  let total = 0;
  let count = 0
  for (let i = num.length-1; i >= 0; i--){
    total += Number(num[i]*(8**count))
    count++
  }
  return total
  //Write code here
}

function anagram(word,arr) {
  const result = [];
  for (let i =0; i < arr.length; i++){
    let arrword = arr[i].split("")
    let check = "";
    for (j = 0; j < arr[i].length; j++){
      if ( word.length !== arr[i].length) break;
      if (arrword.includes(word[j])){
        let find = arrword.indexOf(word[j]);
        arrword.splice(find,1)
        check += arr[i][j]
      }

    }
    if (check.length === word.length){
      result.push(arr[i])
    }
  }
  return result
  //Write code here
}

function triangle(a,b,c) {
  //Write code here
  if (a === 0 || b === 0 || c === 0 || a+b+c !== 180) return "invalid";
  if (a === 90 ||  b === 90 || c === 90 ) return "right";
  if (a > 90 ||  b > 90 || c > 90) return "obtuse";
  if (a < 90 ||  b < 90 || c < 90) return "acute";
}

function fridayThe13ths(year) {
  //Write code here
  let count = 0;
  // const date = new Date(year,1,13).getDay()
  // console.log(date)
  for (let i = 0; i <= 11; i++){
    if (new Date(year,i,13).getDay() == 5) count++
  }
  return count
}
console.log(fridayThe13ths(2015))
module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};

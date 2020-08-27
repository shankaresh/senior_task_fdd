var sen=" Hello world !  ";
var result = sen.split(" ").filter((item) => item != ""); // string to array with whitespace
var res = result[0].concat(" ",result[result.length-1]);  // concat first and last
console.log(res); // Hello !

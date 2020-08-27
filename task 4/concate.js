var sen=" Hello world !  ";
var result = sen.split(" ").filter((item) => item != "");
var res = result[0].concat(" ",result[result.length-1]);
console.log(res);
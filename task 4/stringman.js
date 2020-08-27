var sen = "this is an apple";
var strippedSen = "";
var midX;
var resultSen="";

for (var i = 0; i < sen.length; i++) { //removing space
    if(sen[i] != " ") {
        strippedSen += sen[i];
    }
}

if ((strippedSen.length)%2 != 0) { //odd length
    midX=((strippedSen.length)/2)-0.5; // example >>> (13/2)-0.5 >>> 6 (taking single element)
    resultSen+=strippedSen[midX];
    var x=midX-1;                      // x=5
    var y=midX+1;                      // y=7
} else { //even length
    midX=((strippedSen.length)/2)-1; // example >>> (l4/2)-1 >>> 6  (taking two elements)
    var x=midX;                      // x=6
    var y=midX+1;                    // y=7
}

while(x>=0){
    resultSen += strippedSen[y]; //first right element added
    resultSen += strippedSen[x]; //next left element added
    x--;
    y++;
}
console.log(resultSen); //ansaipspilhet

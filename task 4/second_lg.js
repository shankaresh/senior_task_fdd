var arr=[8,3,5,2,9,7,3,8,4,5,3,5,8,1,8,2,8,1,7,7,3,4];
var lg1=arr[0];
var lg2=arr[1];

for (var i=0 ; i < arr.length; i++) {
    if (arr[i]!=(lg1 || lg2)) {
        if (arr[i]>lg1) {
            lg2=lg1;
            lg1=arr[i];
        } else {
            if (arr[i]>lg2) {
                lg2=arr[i];
            }
        }
    }
}
console.log(lg2);
var arr=[8,3,5,2,9,7,3,8,4,5,3,5,8,1,8,2,8,1,7,7,3,4];
var lg1=arr[0]; //first largest number in array
var lg2=arr[1]; //second largest number in array

for (var i=0 ; i < arr.length; i++) {
    if (arr[i]!=(lg1 || lg2)) { //ignore repeated
        if (arr[i]>lg1) {       //checking for first largest element
            lg2=lg1;            //first to second largest
            lg1=arr[i];         //new largest to first
        } else {
            if (arr[i]>lg2) {   //checking for second largest while its not larger then first
                lg2=arr[i];     //new largest to second
            }
        }
    }
}
console.log(lg2); // 8

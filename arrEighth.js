var arr=[2,8,6,5,2,3,23,98];
var arr2=[7821,89,76,25,20,84,2358,987,60];

function arrEighth(array){
var arr = new Array(array.length);
for (i=0;i<=array.length;i++) {
arr[i]=array[array.length-i]

}
for (i=0;i<arr.length;i++) {
console.log(arr[i]);

}

}
console.log("array=[2,8,6,5,2,3,23,98]");
arrEighth(arr);
console.log("array=[7821,89,76,25,20,84,2358,987,60]");
arrEighth(arr2);


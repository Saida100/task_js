var arr=[2,8,6,5,2,3,23,98];
var arr2=[7821,89,76,25,20,84,2358,987];

function arrEighth(array){
var arr = new Array(array.length);
for (i=0;i<array.length;i++) {
if(i<array.length/2){
arr[i]=array[(array.length/2)+i]

}else{
arr[i]=array[i-(array.length/2)]

}

}
for (i=0;i<arr.length;i++) {
console.log(arr[i]);

}

}
console.log("array=[2,8,6,5,12,13,23,98]");
arrEighth(arr);
console.log("array=[7821,89,76,25,20,84,2358,987]");
arrEighth(arr2);


var arr=[2,8,6,5,2,3,23,98];
var arr2=[7821,89,76,25,20,84,2358,987,60];

function arrSeventh(array){
var count=0;

for (i=0;i<array.length;i++) {
if(array[i]%2==1){
count++;
}

}
console.log("count="+count);

}
console.log("array=[2,8,6,5,2,3,23,98]");
arrSeventh(arr);
console.log("array=[7821,89,76,25,20,84,2358,987,60]");
arrSeventh(arr2);


var arr=[2,8,6,5,2,3,23,98];
var arr2=[7821,89,76,25,20,84,2358,987,60];

function arrFifth(array){
var summa=0;

for (i=0;i<array.length;i++) {
if(i%2==1){
summa+=array[i];
}

}
console.log("summa="+summa);

}
console.log("array=[2,8,6,5,2,3,23,98]");
arrFifth(arr);
console.log("array=[7821,89,76,25,20,84,2358,987,60]");
arrFifth(arr2);


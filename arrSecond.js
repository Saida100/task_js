var arr=[21,89,76,5,20,34,235,987];
var arr2=[821,89,76,25,20,84,2358,987,60];

function loopSeventh(array){
var maximum=array[0];

for (i=1;i<array.length;i++) {
if(array[i]>maximum){
maximum=array[i];
}

}
console.log("maximum="+maximum);

}
console.log("array=[21,89,76,5,20,34,235,987]");
loopSeventh(arr);
console.log("array=[821,89,76,25,20,84,2358,987,60]");
loopSeventh(arr2);


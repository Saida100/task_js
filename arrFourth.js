var arr=[21,89,76,5,20,340,235,987,2,123,556,43];
var arr2=[821,89,76,25,20,844,2358,987,60];

function loopTenth(array){
var maximum=array[0];
var index=0;

for (i=1;i<array.length;i++) {
if(array[i]>maximum){
maximum=array[i];
index=i;
}

}
console.log("indexMaximum="+index);

}
console.log("array=[21,89,76,5,20,340,235,987,2,123,556,43]");
loopTenth(arr);
console.log("array=[821,89,76,25,20,844,2358,987,60]");
loopTenth(arr2);


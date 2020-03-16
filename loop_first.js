
function loopFirst(){
var summa=0;
var count=0;
for (i=2;i<100;i++) {
if(i%2==0){
summa=summa+i;
count++;
}
}
console.log("summa="+summa);
console.log("count="+count);

}
loopFirst();
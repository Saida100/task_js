
function loopSecond(a){
var count=0;
var k=false;
for (i=2;i<a;i++) {
if(a%i==0){
count++;
if(count>=1){
k=true;
break;
}
}

}
if(k){
	console.log("a="+a+" ededi murekkeb ededdir");
}else {
		console.log("a="+a+" ededi sade ededdir");

}

}
loopSecond(17);
loopSecond(27);
loopSecond(20);
loopSecond(179);
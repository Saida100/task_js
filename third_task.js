function summaPositivNumbers(a,b,c){
let s=0;
s=checkPositivNumber(a,s);
s=checkPositivNumber(b,s);
s=checkPositivNumber(c,s)
	console.log(s);
}

function checkPositivNumber(a,s){
if(a>0) {s+=a ;}
return s;
}
summaPositivNumbers(5,4,-3);

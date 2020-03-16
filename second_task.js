function check(x, y){
if(x>0 && y>0) {
console.log("first");
}
	else if(x<0 && y>0){
	 console.log("second");
	}else if(x<0 && y<0){
		 console.log("third");

} else {
	 console.log("fourth");

}
}
console.log("7,-19");
check(7,-19);
console.log("7,19");
check(7,19);
console.log("-7,-19");
check(-7,-19);
console.log("-7,19");
check(-7,19);
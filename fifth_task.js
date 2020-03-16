function defineMark(a){
	
	switch(true){
		case a>=0 && a<=19:
		console.log("F");
		break;
		case (a>=20) && (a<=39):
		console.log("E");
		break;
		case a>=40 && a<=59:
		console.log("D");
		break;
		case (a>=60) && (a<=74):
		console.log("C");
		break;
		case a>=75 && a<=89:
		console.log("B");
		break;
		case (a>=90) && (a<=100):
		console.log("A");
		break;
		default:
				console.log("Invalid number");
				break;

	}

}
defineMark(50);
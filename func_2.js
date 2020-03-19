
function convertToWord(number){
soz=number;	
let len=number.length;
let word="";
for (i=0;i<number.length;i++) {


if(number.substr(i,number.length).length==3){
word1=change2(number.charAt(i));

word=word1+" yuz "
word1=change(number.charAt(i));

}else if(number.substr(i,number.length).length==2){
word2=number.charAt(i)+" onluq";
word3=change(word2);

word=word+word3


}else{
	word+=change2(number.charAt(i));
	console.log(number+" sozle="+word);
}

}

}
function change(word){
	switch(word){
		case "0 onluq":
		word="";
		break;
		case "1 onluq":
		word="on ";
		break;
		case "2 onluq":
		word="iyirmi ";
		break;
		case "3 onluq":
		word="otuz ";
		break;
		case "4 onluq":
		word="qirx ";
		break;
		case "5 onluq":
		word="elli ";
		break;
		case "6 onluq":
		word="altmish ";
		break;
		case "7 onluq":
		word="yetmish ";
		break;
		case "8 onluq":
		word="seksen ";
		break;
		case "9 onluq":
		word="doxsan ";
		break;
		default:
		word="";
		break;
	}
	return word;
}

function change2(word2){
	switch(word2){
		case "0":
		if(soz=="0"){
		word2="sifir ";

		}else{
		word2="";
		}
		break;
		case "1":
		word2="bir ";
		break;
		case "2":
		word2="iki ";
		break;
		case "3":
		word2="uc ";
		break;
		case "4":
		word2="dord ";
		break;
		case "5":
		word2="besh ";
		break;
		case "6":
		word2="alti ";
		break;
		case "7":
		word2="yeddi ";
		break;
		case "8":
		word2="sekkiz ";
		break;
		case "9":
		word2="doqquz ";
		break;
		default:
		word2="";
		break;
	}
	return word2;
}

convertToWord("563");
convertToWord("874");
convertToWord("96");
convertToWord("8");
convertToWord("240");
convertToWord("459");
convertToWord("78");
convertToWord("18");
convertToWord("0");
convertToWord("7");

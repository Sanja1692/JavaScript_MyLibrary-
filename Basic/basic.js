console.log("Hi my name is Sanja")
var age = "29";
console.log("I am " + age + " years old.")
var players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log("The most valuable player of the match is " + players[2] + ".")


//VAR _ LET _ CONST
var diference = 6; { //global
    console.log(diference);
}
console.log(diference); {
    var diference0 = 0; //defined in brakets but always global
    console.log(diference0);
}
console.log(diference0);

let diference1 = 1; {
    console.log(diference1);
}
console.log(diference1);

{
    let diference2 = 2;
    console.log(diference2);
}
//console.log(diference2);//it is defined in brakets and not accessible outside-trows an error
let diference3 = 3; {
    let diference3 = 33; //inside brakets changed value when console.log
    console.log(diference3);
}
console.log(diference3);

const diference4 = 4; { //not overwritteble but global
    console.log(diference4);
}
console.log(diference4);

//
let data = 3434;
console.log(typeof data); //check TYPE

//change TYPE of data
let data1 = 2323;
data1 = String(data1);
console.log(typeof data1);
console.log(data1);
//Conckatination of multiply strings
let conk1 = "First";
let conk2 = "Second";
stringConk = conk1 + " " + conk2;

//LENGTH
console.log(conk1.length);

//TO LOWER CASE - TO UPPER CASE
console.log(conk1.toLowerCase());
console.log(conk1.toUpperCase());
console.log(conk1); //ORIGINAL string u cant change  - they are immutable , but u can reasign a new value to the same variable

//INDEX of 
let indexNum = conk1.indexOf("F");
console.log(indexNum);

//Reasign a new value to the same variable
conk1 = conk1.toUpperCase();
console.log(conk1);
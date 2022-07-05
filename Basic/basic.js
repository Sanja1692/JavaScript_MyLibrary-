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
//Concatenation  of multiply strings
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

//ARAYS
let arrayNum = [4, 1, 7, 3, "hello", true];
console.table(arrayNum);
console.log(arrayNum[2]);
//MULTIDIMENTIONAL ARRAYS - array inside of an array
let multiArray = [
    [1, 2, 3, 4],
    [5, 6, 7],
    [8]
]
console.log(multiArray[1][1]); //first num what array, second what elem
console.log(multiArray[0][3]);
console.log(multiArray.length);
//SORT method - work alphabetically
let arrayLetters = ["a", "t", "b", "o", "y"];
console.log(arrayLetters.sort());
//SLICE method
console.log(arrayLetters.slice(0, 2)); //1.where-at what position, 2.  how many ellem to show

//PUSH method - add elem at the end of the array
arrayLetters.push("r", "c");
console.log(arrayLetters); //change the value of array - even if you use CONST too

//UNSHIFT method - add elem at the beginning of the array
arrayLetters.unshift("k", "l");
console.log(arrayLetters);

//POP method - remove elem at the end of the array
let lastElement = arrayLetters.pop(); //assighn to value
console.log(arrayLetters);
console.log(lastElement); //so that you can restore it latter

//SHIFT method - remove elem at the beggining of the array
let firstElement = arrayLetters.shift(); //assighn to value
console.log(arrayLetters);
console.log(firstElement); //so that you can restore it latter

//SPLICE method - add/delete in the middle of the array
arrayLetters.splice(1, 0, "g", "n"); //1.index - where, 2. how many elem to delete - 0 for nothing, 3. to add value - for more values just add more
console.log(arrayLetters);

//JOIN method 
const greeting = ["Hello", "my", "name", "is", "John"];
console.log(greeting.join(" "));
console.log(greeting.join(", "));



var subjects = ["English", "Chemistry", "Math", "Physics"];
console.log(subjects.join());
// English,Chemistry,Math,Physics
console.log(subjects.join(" and "));
// English and Chemistry and Math and Physics


var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
var sent = sentence.split("$");
//['Properties,', 'a', 'set', 'of', 'immutable', 'values,', 'are', 'passed', 'to', 'a', "component's", 'renderer', 'as', 'properties', 'in', 'its ', 'HTML', 'tag.', 'A', 'component', 'cannot', 'directly', 'modify', 'any', 'properties', 'passed', 'to', 'it,', 'but', 'can', 'be', 'passed', ' callback', 'functions', 'that', 'do', 'modify', 'values.', 'This', "mechanism's", 'promise', 'is', 'expressed', 'as', 'properties ', 'flow', 'down;', 'actions', 'flow', 'up']

document.write(sent.join(" "));
console.log(sent);

var senten = sentence.replaceAll("$", " ")
console.log(senten)
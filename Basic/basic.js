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

//EXERCISES BASIC
// 1.Create a internal Javascript program <script> that:
// Prints within the console "Hello from the Console" and where the browser displays "Hello from the Browser".  
// 2. Create an external Javascript program and link it to an HTML document.  It has to print the following message in the console "Hi my name is Martin". Once the HTML file is opened, it should display the message from the Javascript.

// 3. Extend the previous example (Basic exercise 2) by adding the following text to it "and I am 25 years old". This text should come from the script within the body tag in the HTML document. The age value should come from a variable.

// 4.Create an array called players. Add the following names as values to it: Martin, Thomas, Peter, Mathias and Niki. 

// Output only the third player in the console.  The text should be: "The most valuable player of the match is <third_player_name>".
console.log("Hi my name is Sanja")
var age = "29";
console.log("I am " + age + " years old.")
var players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log("The most valuable player of the match is " + players[2] + ".")

//EXERCISES INTERMEDIATE
// 1.Write a JavaScript program that will sort the following values alphabetically: Tesla, Audi, Renault, Volvo, Mazda, Fiat and Ferrari.
// (Use an array to contain these values)
// 2.Create a program where:

// 1) The first array contains the following values:
//  apple, banana, kiwi
// Using different methods, the output should be as follows:
// apple, banana, kiwi, orange
// apple, banana, kiwi
// (Each statement should be outputted on a separate line.)

// 2) The second array contains the following values:
// monkey, horse, dog
// Using different methods, the output should be as follows:
// dog, horse, monkey
// cat, dog, horse, monkey
// 3. Create a variable containing the following string:
// "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
// Create a program that will output each fruit on a separate line in the web browser:
// mango 
// cherries 
// kiwi 
// grapes
// pear 
// peach 
// orange 
// lemon
var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort()); //sort values alphabetically

var fruit = ['apple', 'banana', 'kiwi'];
fruit.splice(3, 0, 'orange'); // 3 - where, 0 - how many values to delete, string - what to add
console.log(fruit);
document.write(fruit);
document.write("<br/>");

// fruit.splice(2, 1, 'strawbeery');
// console.log(fruit);
// document.write(fruit);
// document.write("<br/>");

fruit.splice(3, 3); // 3 - where, 0 - how many values to delete, string - what to add
console.log(fruit);
document.write(fruit);
document.write("<br/>");

var animal = ['monkey', 'horse', 'dog'];
console.log(animal.sort());
document.write("<br/>");
animal.splice(0, 0, 'cat');
console.log(animal);

let sep = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let separate = sep.split("/")
console.log(separate);

document.write("mango \n <br/> cherries \n <br/> kiwi \n <br/> grapes \n <br/> pear \n <br/> peach \n <br/> orange \n <br/> lemon");
document.write("<br/>");

//EXERCISES ADVANCED
// !:Sum the following variables and store the result in one new variable:
// var a = 7;
// var b = 14;
// var c = "21";
// var d = '36';
// var e = 42;
// Multiply the following variables and store the result in one new variable:
// var f = '1';
// var g = 15;
// var h = 8;
// var i = "1";
// Divide the two results that you got from the arithmetic operations and print the result in the web browser.
// 2:From the following multidimensional Array:
// [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
// Select and output the numbers 11, 25, 17, 27 and 0 in the console.
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
var sum = (a + b + Number(c) + Number(d) + e);
console.log(sum);

//String() - converts numbers to strings
//Number() - converts strings to number

var f = '1';
var g = 15;
var h = 8;
var i = "1";


var mult = (Number(f) * g * h * Number(i))
console.log(mult)

var div = (sum / mult);
console.log(div);
document.write(div);

var arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
]

;
console.log(arr[1][1], arr[4][2], arr[5][3], arr[2][3], arr[2][1])

//EXERCISE CHALLENGE
// String Manipulation
// Structure the following sentence:
// "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up".
// The result should be:
// "Properties, a set of immutable values, are passed to a component's renderer as properties in its  HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as properties flow down; actions flow up"
// (Commas are also accepted as a division between the words.)


var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
var sent = sentence.split("$");
//['Properties,', 'a', 'set', 'of', 'immutable', 'values,', 'are', 'passed', 'to', 'a', "component's", 'renderer', 'as', 'properties', 'in', 'its ', 'HTML', 'tag.', 'A', 'component', 'cannot', 'directly', 'modify', 'any', 'properties', 'passed', 'to', 'it,', 'but', 'can', 'be', 'passed', ' callback', 'functions', 'that', 'do', 'modify', 'values.', 'This', "mechanism's", 'promise', 'is', 'expressed', 'as', 'properties ', 'flow', 'down;', 'actions', 'flow', 'up']
document.write("<br/>");
document.write("<br/>");
document.write(sent.join(" "));
document.write("<br/>");
document.write("<br/>");


console.log(sent);

var senten = sentence.replaceAll("$", " ")
console.log(senten);
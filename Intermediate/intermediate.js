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
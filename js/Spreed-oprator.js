//Spread oprator
//spread=প্রসার/ বিস্তার
//Array প্রশস্ত করে নতুর ভেলু যোগ করে
var color=["red","green","orange","white","blue","purple"];
var employes=[...color,"Julfiker","Jim","shovo","Rasel","Tapus","Nasim","Juwel"];
console.log(employes)


//---------------------------------------------------------
const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
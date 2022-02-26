//Map------------------
//Map is a collcetion of data
var mymap=new Map();
mymap.set("key1","Bangladesh");
mymap.set("key2","India");
mymap.set("key3","Varot");
mymap.set("key4","Nepal");
mymap.set("key5","Amrika");
mymap.set("key6","Bangladesh");

// console.log(mymap.values());
// console.log(mymap.keys())
for (let myval of mymap.values()){
    console.log(myval)
}
// for (let myval of mymap.keys()){
//     console.log(myval)
// }


//map Mathod
// mymap.delete("key1")
// mymap.clear();
// mymap.get("key1");
// if(mymap.has("key1")){
//     console.log("Yes")
// }else{
//     console.log("No")
// }
//set---------------
var myset=new Set();
myset.add("Bangladesh");
myset.add("India");
myset.add("Varot");
myset.add("Paskistan");
console.log(myset);

// var myset1=new Set("a","b","c","d","e","f","g","h");
// console.log(myset1)

//set Mathod
// myset.clear();
// myset.delete("Bangladesh");
// console.log(myset.size);
// console.log(myset.values());
// if(mymap.has("Bangladesh")){
//     console.log("Yes")
// }else{
//     console.log("No")
// }


//--------------------------
//step-1
const numbers = [4, 6, 8, 10];
const output = [];
for(const number of numbers){
    const result=number*2;
    output.push(result);
}
console.log(output)

//step-2
const numbers = [4, 6, 8, 10];
const output2 = [];
//normal function
// function doubleOld(number) {
//     return number * 2;
// }
//array function
const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);
//-------------------------
//How all use map
//3 kaj ta akstate korajay
//loop
//element diya function ke call korbe
//result take push kore dibe

const numbers = [4, 6, 8, 10];
var numberitem =number => number*2;
var output=numbers.map(numberitem);
console.log(output)
//const output = numbers.map(number => number * 2);
//const output = numbers.map(x => x * 2);
//console.log(output);

// const squares = numbers.map(x => x * x);
// console.log(squares)
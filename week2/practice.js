"use strict";

//Different ways to declare a variable
let a = 10;
console.log(a);
let $dollars = 10;
let _hollycow = 10;
let $ = 10;
//---------------------------------------------
//using Map
const Numerals = new Map();
Numerals.set(1, 'I');
Numerals.set(2, 'II');
Numerals.set(3, 'III');
Numerals.get(3);
Numerals.has(10);

let newNumerals = [...Numerals];
console.log(newNumerals);
//----------------------------------------------
//Spread operator
function mean(...values) {
    let total = 0;
    for(const value of values) {
    total += value;
    }
    return total/values.length;
    }
console.log(mean(2,3,4,5,6,7))
//---------------------------------------------
//Callbacks
let bro = "How you remind me"
function Ending(){
    console.log(`of who I really am`);
}
const Sing = (song,callback) => {
    console.log(`I'm singing along to ${song}.`);
    callback();
    }
Sing(bro, Ending);
//-------------------------------------
//Eloquent JavaScript
//Variable holding various variables
let one = 1, two = 2, three = 3;
console.log(one+two+three);
//---------------------------------------
//practice for loop
let cod = "#";
for(let i = 0; i < 7; i++){
    console.log(cod);
    cod += "#";
}
//---------------------------------------
/**Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead. */
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
//---------------------------------------
/**Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard. */
let board = "";
for(let i = 0; i < 8; i++){
    if(i % 2 === 0){
        board += " # # # # #";
    }
    else{
        board += ' ' +" # # # #";
    }
    board += "\n";
    console.log(board);
}
//---------------------------------------
/**Write a function min that takes two arguments and returns their minimum. */
const min=(a,b)=>{
    if(a < b){
        return a;}
    else{
        return b;}
}
console.log(min(2,3));
//---------------------------------------
/**Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean. */
function isEven(n){
    if(n === 0){
        return true;
    }
    else if(n === 1){
        return false;
    }
    else if(n < 0){
        return isEven(-n);
    }
    else{
        return isEven(n-2);
    }
}
console.log(isEven(50));
//---------------------------------------
/**You can get the Nth character, or letter, from a string by writing "string
"[N]. The returned value will be a string containing only one character
(for example, "b"). The first character has position 0, which causes the
last one to be found at position string.length - 1. In other words, a
two-character string has length 2, and its characters have positions 0
and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters
there are in the string.
Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is
to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
87 */
function countBs(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === "B"){
            count++;
        }
    }
    return count;
}//end of countBs
function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            count++;
        }
    }
    return count;
}//end of countChar
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
//---------------------------------------
/**
 * 
 * Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and
including) end
 */
function range(start, end){
    let array = [];
    for(let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}
console.log(range(1,10));
//---------------------------------------
/**Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the example program and see whether
it does indeed return 55 */
function sum(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}   
console.log(sum([1,2,3,4,5]));
//---------------------------------------
/**modify your range function to take an optional
third argument that indicates the “step” value used when build-
ing the array. If no step is given, the elements go up by increments
of one, corresponding to the old behavior. The function call range(1,
10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */
function range(start, end, step = 1){
    let array = [];
    if(step > 0){
        for(let i = start; i <= end; i += step){
            array.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i += step){
            array.push(i);
        }
    }
    return array;
}
console.log(range(1,10,2));
//---------------------------------------
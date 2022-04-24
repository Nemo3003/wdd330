"use strict";
let a = 10;
console.log(a);
let $dollars = 10;
let _hollycow = 10;
let $ = 10;
//---------------------------------------------
const Numerals = new Map();
Numerals.set(1, 'I');
Numerals.set(2, 'II');
Numerals.set(3, 'III');
Numerals.get(3);
Numerals.has(10);

let newNumerals = [...Numerals];
console.log(newNumerals);
//----------------------------------------------
function mean(...values) {
    let total = 0;
    for(const value of values) {
    total += value;
    }
    return total/values.length;
    }
console.log(mean(2,3,4,5,6,7))
//---------------------------------------------
let bro = "How you remind me"
function Ending(func){
    console.log(`of who I really am`);
}
const Sing = (song,callback) => {
    console.log(`I'm singing along to ${song}.`);
    callback();
    }
Sing(bro, Ending);
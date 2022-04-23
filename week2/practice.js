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
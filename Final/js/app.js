"use strict";

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()

let numOfVisits = document.querySelector('.daysOfVisit');

let numOfVisits1 = Number(window.localStorage.getItem('visits'));
let lastVisits= Number(window.localStorage.getItem('lastVisits'));

const NUMS = 1000 * 60 * 60 * 24;

let daysAmong = Date.now() - lastVisits;

let numOfDays = Math.ceil(daysAmong / NUMS);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits1 != 0) {

    numOfVisits.textContent = 'You\'ve been here ' + numOfDays + ' day(s) ago'
} else {
    numOfVisits.textContent = 'This is your first page visit.'
}

numOfVisits1++;
localStorage.setItem("visits", numOfVisits1);

let hamb = document.getElementById("hamburger")
let nav = document.getElementById("nav")
//when the page resizes to a smaller size, the nav bar will disappear and the hamburger will appear
window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        hamb.style.display = "block";
    } else {
        hamb.style.display = "none";}
    if(this.window.innerWidth < 768) {
        nav.style.display = "none";}});
//When the user clicks on the hamburger, then the nav will show up
hamb.addEventListener('click', function () {
    nav.style.display = "block";
    hamb.style.display = "none";    
});
//if you click on the hamburger again, it will disappear immediately
hamb.removeEventListener('click', function () {
    nav.style.display = "none";
    hamb.style.display = "block";
});
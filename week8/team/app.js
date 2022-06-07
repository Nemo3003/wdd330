"use strict";

const url = "https://swapi.dev/api/people/";
const getPeople = document.getElementById('people');
const container = document.getElementById('peopleContainer');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let nextURL;
let prevURL;

getPeople.addEventListener('click', () => {
    fetch(url)
        .then(response => {
            container.innerHTML = "";
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => {
            nextURL = data.next;

            for (let i = 0; i <= 10; i++) {
                const name = document.createElement("p");
                name.textContent = data.results[i].name;
                container.appendChild(name);
            }
        })
}, false);

//next button
nextBtn.addEventListener('click', () => {
    fetch(nextURL)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            nextURL = data.next;
            prevURL = data.previous;
            for (let i = 0; i <= 10; i++) {
                const p = document.createElement("p");
                p.textContent = data.results[i].name;
                container.appendChild(p);
            }
            if (nextURL === null) {
                nextBtn.setAttribute("display", "hidden");
            };
        })
}, false);

//prev button
prevBtn.addEventListener('click', () => {
    fetch(prevURL)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            nextURL = data.next;
            prevURL = data.previous;
            for (let i = 0; i <= 10; i++) {
                const p = document.createElement("p");
                p.textContent = data.results[i].name;
                container.appendChild(p);
            }
            if (nextURL === null) {
                prevBtn.setAttribute("display", "hidden");
            };
        })
}, false);

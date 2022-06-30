"use strict";

const apiURL = "https://rickandmortyapi.com/api/character";
fetch(apiURL)
    .then((response) => response.json())
    .then((data) => Cards (data.results));

const Cards = (newData) =>{
        const cardWrapper = document.querySelector("#cardWrapper")
        let numberCounter = 0;
        newData.forEach(character =>{
            let ids = character.id;
            let div = document.createElement("div");
            let name = document.createElement("h2");//name
            let par = document.createElement("h4");//species
            let par2 = document.createElement("h4");//origin
            let par3 = document.createElement("h4");//status
            let img = document.createElement("img");//image
            let buttonLike = document.createElement("button");//button
            let spanLike = document.createElement("span");//spanLike
            //Assigned values to the elements
            name.innerHTML = character.name;
            par.innerHTML = `Species: ${character.species}`;
            par2.innerHTML = `Origin: ${character.origin.name}`;
            img.src = character.image;
            spanLike.innerHTML = "Like";
            buttonLike.appendChild(spanLike);
            //Assigned classes to the elements
            div.classList.add("card-char");
            name.classList.add("name");
            par.classList.add("species");
            par2.classList.add("origin");
            par3.classList.add("status");
            img.classList.add("image");
            buttonLike.classList.add("buttonLike");
            //Appended the elements to the div
            div.appendChild(name);
            div.appendChild(par);
            div.appendChild(par2);
            div.appendChild(img);
            div.appendChild(buttonLike);
            //Appended the div to the cardWrapper

            cardWrapper.appendChild(div);
            
            /*cardWrapper.innerHTML = cardWrapper.innerHTML + 
            `<div class="card-char">
            <h2>${character.name}<h2>
            <h4>Status: ${character.status}</h4>
            <h4>Species: ${character.species}</h4>
            <h4>Origin: ${character.origin.name}</h4>
            <img src=${character.image} class="char-img">
            <br>
            <button class="like${character.id}" type="button">Like</button>
            <span id="likes${character.id}">${numberCounter}</span>
            </div>
            <br>
            `;*/
            
            },
        )
       
    }
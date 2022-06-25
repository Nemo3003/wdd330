"use strict";

const apiURL = "https://rickandmortyapi.com/api/character";
fetch(apiURL)
    .then((response) => response.json())
    .then((data) => Cards (data.results));

const Cards = (newData) =>{
        const cardWrapper = document.querySelector("#cardWrapper")
        let numberCounter = 0;
        newData.forEach(character =>{
            cardWrapper.innerHTML = cardWrapper.innerHTML + 
            `<div class="card-char">
            <h2>${character.name}<h2>
            <h4>Status: ${character.status}</h4>
            <h4>Species: ${character.species}</h4>
            <h4>Origin: ${character.origin.name}</h4>
            <img src=${character.image} class="char-img">
            <button class="like" type="button" onclick="Like()">Like</button>
            <span> Likes: ${numberCounter}</span>
            </div>
            <br>
            `;
            function Like(){
                 numberCounter++;
            }
        }
        
        )
    }


"use strict";

const apiURL = "https://rickandmortyapi.com/api/character";
fetch(apiURL)
    .then((response) => response.json())
    .then((data) => Cards (data.results));

const Cards = (newData) =>{
        const cardWrapper = document.querySelector("#cardWrapper")
        newData.forEach(character =>{
            let div = document.createElement("div");
            let name = document.createElement("h2");//name
            let par = document.createElement("h4");//species
            let par2 = document.createElement("h4");//origin
            let par3 = document.createElement("h4");//status
            let img = document.createElement("img");//image
            let buttonLike = document.createElement("button");//button
            let spanLike = document.createElement("span");//spanLike

            //using localstorage for the like spanLike
            let num_likes = Number(window.localStorage.getItem(character.id + "likes"));

            //Assigned values to the elements
            name.innerHTML = character.name;
            par.innerHTML = `Species: ${character.species}`;
            par2.innerHTML = `Origin: ${character.origin.name}`;
            img.src = character.image;
            buttonLike.innerHTML = "Like";
            spanLike.innerHTML = ' ' + num_likes + ' '+'likes';

            //Assigned classes to the elements
            div.classList.add("card-char");
            name.classList.add("name");
            par.classList.add("species");
            par2.classList.add("origin");
            par3.classList.add("status");
            img.classList.add("image");

            buttonLike.setAttribute('id', `buttonLike${character.id}`);
            buttonLike.setAttribute('class', 'likeBtn');
            spanLike.setAttribute('class', 'span');

            //Appended the elements to the div
            div.appendChild(name);
            div.appendChild(par);
            div.appendChild(par2);
            div.appendChild(img);
            div.appendChild(buttonLike);
            div.appendChild(spanLike);

            //Appended the div to the cardWrapper
            cardWrapper.appendChild(div);

            //Function to call when the Like button is clicked
            const Like =()=> {
                num_likes++;
                window.localStorage.setItem(character.id + "likes", num_likes);
                spanLike.innerHTML = ' ' + num_likes + ' '+'likes';
            }
            buttonLike.addEventListener("click", Like);
            
            },
        )
       
    }
"use strict";

const inputEl = document.querySelector('.input-chat');
const btnEl = document.querySelector('.fa-paper-plane');
const cardBodyEl = document.querySelector('.card-body');

let userMessage; 


const API_KEY = "";
const URL = "";



function manageChat(event) {
    if (event) {
        event.preventDefault();
    }

    userMessage = inputEl.value.trim();
    console.log(userMessage);

    if (!userMessage) return;
    inputEl.value = "";

    cardBodyEl.appendChild(messageEl(userMessage, "user"));

    setTimeout(() => {
        cardBodyEl.appendChild(messageEl("Thinking", "chat-bot"));
    }, 500);
}

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        manageChat(event); // Передаем event в manageChat
    }
});



//messages 
const messageEl = ( message, className ) => {
    const chatEl = document.createElement('div');
    chatEl.classList.add('chat', `${className}`);
    let chatContent = className === "chat-bot" ? `<span class="user-icon"><i class="fa fa-robot"></i></span>
    <p>${message}</p>` : `<span class="user-icon"><i class="fa fa-user"></i></span>
    <p>${message}</p>`;
    chatEl.innerHTML = chatContent;
    return chatEl;
};




btnEl.addEventListener("click", manageChat);
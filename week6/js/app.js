"use strict";
//document.getElementById("year").innerHTML = new Date().getFullYear()
const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoItemsList = document.querySelector('.todoItems');
//Here we have to store the tasks
let todosList = [];

//This function is used to check whether there are any task in the list
const updateCount=(todosList)=>{
    const taskCounter = document.getElementById('counter');
    if(todosList != null) {
        taskCounter.innerHTML = `${todosList.length} task/s found`;
  } else {
        taskCounter.innerHTML = `No task has been found`;}}
  //This submits the task
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo(todoInput.value);});
    //adding to the local storage
const addToLocalStorage=(todosList)=> {
    localStorage.setItem('todosList', JSON.stringify(todosList));
    renderTodos(todosList);}
//The local storage is used to store the data, so the user will not lose the data when the page is refreshed
const renderTodos=(todosList)=> {
    todoItemsList.innerHTML = '';
    todosList.forEach(function(item) {
       const checked = item.completed ? 'checked': null;
       const liList = document.createElement('li');
        liList.setAttribute('class', 'item');
        liList.setAttribute('data-key', item.id);  
       if (item.completed === true) {
           liList.classList.add('checked');}
     liList.innerHTML = `<input type="checkbox" class="checkbox" ${checked}> ${item.name} <button class="delete-button">X</button>`;
   todoItemsList.append(liList);});
//here we update the counter
   updateCount(todosList);}
const addTodo=(item)=> {
     if (item !== '') {
         const todo = {
        id: Date.now(),
        name: item,
        completed: false};
  
      todosList.push(todo);
      addToLocalStorage(todosList);
      todoInput.value = '';}}

const getFromLocalStorage=()=> {
  const reference = localStorage.getItem('todosList');
  if (reference) {
    todosList = JSON.parse(reference);
    renderTodos(todosList);}}

const toggle=(id)=> {
    todosList.forEach(function(item) {
     if (item.id == id) {
       item.completed = !item.completed;}});
  addToLocalStorage(todosList);}
//This function is used to delete the task
const deleteTodo=(id)=> {
  
    todosList = todosList.filter(function(item) {
       return item.id != id;});
     addToLocalStorage(todosList);}
getFromLocalStorage();

todoItemsList.addEventListener('click', function(event) {
  
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));}

 if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));}});
//This function is used to check whether there are active tasks. Tasks that had not been completed yet
//Ulises's code for the ToDo List
const active=(todosList)=>{
  const taskCounter = document.getElementById('counter');
    let counter = 0;
    todosList.forEach(function(item) {
       if (item.completed != true){
        counter++;
        taskCounter.innerHTML = `${counter} task(s) active`;} 
      if (counter == 0){
        taskCounter.innerHTML =  `No tasks active`;}});}
//This function is used to check whether there are completed tasks. Tasks that had been completed
const completed=(todosList)=>{
  const taskCounter = document.getElementById('counter');
  let counter1 = 0;
  todosList.forEach(function(item) {
    if (item.completed == true){
      counter1++;
      taskCounter.innerHTML = `${counter1} task/s completed`;}  
    if (counter1 == 0){
      taskCounter.innerHTML =  `No task have been completed`;}});} 
//Ulises's code for the ToDo List
//Do not steal my code :) pretty please!
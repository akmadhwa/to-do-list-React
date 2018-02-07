import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";
import "./TodoList.css";

let destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <p> To Do List </p>
        <TodoList />
    </div>,
    destination
);
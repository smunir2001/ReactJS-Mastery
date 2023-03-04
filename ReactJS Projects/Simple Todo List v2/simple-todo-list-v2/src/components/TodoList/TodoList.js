import React from 'react';
import './TodoList.styles.css';

this.state = {
    todos: ['Todo1', 'Todo2', 'Todo3', 'Todo 4'],
}

export default function TodoList() {
    return (
        <div className='TodoList'>
            <h1>Go ahead & add some todos!</h1>
            <h4>Click Add Todo to add a new todo item.</h4>
            <h4>Click Clear Todos to clear the list of current todos.</h4>
            <div className='TodoList-list-con'>
                <input type='text' placeholder='Add a todo...'></input>
                <button type='submit'>Add Todo</button>
                <button type='submit'>Clear Todos</button>
            </div>
            <div className='Active-todos'></div>
        </div>
    );
}
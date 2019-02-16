import React, { useRef, useReducer, useEffect } from 'react';

import './index.scss';

const
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    initialState = [
        {
            id: 1,
            completed: true,
            title: 'Bring back Ironman from space'
        },
        {
            id: 2,
            completed: false,
            title: 'Kill Thanos'
        },
        {
            id: 3,
            completed: false,
            title: 'Destroy all the stones'
        },
    ];

function todosReducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case COMPLETE_TODO:
            return state.map(todo => ({
                ...todo,
                completed: todo.id === action.id ? !todo.completed : todo.completed
            }))
        default: return state;
    }
}

export default function TodosHooks() {

    const todoRef = useRef(null);

    const [todos, dispatch] = useReducer(todosReducer, initialState);

    // only runs once on component load due to empty array as second argument to useEffect.
    useEffect(() => todoRef.current.focus(), []);

    const addTodo = (title) => dispatch({
        type: ADD_TODO,
        todo: {
            title,
            completed: false,
            id: Date.now()
        }
    });

    const completeTodo = (id) => {
        dispatch({
            type: COMPLETE_TODO,
            id
        });
    }

    const deleteTodo = (id) => {
        dispatch({
            type: REMOVE_TODO,
            id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoRef.current.value);
        todoRef.current.value = "";
    }

    const handleTodoClick = (e) => {
        completeTodo(Number(e.target.id));
    }

    const handleTodoDelete = (e) => {
        deleteTodo(Number(e.target.dataset.todo));
    }

    return (
        <div>
            <h2>Todos with Hooks</h2>
            <form onSubmit={handleSubmit}>
                <input ref={todoRef} placeholder="Add a todo here..." />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(todo => <li className="todo-hooks__list--item" key={todo.id}>
                    {todo.completed && <span className="completed" id={`${todo.id}`} onClick={handleTodoClick}>{todo.title}</span>}
                    {!todo.completed && <span id={`${todo.id}`} onClick={handleTodoClick}>{todo.title}</span>}
                    <span className="todo-hooks__delete" data-todo={todo.id} onClick={handleTodoDelete}>[x]</span>
                </li>)}
            </ul>
        </div>
    )
}

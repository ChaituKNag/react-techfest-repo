import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

import {
    ADD_TODO,
    REMOVE_TODO,
    COMPLETE_TODO
} from '../../store';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.title.trim().length > 0) {
            const title = this.state.title;
            this.props.addTodo(title);
            this.setState({
                title: ''
            })
        }
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleItemClicked(e) {
        const id = e.target.getAttribute('id');
        if(id) {
            this.props.completeTodo(Number(id));
        }
    }

    render() {
        return (
            <div>
                <h2>Todos Container</h2>
                <p>Compare this with /todos-hooks to understand code quality improvement with hooks.</p>
                <form onSubmit={ this.handleSubmit.bind(this)}>
                    <input type="text" name="todosInput" placeholder="Add Todo" value={this.state.title} onChange={ this.handleChange.bind(this)} /><button type="submit">Add</button>
                    <ul onClick={
                        this.handleItemClicked.bind(this)
                    }>
                        {
                            this.props.todos.map(todo => {
                                if(todo.completed) {
                                    return (
                                        <li key={todo.id} className="todos__list--item completed">
                                            <span id={todo.id} className="todos__list--title">{todo.title}</span>
                                            <span className="todos__delete" onClick={() => this.props.removeTodo(todo.id)}>[x]</span>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={todo.id} className="todos__list--item">
                                            <span id={todo.id} className="todos__list--title">{todo.title}</span>
                                            <span className="todos__delete" onClick={() => this.props.removeTodo(todo.id)}>[x]</span>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </form>
            </div>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        'todos': state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (title) => dispatch({
            type: ADD_TODO,
            todo: {
                title,
                completed: false,
                id: Date.now()
            }
        }),
        removeTodo: (id) => dispatch({
            type: REMOVE_TODO,
            id
        }),
        completeTodo: (id) => dispatch({
            type: COMPLETE_TODO,
            id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)

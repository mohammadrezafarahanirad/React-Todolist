import React from 'react'
import uuid from 'uuid/v4'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

export const Filter = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
}

export default class Application extends React.Component {

    defaultState = { 
        filter: Filter.ALL,
        todos: [],
        allChecked: false
    }

    constructor(props) {
        super(props)
        const state = JSON.parse(window.localStorage.getItem('state') || false) || this.defaultState
        this.state = state
    }

    persist() {
        window.localStorage.setItem('state', JSON.stringify(this.state))
    }

    onChangeFilter = (filter) => {
        this.setState({
            filter
        }, this.persist)
    }

    onAllChecked = () => {
        const newTodos = this.state.todos.map((todo) => {
            return {
                ...todo, 
                isCompleted: !this.state.allChecked 
            }
        }) 
        this.setState ({
            todos: newTodos,
            allChecked: !this.state.allChecked
        }, this.persist)
    }

    onChange = (id, isCompleted) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                return todo.id !== id ? todo : { 
                    ...todo, 
                    isCompleted
                }
            })
        }, this.persist)
    }

    onAdd = (title) => {
        const newTodo = {
            id: uuid(),
            title,
            isCompleted: false
        } 
        this.setState({
            todos: this.state.todos.concat(newTodo)
        }, this.persist)
    }

    onRemove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        }, this.persist)
    }
    onClearTodos = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.isCompleted)
        }, this.persist)
    }

    render() {
        const count = getTodosCount(this.state.todos)
        return (
            <section className="todoapp">
                <Header value={`Todo ${this.state.todos.length + 1}:`} title="Todos" onAdd={this.onAdd} />
                { 
                    this.state.todos.length > 0  
                    ? (
                        <React.Fragment>
                            <Main 
                                todos={getTodos(this.state.todos, this.state.filter)} 
                                onDelete={this.onRemove} 
                                onChange={this.onChange} 
                                allChecked={this.state.allChecked}
                                onAllChecked={this.onAllChecked} 
                                onAllunChecked={this.onAllunChecked}/>
                            <Footer count={count} filter={this.state.filter} onChangeFilter={this.onChangeFilter} onClearTodos={this.onClearTodos} />
                        </React.Fragment>
                    )
                    : null
                }
            </section>
        )
    }
}

const getTodosCount = (todos) => {
    return todos.filter(todo => !todo.isCompleted).length 
}

const getTodos = (todos, filter) => {
    switch(filter) {
        case Filter.ACTIVE:
            return todos.filter(todo => !todo.isCompleted)
        case Filter.COMPLETED:
            return todos.filter(todo => todo.isCompleted)
        default:
            return todos
    }
}
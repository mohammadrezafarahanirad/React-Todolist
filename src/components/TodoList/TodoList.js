import React from 'react'
import TodoEntry from '../TodoEntry/TodoEntry';

export default class TodoList extends React.Component {
    render() {
        return(
            <ul className="todo-list">
                {
                    this.props.todos.map(todo => <TodoEntry key={todo.id} todo={todo} onDelete={this.props.onDelete} onChange={this.props.onChange} />)   
                }
            </ul>
        )    
    }
}
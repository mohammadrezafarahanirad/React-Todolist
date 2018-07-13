import React from 'react'

import Input from '../Input/Input'
import TodoList from '../TodoList/TodoList'

export default class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <Input onMarkAll={this.props.onAllChecked} value={this.props.allChecked} />
                <TodoList todos={this.props.todos} onDelete={this.props.onDelete} onChange={this.props.onChange} />
            </section>
        )
    }
}

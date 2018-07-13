import React from 'react'
import { Filter } from '../Application/Application';

export default class Footer extends React.Component {
    render() { 
        return (  
            <footer className="footer"> 
                <span className="todo-count"><strong> {this.props.count} </strong> item{this.props.count === 1 ? '' : 's'} left</span>
                <ul className="filters">
                    <li>
                        <a className={this.props.filter === Filter.ALL ? "selected" : ""} onClick={() => this.props.onChangeFilter(Filter.ALL)} href="#/">All</a>
                    </li>
                    <li>
                        <a className={this.props.filter === Filter.ACTIVE ? "selected" : ""} href="#/active" onClick={() => this.props.onChangeFilter(Filter.ACTIVE)}>Active</a>
                    </li>
                    <li>
                        <a className={this.props.filter === Filter.COMPLETED ? "selected" : ""} href="#/completed" onClick={() => this.props.onChangeFilter(Filter.COMPLETED)}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.props.onClearTodos}>Clear completed</button>
            </footer>
        )
    }
}
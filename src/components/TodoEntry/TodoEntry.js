import React from 'react'

export default class TodoEntry extends React.Component {
    state = {
        editMode: false, 
        value: false
    }

    static getDerivedStateFromProps (props, state) {
        return {
            value: state.value || props.todo.title 
        }
    }

    onChanged = (e) => {
        this.props.onChange(this.props.todo.id, e.target.checked)
    }

    onDelete = () => {
        this.props.onDelete(this.props.todo.id)
    }

    onClickEdit = () => {
        this.setState ({
            editMode: true
        }) 
    }

    onEdit = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSave = (e) => {
        if(e.which === 13) { 
            if (this.props.title !== null)  
            this.setState({
                editMode: false,
                value : this.state.value
            })
        }
    }

    onKeydown = (e) => {
        if(e.which === 27) {    
            this.setState({
                editMode: false,
                value: ''
            })
        }
    }

    getClass () {
        if(this.state.editMode) {
            return 'editing'
        }
        
        if(this.props.todo.isCompleted) {
            return 'completed'
        }

        return ""
    }

    render() {
        return(
            <li className={this.getClass()}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.onChanged} checked={this.props.todo.isCompleted} />
                    <label onDoubleClick={this.onClickEdit}>{ this.state.value }</label>
                    <button className="destroy" onClick={this.onDelete}></button>
                </div>
                <input className="edit" value={this.state.value} onKeyPress={this.onSave} onKeyDown={this.onKeydown} onChange={this.onEdit} />
            </li>
        )
    }
}
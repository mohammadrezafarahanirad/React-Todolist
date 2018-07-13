import React from 'react'

export default class Header extends React.Component {

    state = {
        inputValue: ''
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onKeyPress = (e) => {
        if(e.which === 13) {
            if (this.state.inputValue !== null && this.state.inputValue !== '') {
                this.props.onAdd(this.state.inputValue)
                this.setState({
                    inputValue: ''
                })
            }
        }
    }
    
    render() { 
        return (
            <header className="header">
                <h1>{ this.props.title }</h1>
                <input className="new-todo" placeholder="What needs to be done?" value={this.state.inputValue} onKeyPress={this.onKeyPress} onChange={this.onChange} autoFocus />
            </header>
        )
    }
}

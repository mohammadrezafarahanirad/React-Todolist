import React from 'react'

export default class Input extends React.Component {
    render() {
        return(
            <React.Fragment>
                <input checked={this.props.value} id="toggle-all" onChange={this.props.onMarkAll} className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all" >Mark all as complete</label>
            </React.Fragment>
        )
    }
}
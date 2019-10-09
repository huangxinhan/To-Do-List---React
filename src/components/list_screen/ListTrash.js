import React, { Component } from 'react'

export class ListTrash extends Component {
    show = () => {
        alert('whor')
    }

    render() {
        return (
            <div id="list_trash" 
            onClick={this.props.showPopup}>
            &#128465;</div>
        )
    }
}

export default ListTrash

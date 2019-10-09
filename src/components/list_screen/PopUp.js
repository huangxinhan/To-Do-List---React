import React, { Component } from 'react'


export class PopUp extends Component {
    close = () => {
        this.props.loadList(this.props.todoList);
    }

    delete = () => {
        
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>Delete List?</h1>
                    <h1>{this.props.text}</h1>
                    <button id = "confirm_delete_list" onClick={this.props.deleteList}>Yes</button>
                    <button id = "confirm_cancel_list" onClick={this.close}>No</button>
                    <h1>This list will not be retrievable </h1>
                </div>
            </div>
        )
    }
}

export default PopUp;

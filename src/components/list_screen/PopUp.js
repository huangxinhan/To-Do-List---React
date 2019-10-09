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
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.deleteList}>Yes</button>
                    <button onClick={this.close}>No</button>
                </div>
            </div>
        )
    }
}

export default PopUp;

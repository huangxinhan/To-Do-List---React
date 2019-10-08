import React, { Component } from 'react'
import moveup from './MoveUp.png'
import movedown from './MoveDown.png'
import close from './Close.png' 
import PropTypes from 'prop-types';


export class ListItemCard extends Component {

    getCompleted(){
        let isCompleted = this.props.listItem.completed;
        if (isCompleted === true){
            return "Completed";
        }
        else{
            return "Pending"
        }
    }

    deleteItem = (e) => {
        
    }

    editListInfo = (e) => {
        //this.props.todoList.name = e.target.value;
        //alert("oki")
    }

    render() {
        let isCompleted = this.props.listItem.completed;
        let colorClass;
        let keyNums = this.props.listItem.key;
        let key = this.props.listItem.key.toString();
        let moveUpButton = "list_item_card_moveup" + key;
        let moveDownButton = "list_item_card_movedown" + key;
        let deleteButton = "list_item_card_delete" + key;
        if (isCompleted){
            colorClass = 'list_item_card_completed';
        }
        else{
            colorClass = 'list_item_card_not_completed';
        }
        return (
            <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.props.listItem.key)} id={key}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className= {colorClass}>
                    <strong>{this.getCompleted()}</strong>
                </div>
                <div className='list_item_card_toolbar'>
                    <div className='list_item_card_button' id = {moveUpButton}
                    onClick = {this.props.moveUp.bind(this, this.props.listItem.key)}>
                        <img src = {moveup} alt = ""/>
                    </div>
                    <div className='list_item_card_button' id = {moveDownButton}
                    onClick = {this.props.moveDown.bind(this, this.props.listItem.key)}>
                        <img src = {movedown} alt = ""/>
                    </div>
                    <div className='list_item_card_button' id = {deleteButton}
                    onClick = {this.props.deleteItem.bind(this, this.props.listItem.key)}>
                        <img src = {close} alt = ""/>
                    </div>
                </div>


            </div>
        )
    }
}

export default ListItemCard

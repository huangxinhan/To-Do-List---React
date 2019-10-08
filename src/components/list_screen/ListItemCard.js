import React, { Component } from 'react'
import moveup from './MoveUp.png'
import movedown from './MoveDown.png'
import close from './Close.png' 



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

    render() {
        let isCompleted = this.props.listItem.completed;
        let colorClass;
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
            <div className='list_item_card'>
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
                    <button className='list_item_card_button' id = {moveUpButton}>
                        <img src = {moveup} alt = ""/>
                    </button>
                    <button className='list_item_card_button' id = {moveDownButton}>
                        <img src = {movedown} alt = ""/>
                    </button>
                    <button className='list_item_card_button' id = {deleteButton}>
                        <img src = {close} alt = ""/>
                    </button>
                </div>


            </div>
        )
    }
}

export default ListItemCard

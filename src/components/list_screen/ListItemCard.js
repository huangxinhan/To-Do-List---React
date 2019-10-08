import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default ListItemCard

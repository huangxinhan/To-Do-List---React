import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import additem from './AddItem.png'
import TodoListLink from '../home_screen/TodoListLink';

export class ListItemsTable extends Component {

    deleteItem = (index, e) => {
        e.stopPropagation();
        this.props.todoList.items.splice(index, 1); //remove from array
        this.props.loadList(this.props.todoList);
        for (var i = 0; i < this.props.todoList.items.length; i++){
            this.props.todoList.items[i].key = i; //resetting the keys
        }

    }

    moveUp = (index, e) => {
        e.stopPropagation();
        alert("going up");
    }

    moveDown = (index, e) => {
        e.stopPropagation();
        alert("going down");
    }

    render() {
        return (
            <div id="list_items_container" className='list_item_header_card'>
                <div className='list_item_header_card'></div>
                <div className="list_item_task_header">Task</div>
                <div className="list_item_due_date_header">Due Date</div>
                <div className="list_item_status_header">Status</div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem}
                            deleteItem={this.deleteItem}
                            moveUp={this.moveUp}
                            moveDown={this.moveDown}
                            />
                    ))
                }
                <div className='list_item_add_card'>
                    <img src = {additem} alt = ""/>
                </div>
            </div>
        )
    }
}


export default ListItemsTable

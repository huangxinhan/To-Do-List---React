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
        var tempItem;
        if (index === 0){
            this.props.loadList(this.props.todoList);
            
            //disable buttons also go here
        }
        else{
            tempItem = this.props.todoList.items[index-1];
            this.props.todoList.items[index-1] = this.props.todoList.items[index];
            this.props.todoList.items[index] = tempItem;
            this.props.loadList(this.props.todoList);
            for (var i = 0; i < this.props.todoList.items.length; i++){
                this.props.todoList.items[i].key = i; //resetting the keys
            }
        }
        //alert("going up");
    }

    moveDown = (index, e) => {
        e.stopPropagation();
        var tempItem;
        if (index === this.props.todoList.items.length - 1){
            this.props.loadList(this.props.todoList);
            //disable buttons also go here
        }
        else{
            tempItem = this.props.todoList.items[index + 1];
            this.props.todoList.items[index + 1] = this.props.todoList.items[index];
            this.props.todoList.items[index] = tempItem;
            this.props.loadList(this.props.todoList);
            for (var i = 0; i < this.props.todoList.items.length; i++){
                this.props.todoList.items[i].key = i; //resetting the keys
            }
        }
    }

    editItem = (e) => {
        console.log(e)
    }


    render() {
        return (
            <div id="list_items_container" className='list_item_header_card'>
                <div className='list_item_header_card'></div>
                <div className="list_item_task_header"
                onClick = {this.props.sortItemsByTask}>Task </div>
                <div className="list_item_due_date_header"
                onClick = {this.props.sortItemsByDueDate}>Due Date</div>
                <div className="list_item_status_header"
                onClick = {this.props.sortItemsByStatus}>Status</div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem}
                            deleteItem={this.deleteItem}
                            moveUp={this.moveUp}
                            moveDown={this.moveDown}
                            editItem={this.props.editItem}
                            todoList={this.props.todoList}
                            />
                    ))
                }
                <div className='list_item_add_card'
                    onClick={this.props.addNewItem}>
                    <img src = {additem} alt = ""/>
                </div>
            </div>
        )
    }
}


export default ListItemsTable

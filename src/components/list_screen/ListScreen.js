import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types'

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    changeName = (e) => {
        //this.props.changeNameTransaction.todoList = this.props.todoList;
        //this.props.changeNameTransaction.initName = this.props.todoList.name;
        //this.props.changeNameTransaction.changedName = e.target.value;

        //this.props.transactionStack.addTransaction(this.props.changeNameTransaction);
        //this.props.transactionStack.prototype.addTransaction(this.props.changeNameTransaction);
        //let transaction = new ChangeName_Transaction(this.props.todoList, this.props.todoList.name, e.target.value);
        //transaction = new changeName_Transaction(this.props.todoList.name, e.target.value);
        //tps.addTransaction(transaction);
        //this.setState({inputValue: e.target.value});

        //this.props.changeName.bind(this);
        this.props.todoList.name = e.target.value;
    }

    changeOwner = (e) => {
        //this.setState({inputValue: e.target.value})
        this.props.todoList.owner = e.target.value;

    }

    sortItemsByTask = (E) => {
        alert('k')
    }

    editItem = (e) => {
        alert('k')
    }

    showPopup = (e) => {
        alert("cool")
    }

    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash
                showPopup={this.props.showPopup} />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            onBlur={this.props.changeName.bind(this)}
                            id="list_name_textfield" />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            onBlur={this.props.changeOwner.bind(this)}
                            id="list_owner_textfield" />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList}
                loadList={this.props.loadList}
                sortItemsByTask={this.props.sortItemsByTask}
                sortItemsByDueDate={this.props.sortItemsByDueDate}
                sortItemsByStatus={this.props.sortItemsByStatus}
                editItem={this.props.editItem}  
                addNewItem={this.props.addNewItem}
                moveUp={this.props.moveUp}
                />
            </div>
        )
    }
}

export default ListScreen

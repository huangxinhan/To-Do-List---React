import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddItemScreen extends Component {
    state = {
        currentDescription: null,
        currentAssignedTo: null,
        currentDueDate: null,
        currentCompleted: null
    }

    getDescription(){
        return "";
    }

    changeDescription = (e) =>{
        this.setState({currentDescription: e.target.value})
    }

    changeAssignedTo = (e) =>{
        this.setState({currentAssignedTo: e.target.value})
    }

    changeDueDate = (e) =>{
        this.setState({currentDueDate: e.target.value})
    }

    changeCompleted = (e) =>{
        this.setState({currentCompleted: e.target.checked})
    }


    getAssignedTo(){
        return "";
    }

    getDueDate(){
        return "";
    }

    getCompleted(){
        return false;
    }

    returnToList = () => {
        this.props.todoList.items.pop() //remove from array
        this.props.loadList(this.props.todoList);
    }

    confirmChange = () => {
        this.props.currentItem.description = this.state.currentDescription;
        this.props.currentItem.assigned_to = this.state.currentAssignedTo;
        this.props.currentItem.due_date = this.state.currentDueDate;
        this.props.currentItem.completed = this.state.currentCompleted;
        this.props.loadList(this.props.todoList);
    }

    
    render() {
        return (
            <div>
                <strong>Item</strong> 
                <br></br>
                <br></br>
                <strong>Description</strong>
                <input type="text" id="item_description_textfield"
                defaultValue={this.getDescription()}
                onChange={this.changeDescription}></input>
                <br></br>
                <br></br>
                <strong>Assigned To</strong>
                <input type="text" id="item_assigned_to_textfield"
                defaultValue={this.getAssignedTo()}
                onChange={this.changeAssignedTo}></input>
                <br></br>
                <br></br>
                <strong>Due Date</strong>
                <input type="date" id="item_due_date_picker"
                defaultValue={this.getDueDate()}
                onChange={this.changeDueDate}></input>
                <br></br>
                <br></br>
                <strong>Completed</strong>
                <input type="checkbox" id="item_completed_checkbox"
                defaultChecked={this.getCompleted()}
                onClick={this.changeCompleted}></input>
                <br></br>
                <br></br>
                <button id="item_form_submit_button"
                onClick={this.confirmChange}>Submit</button>
                <button id="item_form_cancel_button"
                onClick={this.returnToList}>Cancel</button>
            </div>
        )
    }
}

AddItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default AddItemScreen

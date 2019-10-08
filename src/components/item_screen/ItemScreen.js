import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state = {
        currentDescription: this.props.currentItem.description,
        currentAssignedTo: this.props.currentItem.assigned_to,
        currentDueDate: this.props.currentItem.due_date,
        currentCompleted: this.props.currentItem.completed,
        originalDescription: this.props.currentItem.description,
        originalAssignedTo: this.props.currentItem.assigned_to,
        originalDueDate: this.props.currentItem.due_date,
        originalCompleted: this.props.currentItem.completed
    }

    getDescription(){
        if(this.props.currentItem){
            var description = this.props.currentItem.description;
            return description;
        }
        return "";
    }

    changeDescription = (e) =>{
        this.setState({currentDescription: e.target.value})
        //this.props.currentItem.description = e.target.value;
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
        if(this.props.currentItem){
            var assignedTo = this.props.currentItem.assigned_to;
            return assignedTo;
        }
        return "";
    }

    getDueDate(){
        if(this.props.currentItem){
            var dueDate = this.props.currentItem.due_date;
            return dueDate;
        }
        return "";
    }

    getCompleted(){
        if(this.props.currentItem){
            var completed = this.props.currentItem.completed;
            return completed;
        }
        return false;
    }

    returnToList = () => {
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

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen

import React, { Component } from 'react';

export class changeItem_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(item, newDescription, newAssignedTo, newDueDate, newCompleted){
        super()
        this.item = item;
        this.newDescription = newDescription;
        this.newAssignedTo = newAssignedTo;
        this.newDueDate = newDueDate;
        this.newCompleted = newCompleted;
        this.oldDescription = item.description;
        this.oldAssignedTo = item.assigned_to;
        this.oldDueDate = item.due_date;
        this.oldCompleted = item.completed;
     }
    
     doTransaction(){
        this.item.description = this.newDescription;
        this.item.assigned_to = this.newAssignedTo;
        this.item.due_date = this.newDueDate;
        this.item.completed = this.newCompleted;
     }

     undoTransaction(){
        this.item.description = this.oldDescription;
        this.item.assigned_to = this.oldAssignedTo;
        this.item.due_date = this.oldDueDate;
        this.item.completed = this.oldCompleted;
     }

     toString(){
        //console.log(this.todoList.name);
     }  
}

export default changeItem_Transaction
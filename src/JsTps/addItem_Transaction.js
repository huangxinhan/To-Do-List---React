import React, { Component } from 'react';

export class addItem_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, newDescription, newAssignedTo, newDueDate, newCompleted){
        super()
        this.todoList = todoList;
        this.newDescription = newDescription;
        this.newAssignedTo = newAssignedTo;
        this.newDueDate = newDueDate;
        this.newCompleted = newCompleted;
     }
    
     doTransaction(){
        var newItem = {
            "key": this.todoList.items.length,
            "description": this.newDescription,
            "due_date": this.newDueDate,
            "assigned_to": this.newAssignedTo,
            "completed": this.newCompleted
          }
          this.todoList.items.push(newItem);
     }

     undoTransaction(){
        
        this.todoList.items.pop();

     }

     toString(){
        //console.log(this.todoList.name);
     }  
}

export default addItem_Transaction
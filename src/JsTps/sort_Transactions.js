import React, { Component } from 'react';

export class sort_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */

     constructor(todoList, currentCriteria){
        super()
        
        this.todoList = todoList;
        this.currentCriteria = currentCriteria;
        this.oldTodoList = null;
     }
    
     doTransaction(){
        var oldTodoList = JSON.parse(JSON.stringify(this.todoList));
        this.oldTodoList = oldTodoList;
        this.todoList.items.sort(this.compare);
        for (var i = 0; i < this.todoList.items.length; i++){
            this.todoList.items[i].key = i;
        }

     }

     undoTransaction(){
        this.todoList.key = this.oldTodoList.key;
        this.todoList.name = this.oldTodoList.name;
        this.todoList.owner = this.oldTodoList.owner;
        this.todoList.items = this.oldTodoList.items;
        //this.currentCriteria = this.currentCriteria;
        //alert(this.oldTodoList.items[1].description)
        //alert(this.todoList.items[1].description)
     }

     toString(){
        console.log(this.todoList.owner);
     }  


     compare = (item1, item2) => {
        console.log("the current criteria is" + this.currentCriteria)
        // IF IT'S A DECREASING CRITERIA SWAP THE ITEMS
        if (this.currentCriteria === "decreasingTask"
        ||  this.currentCriteria === "decreasingDate"
        ||  this.currentCriteria === "decreasingStatus") {
            let temp = item1;
            item1 = item2;
            item2 = temp;
        }
    
        // SORT BY ITEM DESCRIPTION
        if (this.currentCriteria === "increasingTask"
            || this.currentCriteria === "decreasingTask") {
            if (item1.description < item2.description)
                return -1;
            else if (item1.description > item2.description)
                return 1;
            else
                return 0;
        }
    
        // SORT BY ITEM DUE DATE
        if(this.currentCriteria === "increasingDate"
            || this.currentCriteria === "decreasingDate"){
            if(item1.due_date < item2.due_date)
                return -1;
            else if (item1.due_date > item2.due_date)
                return 1;
            else   
                return 0;
        }
    
        // SORT BY COMPLETED
        if(this.currentCriteria === "increasingStatus" 
         ||  this.currentCriteria === "decreasingStatus"){
            if (item1.completed < item2.completed)
                return -1;
            else if (item1.completed > item2.completed)
                return 1;
            else
                return 0;
        }
    }
}

export default sort_Transaction
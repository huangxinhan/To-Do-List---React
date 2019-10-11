import React, { Component } from 'react';

export class deleteItem_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, item, itemIndex){
        super()
        this.todoList = todoList;
        this.item = item;
        this.itemIndex = itemIndex;
     }
    
     doTransaction(){
        this.todoList.items.splice(this.itemIndex, 1);
        for (var i = 0; i < this.todoList.items.length; i++){
            this.todoList.items[i].key = i;
        }
     }

     undoTransaction(){
        this.todoList.items.splice(this.itemIndex, 0, this.item)
        for (var i = 0; i < this.todoList.items.length; i++){
            this.todoList.items[i].key = i;
        }
     }

     toString(){
        console.log(this.todoList.owner);
     }  
}

export default deleteItem_Transaction
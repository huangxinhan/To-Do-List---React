import React, { Component } from 'react';

export class changeOwner_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, initOwner, changedOwner){
        super()
        this.todoList = todoList;
        this.initOwner = initOwner;
        this.changedOwner = changedOwner;
     }
    
     doTransaction(){
        this.todoList.owner = this.changedOwner;
     }

     undoTransaction(){
        this.todoList.owner = this.initOwner;
     }

     toString(){
        console.log(this.todoList.owner);
     }  
}

export default changeOwner_Transaction
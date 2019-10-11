import React, { Component } from 'react';

export class changeName_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, initName, changedName){
        super()
        this.todoList = todoList;
        this.initName = initName;
        this.changedName = changedName
     }
    
     doTransaction(){
        if(!this.changedName.replace(/\s/g, '').length){
         this.todoList.name = "New TodoList"
        }
        else{
         this.todoList.name = this.changedName;
        }
      }

     undoTransaction(){
        this.todoList.name = this.initName;
     }

     toString(){
        console.log(this.todoList.name);
     }  
}

export default changeName_Transaction
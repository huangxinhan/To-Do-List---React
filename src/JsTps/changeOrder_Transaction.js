import React, { Component } from 'react';

export class changeOrder_Transaction extends Component{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, item1key, item2key, action){
        super()
        this.todoList = todoList;
        this.item1key = item1key;
        this.item2key = item2key;
        this.action = action;
     }
    
     doTransaction(){
        if(this.action === "up"){
            var tempItem;
                //This is assuming item 1 is being moved UP
            if(this.item1key === 0){
                //do nothing
            }
            else{
                tempItem = this.todoList.items[this.item2key];
                this.todoList.items[this.item2key] = this.todoList.items[this.item1key];
                this.todoList.items[this.item1key] = tempItem;
            for (var i = 0; i<this.todoList.items.length; i++){
                this.todoList.items[i].key = i;
                }
            }
        }

        if(this.action === "down"){
            var tempItem;
            if(this.item1key === (this.todoList.items.length - 1)){
                
            }
            else{
                tempItem = this.todoList.items[this.item2key];
                this.todoList.items[this.item2key] = this.todoList.items[this.item1key];
                this.todoList.items[this.item1key] = tempItem;
            for (var i = 0; i<this.todoList.items.length; i++){
                this.todoList.items[i].key = i;
                }
            }
        }



     }

     undoTransaction(){
         if(this.action === "up" || this.action === "down"){
            var tempItem;
            tempItem = this.todoList.items[this.item2key];
            this.todoList.items[this.item2key] = this.todoList.items[this.item1key];
            this.todoList.items[this.item1key] = tempItem;

            for (var i = 0; i<this.todoList.items.length; i++){
                this.todoList.items[i].key = i;
            }
        }

     }

     toString(){
        //console.log(this.todoList.name);
     }  
}

export default changeOrder_Transaction
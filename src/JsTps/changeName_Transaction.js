class ChangeName_Transaction{
    /** 
     * This method is called by jTPS when a transaction is executed
     */
     constructor(todoList, initName, changedName){
        this.todoList = todoList;
        this.initName = initName;
        this.changedName = changedName
     }
    
     doTransaction(){
        this.todoList.name = this.changedName;
     }

     undoTransaction(){
        this.todoList.name = this.initName;
     }

     toString(){
        console.log(this.todoList.name);
     }  
}
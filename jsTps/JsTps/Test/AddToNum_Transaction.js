class AddToNum_Transaction{
    
    constructor(initNum, initAmountToAdd){
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param {*} initNum 
     * @param {*} initAmountToAdd 
     */
    addToNum_Transaction(initNum, initAmountToAdd){
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    /**
     * this transaction simply adds the value to the num
     */
    doTransaction(){
        var oldNum = this.num.getNum();
        var newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method subtracts from the num
     */

    undoTransaction(){
         var oldNum = this.num.getNum();
         var newNum = oldNum - this.amountToAdd;
         this.num.setNum(newNum);
    
    }

    toString(){
        return "Add " + this.amountToAdd;
    }


}
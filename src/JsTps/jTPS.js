/**
 * This class is used for managing an abstrac transaction processing
 * system for the purpose of managing in an undo/redo system for an 
 * application. Note that one must specify all work done via 
 * custom transactions 
 */

import React, { Component } from 'react';

export class jTPS extends Component{
    //The transaction stack in the constructor 


    constructor(){
        super()
        this.transactions = [] //This stack keeps track of all the transactions
        this.mostRecentTransaction = -1; //Keeps track of where we are in the stack
        this.performingDo = false; //These can be turned on an off to signify Do or undo
        this.performingUndo = false;
    }

    /**
     * Tests to see if thet do (i.e. redo) operation is currently
     * being performed. If it is, true is returned, if not, then false
     */
    isPerformingDo(){
        return this.performingDo;
    }

    /**
     * Tests to see if the undo operation is currently being performed.
     * If it is, true is returned, if not, then false
     */
    isPerformingUndo(){
        return this.performingUndo;
    }

    /**
     * This funtion adds the transaction argument to the top of 
     * the transaction processing system stack and then executes it. Note that
     * when this method has completed transaction will be at the top of the stack, 
     * it will have completed, and the counter have been moved accordingly.
     * @param {*} transaction The custom transacton to be added to the 
     * transaction processing system stack and executed 
     */
    addTransaction(transaction){
        //Are there old undone etransactions on the stack that first need to be
        //cleared out? i.e. are we branching?
        if ((this.mostRecentTransaction< 0)|| (this.mostRecentTransaction < (this.transactions.length - 1))){
            for (var i = this.transactions.length-1; i> this.mostRecentTransaction; i--){
                this.transactions.splice(i, 1);
            }
        }

        //AND NOW ADD THE TRANSACTION
        this.transactions.push(transaction);

        //AND EXECUTE IT
        this.doTransaction();
    }

    /**
     * This function executes the transaction at the location of the counter,
     * them moving the TPS counter. Note that this may be the transaction
     * at the very top of the TPS stack or somewhere in the middle (i.e. a redo)
     */
    doTransaction(){ //FIX
        if (this.hasTransactionToRedo()){
            this.performingDo = true;
            //var transaction = new jTPS_Transaction();
            var transaction = this.transactions[this.mostRecentTransaction + 1];
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }

    /**
     * This function checks to see if there is a transaction in undo. If there is, 
     * it will return it. if not, it will return null
     */
    peekUndo(){
        if(this.hasTransactionToUndo()){
            return this.transactions[this.mostRecentTransaction];
        }
        else{
            return null;
        }
    }

    /**
     * This function checks to see if there is a transaction to redo. If there is, 
     * it will return it. If not, it will return null
     */
    peekDo(){
        if(this.hasTransactionToRedo()){
            return this.transactions[this.mostRecentTransaction+1];
        }
        else{
            return null;
        }
    }

    /**
     * This function gets the most recently executed transaction on the 
     * TPS stack and undoes it, moving the TPS counter accordingly
     */
    undoTransaction(){ //FIX
        if(this.hasTransactionToUndo()){
            this.performingUndo = true;
            var transaction = this.transactions[this.mostRecentTransaction];
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }

    /**
     * This method clears all the transactions from the TPS stack and
     * resets the counter that keeps track oof the location on top of the stack.
     */
    clearAllTransactions(){
        //REMOVE ALL THE TRANSACTIONS
        this.transactions.length = 0;

        //MAKE SURE TO RESET THE LOCATION OF THE 
        //TOP OF THE TPS STACK TOO
        this.mostRecentTransaction = -1;
    }

    /**
     * Accessor method that returns the number of transactions currently on the
     * transaction stack. This includes those that may have been done, undone, and redone.
     */
    getSize(){
        return this.transactions.length;
    }

    /**
     * This method returns the number of transactions currently in the transaction stack
     * that can be redone, meaning that they
     * have been added and done, and then undone
     */
    getRedoSize(){
        return this.getSize() - this.mostRecentTransaction - 1;
    }

    /**
     * This method returns the number of transactions currently in the
     * transaction stack that an be undone
     */
    getUndoSize(){
        return this.mostRecentTransaction + 1;
    }

    /**
     * This method tests to see if there is a transaction on the stack that
     * can be undone at the time this function is called
     */
    hasTransactionToUndo(){
        if (this.mostRecentTransaction >= 0){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * This method tests to see if there is a transaction on the stack that
     * can be redone at the time this function is called
     */
    hasTransactionToRedo(){
        if(this.mostRecentTransaction < (this.transactions.length - 1)){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * This method builds and returns a textual summary of the current transaction
     * processing system. This includes the toString of each transaction 
     * in the stack
     */

     toString(){
         var text = "--Number of Transactions: " + this.transactions.length + "\n";
         text += "--Current Index on Stack: " + this.mostRecentTransaction + "\n";
         text += "--Current Transaction StackL\n";
         for (var i = 0; i <= this.mostRecentTransaction; i++){
             var jT = this.transactions[i];
             text += "----" + jT.toString() + "\n";
         }
         return text;
     }

}

export default jTPS;
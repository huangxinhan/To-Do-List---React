class OrMask_Transaction{
    
    constructor(initNum, initIntNum, initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    OrMask_Transaction(initNum, initIntNum, initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction(){
        this.num.orMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "Or mask " + this.mask;
    }

}
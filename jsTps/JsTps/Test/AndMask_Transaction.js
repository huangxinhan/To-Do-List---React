class AndMask_Transaction{

    constructor(initNum, initIntNum, initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    AndMask_Transaction(initNum, initIntNum, initMask){
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction(){
        this.num.andMask(this.mask);
    }

    undoTransaction(){
        this.num.setNum(this.intNum);
    }

    toString(){
        return "And mask " + this.mask;
    }
}
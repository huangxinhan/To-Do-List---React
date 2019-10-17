//Now we are going to port all the unit tests on here and create the test results. 
// The results of the tests are going to be displayed on the web browser 


window.onload = function(){
    testAdd();
    testAndMask();
    testUndo();
    testRedo();
    testClear();


    function testAdd(){
        var tps = new jTPS();
        var num = new Num();
        document.getElementById('1').innerHTML = num.getNum();
        console.assert(0 === num.getNum())
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        document.getElementById('2').innerHTML = num.getNum();
        console.assert(5 === num.getNum())
        document.getElementById('3').innerHTML = tps.getSize();
        console.assert(1 === tps.getSize())
        document.getElementById('4').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize())
        document.getElementById('5').innerHTML = tps.getUndoSize();
        console.assert(1 === tps.getUndoSize())
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        document.getElementById('6').innerHTML = num.getNum();
        console.assert(15 === num.getNum())
        document.getElementById('7').innerHTML = tps.getSize();
        console.assert(2 === tps.getSize())
        document.getElementById('8').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize())
        document.getElementById('9').innerHTML = tps.getUndoSize();
        console.assert(2 == tps.getUndoSize())
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('10').innerHTML = num.getNum();
        console.assert(35 === num.getNum())
        document.getElementById('11').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize())
        document.getElementById('12').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('13').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

    }

    function testAndMask(){
        var tps = new jTPS();
        var num = new Num();
        document.getElementById('14').innerHTML = num.getNum();
        console.assert(0 === num.getNum())
        tps.addTransaction(new AddToNum_Transaction(num, 12));
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        document.getElementById('15').innerHTML = num.getNum();
        console.assert(4 === num.getNum())
        document.getElementById('16').innerHTML = tps.getSize();
        console.assert(2 === tps.getSize())
        tps.undoTransaction();
        document.getElementById('17').innerHTML = num.getNum();
        console.assert(12 === num.getNum())
        document.getElementById('18').innerHTML = tps.getSize(); 
        console.assert(2 === tps.getSize())
        document.getElementById('19').innerHTML = tps.getRedoSize();
        console.assert(1 === tps.getRedoSize())
        document.getElementById('20').innerHTML = tps.getUndoSize();    
        console.assert(1 == tps.getUndoSize())          
    }

    function testUndo(){
        var tps = new jTPS();
        var num = new Num();
        document.getElementById('21').innerHTML = num.getNum();
        console.assert(0 === num.getNum());
        document.getElementById('22').innerHTML = tps.hasTransactionToUndo();
        console.assert(false === tps.hasTransactionToUndo());
        document.getElementById('23').innerHTML = tps.hasTransactionToRedo(); 
        console.assert(false === tps.hasTransactionToRedo());
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('24').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('25').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('26').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('27').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('28').innerHTML = tps.getSize();
        console.assert(3=== tps.getSize());
        document.getElementById('29').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('30').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.undoTransaction();
        document.getElementById('31').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('32').innerHTML = tps.hasTransactionToRedo();
        console.assert(true === tps.hasTransactionToRedo());
        document.getElementById('33').innerHTML = num.getNum();
        console.assert(15 === num.getNum());
        document.getElementById('34').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('35').innerHTML = tps.getRedoSize();
        console.assert(1 === tps.getRedoSize());
        document.getElementById('36').innerHTML = tps.getUndoSize();
        console.assert(2 === tps.getUndoSize());

        tps.undoTransaction();
        document.getElementById('37').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('38').innerHTML = tps.hasTransactionToRedo();
        console.assert(true === tps.hasTransactionToRedo());
        document.getElementById('39').innerHTML = num.getNum();
        console.assert(5 === num.getNum())
        document.getElementById('40').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize())
        document.getElementById('41').innerHTML = tps.getRedoSize();
        console.assert(2 === tps.getRedoSize())
        document.getElementById('42').innerHTML = tps.getUndoSize();
        console.assert(1 === tps.getUndoSize());

        tps.undoTransaction();
        document.getElementById('43').innerHTML = tps.hasTransactionToUndo();
        console.assert(false === tps.hasTransactionToUndo());
        document.getElementById('44').innerHTML = tps.hasTransactionToRedo();
        console.assert(true === tps.hasTransactionToRedo());
        document.getElementById('45').innerHTML = num.getNum();
        console.assert(0 === num.getNum());
        document.getElementById('46').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('47').innerHTML = tps.getRedoSize();
        console.assert(3 === tps.getRedoSize());
        document.getElementById('48').innerHTML = tps.getUndoSize();
        console.assert(0 === tps.getUndoSize());

        tps.undoTransaction();
        document.getElementById('49').innerHTML = tps.hasTransactionToUndo();
        console.assert(false === tps.hasTransactionToUndo());
        document.getElementById('50').innerHTML = tps.hasTransactionToRedo();
        console.assert(true === tps.hasTransactionToRedo());
        document.getElementById('51').innerHTML = num.getNum();
        console.assert(0 === num.getNum()); 
        document.getElementById('52').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('53').innerHTML = tps.getRedoSize();
        console.assert(3 === tps.getRedoSize());
        document.getElementById('54').innerHTML = tps.getUndoSize();
        console.assert(0 === tps.getUndoSize());
    }

    function testRedo(){
        var tps = new jTPS();
        var num = new Num();
        
        document.getElementById('55').innerHTML = num.getNum();
        console.assert(0 === num.getNum());
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('56').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('57').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('58').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('59').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('60').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('61').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.undoTransaction();
        tps.doTransaction();
        document.getElementById('62').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('63').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('64').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('65').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('66').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('67').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        document.getElementById('68').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('69').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('70').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('71').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('72').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('73').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());


        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        document.getElementById('74').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('75').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('76').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('77').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('78').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('79').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        document.getElementById('80').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('81').innerHTML = tps.hasTransactionToRedo();
        console.assert(true === tps.hasTransactionToRedo());
        document.getElementById('82').innerHTML = num.getNum();
        console.assert(15 === num.getNum());
        document.getElementById('83').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('84').innerHTML = tps.getRedoSize();
        console.assert(1 === tps.getRedoSize());
        document.getElementById('85').innerHTML = tps.getUndoSize();
        console.assert(2 === tps.getUndoSize());

        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        document.getElementById('86').innerHTML = tps.hasTransactionToUndo();
        console.assert(true === tps.hasTransactionToUndo());
        document.getElementById('87').innerHTML = tps.hasTransactionToRedo();
        console.assert(false === tps.hasTransactionToRedo());
        document.getElementById('88').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('89').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('90').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('91').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());
    }

    function testClear(){
        var tps = new jTPS();
        var num = new Num();
        document.getElementById('92').innerHTML = num.getNum();
        console.assert(0 === num.getNum());

        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('93').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('94').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('95').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('96').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.clearAllTransactions();
        document.getElementById('97').innerHTML = num.getNum();
        console.assert(35 === num.getNum());
        document.getElementById('98').innerHTML = tps.getSize();
        console.assert(0 === tps.getSize());
        document.getElementById('99').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('100').innerHTML = tps.getUndoSize();
        console.assert(0 === tps.getUndoSize());

        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('101').innerHTML = num.getNum();
        console.assert(70 === num.getNum());
        document.getElementById('102').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('103').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('104').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

        tps.clearAllTransactions();
        document.getElementById('105').innerHTML = num.getNum();
        console.assert(70 === num.getNum());
        document.getElementById('106').innerHTML = tps.getSize();
        console.assert(0 === tps.getSize());
        document.getElementById('107').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('108').innerHTML = tps.getUndoSize();
        console.assert(0 === tps.getUndoSize());

        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        document.getElementById('109').innerHTML = num.getNum();
        console.assert(105 === num.getNum());
        document.getElementById('110').innerHTML = tps.getSize();
        console.assert(3 === tps.getSize());
        document.getElementById('111').innerHTML = tps.getRedoSize();
        console.assert(0 === tps.getRedoSize());
        document.getElementById('112').innerHTML = tps.getUndoSize();
        console.assert(3 === tps.getUndoSize());

    }
}

var tps = new jTPS();
var num = new Num();


window.onload = function(){
document.getElementById("popup").style.display = "none";

var textfield = document.getElementById('input');

document.getElementById('amount').addEventListener("keypress", function(e){
    if(e.keyCode == 13){
    var amount = Number(document.getElementById('amount').value);
    transaction = new AddToNum_Transaction(num, amount);
    tps.addTransaction(transaction);
    document.getElementById('amount').value = "";
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").style.disabled = true;
    textfield.disabled = false;
    textfield.value = "";
    updateNameDisplay();
    }
})


textfield.addEventListener("keyup", function(){
    if(textfield.value == "1"){
        document.getElementById("popup").style.display = "block";
        document.getElementById("popup").style.disabled = false;
        textfield.disabled = true;
        /*textfield.disabled = true;
        var amount = Number("5")
        transaction = new AddToNum_Transaction(num, amount);
        tps.addTransaction(transaction);
        textfield.value = "";
        textfield.disabled = false;*/
        //updateNameDisplay();
    }
    if(textfield.value == "2"){
        tps.undoTransaction();
        textfield.value = "";
        updateNameDisplay();
    }
    if(textfield.value == "3"){
        tps.doTransaction();
        textfield.value = "";
        updateNameDisplay();
    }
    if(textfield.value == "4"){
        tps.clearAllTransactions();
        textfield.value = "";
        updateNameDisplay();
    }
    if(textfield.value == "5"){
        tps.clearAllTransactions();
        num.setNum(0);
        textfield.value = ""
        updateNameDisplay();
    }
    else{
        textfield.value = ""
    }
})

updateNameDisplay();


function updateNameDisplay(){
    //var randomValue = Math.random();
    //var textfield = document.getElementById('input');
    /*document.getElementById('amount').addEventListener("keypress", function(e){
        if(e.keyCode == 13){
        var amount = Number(document.getElementById('amount').value);
        transaction = new AddToNum_Transaction(num, amount);
        tps.addTransaction(transaction);
        document.getElementById('amount').value = "";
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup").style.disabled = true;
        textfield.disabled = false;
        }
    })*/

    document.getElementById('jstps').innerHTML = "CURRENT jsTPS:"
    document.getElementById('jstpsNow').innerHTML = tps.toString();
    document.getElementById('num').innerHTML = "num is " + num.getNum();
}
}

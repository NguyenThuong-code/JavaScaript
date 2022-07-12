

function addition() {   
    n1 = document.getElementById("input1").value;
var number1 = parseInt(n1);
n2 = document.getElementById("input2").value;
var number2 = parseInt(n2);
var sum = number1+ number2;
console.log(sum);
}

function subtraction(){
    n1 = document.getElementById("input1").value;
    var number1 = parseInt(n1);
    n2 = document.getElementById("input2").value;
    var number2 = parseInt(n2);
    var sub = number1-number2;
    console.log(sub)
}
function multiplication(){
    n1 = document.getElementById("input1").value;
    var number1 = parseInt(n1);
    n2 = document.getElementById("input2").value;
    var number2 = parseInt(n2);
    var mul =number1* number2;
    console.log(mul)
}
function division(){
    n1 = document.getElementById("input1").value;
    var number1 = parseInt(n1);
    n2 = document.getElementById("input2").value;
    var number2 = parseInt(n2);
    var di= number1/number2;
    console.log(di);

}
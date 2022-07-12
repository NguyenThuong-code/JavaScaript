function convertValue(){
amount = document.getElementById("input").value;
var a= parseInt(amount);
var f= document.getElementById("fcurrent").value;
var t = document.getElementById("tcurrent").value;
var c=t/f;
var b=a/c
document.getElementById('demo').innerHTML= b;
}






// function update1(){
// var f = document.getElementById("fcurrent").value=="us";

// }
// function update2(){
// var t = document.getElementById("tcurrent").value =="vietNam";

// }
// function convertValue() {
//     var x = document.getElementById("input").value
//     document.getElementById("demo").innerHTML=x*23000;
// }

function c(val){
  document.getElementById("display").value=val;
}

function v(val){
  document.getElementById("display").value+=val;
}

function equal(){
  try{
    c(eval(document.getElementById("display").value))
  }
  catch(equal){
    c("error")
  }
}



// Here, I have created three functions. Function c(val) is used for clearing the data from the display. When we click on "C" button, then onclick='c("")' event runs and searches for c(val) function and displays the value according to the parameter passed inside it (here, we have not passed any parameter so the input screen appears blank or clear).
//
// Function v(val) is used for typing numbers as well as mathematical operators.
//
// Function equal() is used for evaluating, i.e., on clicking "=" button, value inside the Id="display" is solved.
//
// You can also download the source file for viewing.












// var message = "Hello World!";
// alert(message);
// console.log("I am a message");
// confirm("Would you like to continue?")
//
// var num = parseInt(prompt("What did you score?"));
// if( num >= 90){
//  alert("Your grade is  A!");
// }else if( num >= 80 && num < 90){
//   alert("Your grade is  B!");
// }else if( num >= 70 && num < 80){
//   alert("Your grade is  C!");
// }else if( num >= 60 && num < 70){
//   alert("Your grade is  D!");
// }else if( num >= 50 && num < 60){
//   alert("Your grade is  E!");
// }else if( num >= 40 && num < 50){
//   alert("Your grade is  F!");
// }else if( num >= 30 && num < 40){
//   alert("Your grade is  G!");
// }else if( num >= 20 && num < 30){
//   alert("Your grade is  H!");
// }else if( num >= 10 && num < 20){
//   alert("Your grade is  I!");
// }else{
//   alert("your grade is J!")
// }

// for( var num = 0; num < 101; num += 2){
//   console.log(num);
// }

function myFunction1() {
  var innerHTML = document.getElementById("button1").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button1").innerHTML = "Less";
  } else {
    document.getElementById("button1").innerHTML = "More";
  }
}
function myFunction2() {
  var innerHTML = document.getElementById("button2").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button2").innerHTML = "Less";
  } else {
    document.getElementById("button2").innerHTML = "More";
  }
}
function myFunction3() {
  var innerHTML = document.getElementById("button3").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button3").innerHTML = "Less";
  } else {
    document.getElementById("button3").innerHTML = "More";
  }
}
function myFunction4() {
  var innerHTML = document.getElementById("button4").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button4").innerHTML = "Less";
  } else {
    document.getElementById("button4").innerHTML = "More";
  }
}
function myFunction5() {
  var innerHTML = document.getElementById("button5").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button5").innerHTML = "Less";
  } else {
    document.getElementById("button5").innerHTML = "More";
  }
}
function myFunction6() {
  var innerHTML = document.getElementById("button6").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button6").innerHTML = "Less";
  } else {
    document.getElementById("button6").innerHTML = "More";
  }
}
function myFunction7() {
  var innerHTML = document.getElementById("button7").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button7").innerHTML = "Less";
  } else {
    document.getElementById("button7").innerHTML = "More";
  }
}
function myFunction8() {
  var innerHTML = document.getElementById("button8").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button8").innerHTML = "Less";
  } else {
    document.getElementById("button8").innerHTML = "More";
  }
}
function myFunction9() {
  var innerHTML = document.getElementById("button9").innerHTML;
  if(innerHTML == "More") {
    document.getElementById("button9").innerHTML = "Less";
  } else {
    document.getElementById("button9").innerHTML = "More";
  }
}
$(document).ready(function(){
  $("p#more1").hide();
  $("p.more2").hide();
  $("p#more3").hide();
  $("p.more4").hide();
  $("p#more5").hide();
  $("p#more6").hide();
  $("p#more7").hide();
  $("p.more8").hide();
  $("p.more9").hide();
  $("button#button1").click(function(){
    $("p#less1").toggle();
    $("p#more1").toggle();
  });
  $("button#button2").click(function(){
    $("p#less2").toggle();
    $("p.more2").toggle();
  });
  $("button#button3").click(function(){
    $("p#less3").toggle();
    $("p#more3").toggle();
  });
  $("button#button4").click(function(){
    $("p#less4").toggle();
    $("p.more4").toggle();
  });
  $("button#button5").click(function(){
    $("p#less5").toggle();
    $("p#more5").toggle();
  });
  $("button#button6").click(function(){
    $("p#less6").toggle();
    $("p#more6").toggle();
  });
  $("button#button7").click(function(){
    $("p#less7").toggle();
    $("p#more7").toggle();
  });
  $("button#button8").click(function(){
    $("p#less8").toggle();
    $("p.more8").toggle();
  });
  $("button#button9").click(function(){
    $("p#less9").toggle();
    $("p.more9").toggle();
  });
});

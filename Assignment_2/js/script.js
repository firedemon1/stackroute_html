function myFunction(button) {
  var innerHTML = document.getElementById(button).innerHTML;
  console.log(button+"acac");
  if(innerHTML == "More") {
    document.getElementById(button).innerHTML = "Less";
  } else {
    document.getElementById(button).innerHTML = "More";
  }
  var num = button.substring(6, 7);
  console.log(num);
  $("p#less"+num).toggle();
  $("p.more"+num).toggle();
}

$(document).ready(function(){
  for(var i=1;i<=9;i++) {
    $("p.more"+i).hide();
  }
});

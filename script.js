

function checkAns(val){
    
  if (val===4){
      document.getElementById("btn4").style.backgroundColor = "green";
      document.getElementById("btn4").style.color = "white";
      document.getElementById("btn4").style.transition = "0.3s";

  }
  else{
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("btn1").style.transition = "0.3s";


    document.getElementById("btn2").style.backgroundColor = "red";
    document.getElementById("btn2").style.color = "white";
    document.getElementById("btn2").style.transition = "0.3s";


    document.getElementById("btn3").style.backgroundColor = "red";
    document.getElementById("btn3").style.color = "white";
    document.getElementById("btn3").style.transition = "0.3s";


    document.getElementById("btn4").style.backgroundColor = "green";
    document.getElementById("btn4").style.color = "white";
    document.getElementById("btn4").style.transition = "0.3s";


  }
}

//Notification
function start(){
  alert("Welcome to my website!");
}

//Conditional & Event handler - confirm submission
function confirmation(){
  const answer = confirm("Are you confirm to submit the form?");
  
  //If user press 
  if(answer){
    return true;
  }
  //If not
  else {
    return false;
  }
}

//Change color - 1
function brightColor(){
  document.getElementById("main").style.backgroundColor = "#95D4D1";
  document.getElementById("main").style.color = "#5D400D";
  var link = document.getElementsByTagName("a");
  
  //Loop through all anchor tag with href attr
  for(var i = 0; i < link.length; i++)  {
    if (link[i].href) {
      link[i].style.color = "#1B385C";
    }
  }
}

//Change color - 2
function neutralColor(){
  document.getElementById("main").style.backgroundColor = "#3F5C24";
  document.getElementById("main").style.color = "#EB4CE5";
  var link = document.getElementsByTagName("a");
  
  //Loop through all anchor tag with href attr
  for(var i = 0; i < link.length; i++)  {
    if (link[i].href) {
      link[i].style.color = "#EBDB40";
    }
  }
}

//Change color - default
function defaultColor(){
  document.getElementById("main").style.backgroundColor = "#252525";
  document.getElementById("main").style.color = "white";
  var link = document.getElementsByTagName("a");
  
  //Loop through all anchor tag with href attr
  for(var i = 0; i < link.length; i++)  {
    if (link[i].href) {
      link[i].style.color = "cyan";
    }
  }
}


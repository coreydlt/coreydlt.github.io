console.log("hi")
var attitude=null;
    tools=null;
    wear=null;
    pagetitle = document.getElementById('pagetitle');
    pageTitleText = pagetitle.innerHTML
    tryAgain=document.getElementById('tryAgain');
    quizWrapper=document.getElementById('quizWrapper');
    result=document.getElementById('result');
    fromSubmit=document.getElementById('fromSubmit');
    tryAgain.addEventListener("click", resetQuiz);
    fromSubmit.addEventListener("click",processResults );

function processResults(){
attitude= document.querySelector('input[name="attitude"]:checked');
tools=document.querySelector('input[name="tools"]:checked');
wear=document.querySelector('input[name="wear"]:checked');
if(attitude== null){
  alert("Complete all questions before continuing.");
}else if (wear==null) {
  alert("Complete all questions before continuing.");
}else if(tools == null){
  alert("Complete all questions before continuing.");
}else{
  var personality = getPersonality()
console.log(personality)
  quizWrapper.style.display = "none"
  fromSubmit.style.display = "none"
  result.style.display = "block"
  tryAgain.style.display = "block"
  if(personality == "Aural"){
    pagetitle.innerHTML = "You're Aural"
    result.style.backgroundImage = "url('img/download.png')"
  }else if(personality == "Logical"){
    pagetitle.innerHTML = "You're Logical"
    result.style.backgroundImage = "url('img/download-1.png')"
  }else if(personality == "Physical"){
  pagetitle.innerHTML = "You're Physical"
  result.style.backgroundImage = "url('img/images.png')"
  }
  else if(personality == "Social"){
    pagetitle.innerHTML = "You're Social"
    result.style.backgroundImage = "url('img/download-2.jpg')"
  }
}

}

function getPersonality(){
var score=0
if(attitude.id ==="Outgoing"){
score += 0;
}
else if (attitude.id==="Shellfish") {
score += 2;
}
else if (attitude.id==="Careful") {
score += 1;
}
else if (attitude.id==="Don’t care") {
score += 3;
}
console.log("attitude score");
console.log(score);
if(tools.id ==="Grappling hook"){
score += 0;
}
else if (tools.id==="Money") {
score += 2;
}
else if (tools.id==="Axe") {
score += 1;
}
else if (tools.id==="Book") {
score += 3;
}
console.log("tools score");
console.log(score);
if(wear.id ==="Sweater"){
score += 0;
}
else if (wear.id==="Boots") {
score += 2;
}
else if (wear.id==="Fez") {
score += 1;
}
else if (wear.id==="Vest") {
score += 3;
}
console.log("end score");
console.log(score);
if(score<=1){
  return "Aural"
}
else if(score >= 2 && score <=3) {
  return "Logical"
}
else if(score>=4 && score <= 5) {
  return "Physical"
}
else if(score>=6 && score <= 10) {
  return "Social"

}


}

function resetQuiz(){
	pagetitle.innerHTML =  pageTitleText
	quizWrapper.style.display = "flex"
	result.style.display = "none"
    tryAgain.style.display = "none"
    fromSubmit.style.display = "block"
    attitude.checked = false
    tools.checked = false
    wear.checked = false
    attitude=null;
        tools=null;
        wear=null;
}

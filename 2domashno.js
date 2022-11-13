var seconds=0;
var pom;
pom=document.getElementById('timer'); 
function incrementSeconds(){
    seconds+=1;
    pom.innerText=seconds;
}
setInterval(incrementSeconds(),1000);

var slikaZajak=document.createElement("img");
slikaZajak.setAttribute("src","zaj.png");
var slikaZelka=document.createElement("img");
slikaZelka.setAttribute("src","zel.png");
var div1;
div1=document.getElementById("div1");
div1.appendChild(slikaZajak);
div1.appendChild(slikaZelka);
var posZajak=1;
var posZelka=1;
var startButton=document.getElementById("startButton");

var intervalGame=setInterval(startGame,1000);

startButton.addEventListener("click",startGame(),false);

function generateZajak(){
    var pom=Math.floor(1+Math.random()*10);
    if(pom==1||2){
        posZajak=posZajak; 
    }
    if(pom==3||4){
        posZajak+=9;
    }
    if(pom==5){
        if(posZajak<=12){
            posZajak=1;
        }
        else{
            posZajak-=12;
        }
    }
    if(pom==6||7||8){
        posZajak+=1;
    }
    if(pom==9||10){
        if(posZajak<=2){
            posZajak=1;
        }
        else{
            posZajak-=2;
        }
    }
}

function generateZelka(){
    var pom=Math.floor(1+Math.random()*10);
    if(pom==1||2||3||4||5){
        posZelka+=3;
    }
    if(pom==6||7)
    {
        if(posZelka<=6){
            posZelka=1;
        }
        else{
            posZelka-=6;
        }
    }
    if(pom==8||9||10){
        posZelka+=1;
    }
}
function pocni(){
    window.alert("START");
    intervalGame=setInterval(startGame(),1000);

}

function startGame(){
    var staraPozZajak=document.getElementById("div"+posZajak);
    staraPozZajak.removeChild(slikaZajak);
    var staraPozZelka=document.getElementById("div"+posZelka);
    staraPozZelka.removeChild(slikaZelka);
    generateZelka(); 
    generateZajak();
    if(posZajak>70){
        posZajak=70;
    }
    if(posZelka>70){
        posZelka=70;
    }
    setImages();
    if(posZelka==70||posZajak==70){
        endGame();
    }
    else{
        var intervalGame=setInterval(startGame,1000);
    }  
}
function setImages(){
    var novaPozZelka=document.getElementById("div" + posZelka);
    var novaPozZajak=document.getElementById("div" + posZajak);
    novaPozZajak.appendChild(slikaZajak);
    novaPozZelka.appendChild(slikaZelka);
    if(posZajak==posZelka){
        window.alert("AUCH !!!");
    }
}
function endGame(){
    clearInterval(intervalGame);
    if(posZajak==70 && posZelka==70){
        window.alert("UPS!");
    }
    else {
        if(posZajak==70){
            window.alert("POBEDI ZAJAKOT!");
        }
        if(posZelka==70){
            window.alert("POBEDI ZELKATA!");
        }
    }
}
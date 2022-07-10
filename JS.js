 
 //--------Global varible-------------
 var  myboard = document.getElementById("board");

 var  boardwidth = 600; 
   var boardheight = 300;
 var LuckyNumber  = 5;
 var idCounter = 0;

 function initBoard(){

   var BlacBOXkbool = true;
   for (let boxTotalHeight = 0; boxTotalHeight < boardheight; boxTotalHeight= boxTotalHeight+ 50) {
    
    for (let boxTotalWidth = 0; boxTotalWidth < boardwidth; boxTotalWidth = boxTotalWidth+ 50) {
    
     if (BlacBOXkbool){
makeBoxonBoard("black");
     }else{
        makeBoxonBoard("white"); 
     }
     BlacBOXkbool = ! BlacBOXkbool;
    }
    BlacBOXkbool = ! BlacBOXkbool;

   }

 }
 function  makeBoxonBoard(colorOfbox){

    var newBox = document.createElement("div");
    newBox.id = ++ idCounter;
    newBox.classList.add("box");
    newBox.classList.add(colorOfbox +"Box");
       myboard.appendChild(newBox);
    if(idCounter === LuckyNumber){
        newBox.classList.add("player");

    }
 }
 function move(offsetPos){
    var playerElment = document.getElementsByClassName("player")[0];
    var playerNextElmentId = Number(playerElment.id)  + Number(offsetPos);
    var playernextBox  = document.getElementById(playerNextElmentId);
    console.log(playernextBox);
    if(playerNextElmentId !==0 && playerNextElmentId <= idCounter){
 playerElment.classList.toggle("player");
   playernextBox.classList.toggle("player");
    }
   

 }
//----------Line code run---------


document.getElementsByTagName("body")[0].style.backgroundColor ="gray";
initBoard();
move();
//makeBoxonBoard("blue");    newBox.style.backgroundColor = colorOfbox;
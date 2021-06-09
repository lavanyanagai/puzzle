var move=0 ,s=0;
function shuffle() {
for (var row=1;row<=5;row++) { 
   for (var column=1;column<=5;column++) {  
  
    var row2=Math.floor(Math.random()*5 + 1); 
    var column2=Math.floor(Math.random()*5 + 1); 
       swapTiles("cell"+row+column,"cell"+row2+column2); 
  } 
} 
}

function sqshuffle() {
for (var row=1;row<=3;row++) { 
   for (var column=1;column<=3;column++) {  
  
    var row2=Math.floor(Math.random()*3 + 1); 
    var column2=Math.floor(Math.random()*3 + 1); 
       swapTiles("s"+row+column,"s"+row2+column2); 
  } 
} 
}


function resettimer()
{ clearInterval(timeVar);
  totalSeconds = 0;
  timeVar=setInterval(setTime, 1000);
} 

function reload()
{sqshuffle();
 shuffle();
 document.getElementById("mov") .innerHTML= 0; 
 document.getElementById("win").style.display = "none";
 move=0; totalSeconds = 0;
 clearInterval(timeVar);
 stopTimer(); 
 }

function stopTimer()
{ document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
   var m= document.getElementById("minutes").innerHTML ;
   var s= document.getElementById("seconds").innerHTML ; 
   document.getElementById("timer").innerHTML = m + ":" + s;    
} 


function newgame()
{ reload();
  resettimer();  
}
 

function swapTiles(cell1,cell2) 
{  
  var temp = document.getElementById(cell1).style.backgroundColor;
  document.getElementById(cell1).style.backgroundColor =        document.getElementById(cell2).style.backgroundColor;
  document.getElementById(cell2).style.backgroundColor = temp;
  issolved();
}


function clickTile(row,column) {
   
         //Checking if grey tile on the right
       if (column<5) {
         if ( document.getElementById("cell"+row+(column+1)).style.backgroundColor=="grey") 
         {  swapTiles("cell"+row+column,"cell"+row+(column+1));
           move++;
           if((move==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
   (document.getElementById("minutes").innerHTML =="00"))
  {  resettimer();}
  document.getElementById("mov") .innerHTML= move;     
           return;
         }
       }
       //Checking if grey tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).style.backgroundColor=="grey") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
            move++;
if((move==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
   (document.getElementById("minutes").innerHTML =="00"))
  {  resettimer();}
  document.getElementById("mov") .innerHTML= move;           
           return;
         }
       }
         //Checking if grey tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).style.backgroundColor=="grey") {
          
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
            move++;
           if((move==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
                 (document.getElementById("minutes").innerHTML =="00"))
             {  resettimer();}
            document.getElementById("mov") .innerHTML= move;          
           return;
         }
       }
       //Checking if grey tile is below
       if (row<5) {
         if ( document.getElementById("cell"+(row+1)+column).style.backgroundColor=="grey") {
            
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
            move++;
  if((move==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
   (document.getElementById("minutes").innerHTML =="00"))
  {  resettimer();}         
 document.getElementById("mov") .innerHTML= move;          
           return;
         }
       } 
  }


function issolved()
{
  for (var row=1;row<=3;row++)
  { 
  for (var col=1;col<=3;col++)
  { 
   if( document.getElementById("s"+row+col).style.backgroundColor != 
      document.getElementById("cell"+(row+1)+(col+1)) .style.backgroundColor)
   {return;}
 }
 }
 clearInterval(timeVar);
 var sec = document.getElementById("seconds").innerHTML;
 var min= document.getElementById("minutes").innerHTML;  
 var s=score(min,sec,move);
 document.getElementById("win").style.display = "block";
 document.getElementById("message").innerText=" SCORE : "+s; 
 } 

function score(min,sec,move)
{ min = min*60;
  var totalsec= parseInt(min) +parseInt(sec);
  var s1=(totalsec>3600) ? 0 : ((3600-totalsec)*10);
  var s2 =(move>200) ? 0: ((200-move)*10);
  return (s1+s2) ;
}

var totalSeconds = 0;
var timeVar= setInterval(setTime, 1000);

function setTime()
{  ++totalSeconds;
   document.getElementById("seconds").innerHTML = pad(totalSeconds%60);
   document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds/60));
   var m= document.getElementById("minutes").innerHTML ;
   var s= document.getElementById("seconds").innerHTML ; 
   document.getElementById("timer").innerHTML = m + ":" + s;    
}

function pad(val)
{  var valString = val + "";
   if(valString.length < 2)
     { return "0" + valString; }
   else
     { return valString; }
}


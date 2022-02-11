let reddice = document.getElementById("rd");
let greendice = document.getElementById("gd");
let bluedice = document.getElementById("bd");
let yellowdice = document.getElementById("yd");
var turncolor = ["red", "blue", "yellow", "green"];
document.getElementById('winners').style.display='none';
var indx = 1;
var positions=[];
var posI=0;
var id = ["rd", "gd", "yd", "bd"];
var winredpawn = 0;
var winbluepawn = 0;
var wingreenpawn = 0;
var winyellowpawn = 0;
var winsp=[0,0,0,0];
var winposition = [1, 2, 3, 4];
var winindx = 0;
var winR = 0, winB = 0, winG = 0, winY = 0;
let start = document.getElementById('start');
var completeturn = 0;
var previousnmber = 0;
var disableroll = 0;
reddice.addEventListener('click', function () {
  diceroll(this.id);
});
greendice.addEventListener('click', function () {
  diceroll(this.id);
});
bluedice.addEventListener('click', function () {
  diceroll(this.id);
});
yellowdice.addEventListener('click', function () {
  diceroll(this.id);
});

//reds pawns
var redpawn1 = document.getElementById("redpawn1");
var redpawn2 = document.getElementById("redpawn2");
var redpawn3 = document.getElementById("redpawn3");
var redpawn4 = document.getElementById("redpawn4");

//greenpawn
var greenpawn1 = document.getElementById("greenpawn1");
var greenpawn2 = document.getElementById("greenpawn2");
var greenpawn3 = document.getElementById("greenpawn3");
var greenpawn4 = document.getElementById("greenpawn4");

//blue pawn
var bluepawn1 = document.getElementById('bluepawn1');
var bluepawn2 = document.getElementById('bluepawn2');
var bluepawn3 = document.getElementById('bluepawn3');
var bluepawn4 = document.getElementById('bluepawn4');

//yellowpawn
var yellowpawn1 = document.getElementById("yellow1");
var yellowpawn2 = document.getElementById("yellow2");
var yellowpawn3 = document.getElementById("yellow3");
var yellowpawn4 = document.getElementById("yellow4");
//roll value
var result = 0;
//get all pawn
goti = document.getElementsByClassName('goti');
//get all ways
ways = document.getElementsByClassName('way');
ways1 = document.getElementsByClassName('way1');
//move the pawn
for (pawnclick of goti) {
  pawnclick.addEventListener('click', function (pawn) {
    console.log(pawn.target.id);
    if (((pawn.target.id === 'redpawn1' || pawn.target.id === 'redpawn2' || pawn.target.id === 'redpawn3' ||
      pawn.target.id == 'redpawn4') && (indx === 1)) ||
      ((pawn.target.id === 'bluepawn1' || pawn.target.id === 'bluepawn2' || pawn.target.id === 'bluepawn3' ||
        pawn.target.id === 'bluepawn4') && (indx === 2)) ||
      ((pawn.target.id === 'yellow1' || pawn.target.id === 'yellow2' || pawn.target.id === 'yellow3' ||
        pawn.target.id === 'yellow4') && (indx === 3)) ||
      ((pawn.target.id === 'greenpawn1' || pawn.target.id === 'greenpawn2' || pawn.target.id === 'greenpawn3'
        || pawn.target.id === 'greenpawn4') && (indx === 4))) {
      parent = pawn.target.parentNode.id;
      //red turn
      if ((indx === 1) && (parent === "redh1" || parent === "redh2" || parent === "redh3" || parent === "redh4")) {
        if (result === 6) {
          console.log("red");
          disableroll = 0;
          document.getElementById('0').appendChild(pawn.target);
      
        }
      }
      //blue turn
      else if ((indx === 2) && (parent === "blueh1" || parent === "blueh2" || parent === "blueh3" || parent === "blueh4")) {
        if (result === 6) {
          console.log("blue");
          disableroll = 0;
          document.getElementById('39').appendChild(pawn.target);
     

        }
      }
      //yellow turn
      else if ((indx === 3) && (parent === "yellowh1" || parent === "yellowh2" || parent === "yellowh3" || parent === "yellowh4")) {
        if (result === 6) {
          console.log("yellw");
          disableroll = 0;
          document.getElementById('26').appendChild(pawn.target);
        }
      }
      //green turn
      else if ((indx === 4) && (parent === "greenh1" || parent === "greenh2" || parent === "greenh3" || parent === "greenh4")) {
        if (result == 6) {
          console.log("green");
          disableroll = 0;
          document.getElementById('13').appendChild(pawn.target);
          
        }
      }
      else {
        if (parent == 51)
          parent = -1;
        let c = parseInt(parent) + parseInt(result);
        var st = '4' + c;
        console.log("step:" + parseInt(st));
        //check pawn home
        if ((pawn.target.id === 'redpawn1' || pawn.target.id === 'redpawn2' || pawn.target.id === 'redpawn3' || pawn.target.id == 'redpawn4') && (c > 50) && (parent<=50)) {
          c = c - 50;
          var step = '6' + c;
          console.log(step);
          c = parseInt(step);  }
        if ((pawn.target.id === 'bluepawn1' || pawn.target.id === 'bluepawn2' || pawn.target.id === 'bluepawn3' || pawn.target.id === 'bluepawn4') && (c > 37) && (parent <= 37)) {
          c = c - 37;
          var step = '7' + c;
          console.log(step);
          c = parseInt(step);
        }
        if ((pawn.target.id === 'yellow1' || pawn.target.id === 'yellow2' || pawn.target.id === 'yellow3' ||  pawn.target.id === 'yellow4') && (c > 24) && (parent <= 24)) {
          c = c - 24;
          var step = '8' + c;
          console.log(step);
          c = parseInt(step);
        }
        if ((pawn.target.id === 'greenpawn1' || pawn.target.id === 'greenpawn2' || pawn.target.id === 'greenpawn3' || pawn.target.id === 'greenpawn4') && (c > 11) && (parent <= 11)) {
          c = c - 11;
          var step = '9' + c;
          console.log(step);
          c = parseInt(step);
        }
        if (c > 51 && c < 60) {
          c = c - 52;
        }
        if (c == '76') {                //win blue pawns
          document.getElementById("wingoti").appendChild(pawn.target);
          winbluepawn++;
          winsp[indx-1]++;
        }
        else if (c == '86') {            //win yellow pawns
          document.getElementById("wingoti").appendChild(pawn.target);
          winyellowpawn++;
          winsp[indx-1]++;
        }
        else if (c == '96') {            //win Green pawns
          document.getElementById("wingoti").appendChild(pawn.target);
          wingreenpawn++;
          winsp[indx-1]++;
        }
        else if (c == '66') {           //win Red pawns
          document.getElementById("wingoti").appendChild(pawn.target);
          winredpawn++;
          winsp[indx-1]++;
        }
        console.log(c);
        for (w of ways) {
          if (w.id == c) {
            let child = document.getElementById(w.id).childNodes;
            if (child.length > 0) {                              
              if (c !== 0 && c !== 47 && c !== 8 && c !== 13 && c !== 26 && c !== 21 && c !== 34 && c !== 39)   //check stops
                kill(child[0], pawn.target);
            }
            w.appendChild(pawn.target);
            break;
          }
        }
        for (w1 of ways1) {
          if (w1.id == c) {
            let child = document.getElementById(w1.id).childNodes;
            if (child.length > 0) {
              if (c !== 0 && c !== 47 && c !== 8 && c !== 13 && c !== 26 && c !== 21 && c !== 34 && c !== 39)   //check stops
              kill(child[0], pawn.target);
            }
            w1.appendChild(pawn.target);
            break;
          }
        }
        if (previousnmber != 6)
          completeturn = 0;
     
        console.log(parent);
      }
      if (completeturn == 0 && result != 6) {
        if (result != 0) {
          if (indx == 4)
            indx = 0;
          turns.innerHTML = "it's " + turncolor[indx] + " turn";
          disableroll = 0;
          indx++;
          result = 0;
        }
      }
      result = 0;
      disableroll = 0;
      checkwinnner();
      wins();
      allWins();
    }
  });
}
function kill(w, tar) {                                 //kill pawn
  console.log("kill:", w.id);
  if (w.id === 'redpawn1') {
    if (tar.id !=='redpawn2' && tar.id !=='redpawn3' && tar.id !=='redpawn4')
      document.getElementById('redh1').appendChild(w);
  }
  else if (w.id === 'redpawn2') {
    if (tar.id !== 'redpawn1' && tar.id !== 'redpawn3' && tar.id !== 'redpawn4')
      document.getElementById('redh2').appendChild(w);
  }
  else if (w.id === 'redpawn3') {
    if (tar.id !== 'redpawn1' && tar.id !== 'redpawn2' && tar.id !== 'redpawn4')
      document.getElementById('redh3').appendChild(w);
  }
  else if (w.id === 'redpawn4') {
    if (tar.id !== 'redpawn1' && tar.id !== 'redpawn3' && tar.id !== 'redpawn2')
      document.getElementById('redh4').appendChild(w);
  }
  else if (w.id ==='greenpawn1'){
    if (tar.id !=='greenpawn2' && tar.id !== 'greenpawn3' && tar.id!=='greenpawn4')
      document.getElementById('greenh1').appendChild(w);
  }
  else if (w.id ==='greenpawn2') {
    if (tar.id !== 'greenpawn1' && tar.id !== 'greenpawn3' && tar.id !== 'greenpawn4')
      document.getElementById('greenh2').appendChild(w);
  }
  else if (w.id === 'greenpawn3') {
    if (tar.id !== 'greenpawn2' && tar.id !== 'greenpawn1' && tar.id !== 'greenpawn4')
      document.getElementById('greenh3').appendChild(w);
  }
  else if (w.id === 'greenpawn4') {
    if (tar.id !== 'greenpawn2' && tar.id !== 'greenpawn3' && tar.id !== 'greenpawn1')
      document.getElementById('greenh4').appendChild(w);
  }
  else if (w.id === 'bluepawn1') {
    if (tar.id !== 'bluepawn2' && tar.id !== 'bluepawn3' && tar.id !== 'bluepawn4')
      document.getElementById('blueh1').appendChild(w);
  }
  else if (w.id === 'bluepawn2') {
    if (tar.id !== 'bluepawn1' && tar.id !== 'bluepawn3' && tar.id !== 'bluepawn4')
      document.getElementById('blueh2').appendChild(w);
  }
  else if (w.id === 'bluepawn3') {
    if (tar.id !== 'bluepawn2' && tar.id !== 'bluepawn1' && tar.id !== 'bluepawn4')
      document.getElementById('blueh3').appendChild(w);
  }
  else if (w.id === 'bluepawn4') {
    if (tar.id !== 'bluepawn2' && tar.id !== 'bluepawn3' && tar.id !== 'bluepawn1')
      document.getElementById('blueh4').appendChild(w);
  }
  else if (w.id === 'bluepawn4') {
    if (tar.id !== 'bluepawn2' && tar.id !== 'bluepawn3' && tar.id !== 'bluepawn1')
      document.getElementById('blueh4').appendChild(w);
  }
  else if (w.id === 'yellow1') {
    if (tar.id !== 'yellow2' && tar.id !== 'yellow4' && tar.id !== 'yellow3')
      document.getElementById('yellowh1').appendChild(w);
  }
  else if (w.id === 'yellow2') {
    if (tar.id !== 'yellow1' && tar.id !== 'yellow4' && tar.id !== 'yellow3')
      document.getElementById('yellowh2').appendChild(w);
  }
  else if (w.id === 'yellow3') {
    if (tar.id !== 'yellow2' && tar.id !== 'yellow4' && tar.id !== 'yellow1')
      document.getElementById('yellowh3').appendChild(w);
  }
  else if (w.id === 'yellow4') {
    if (tar.id !== 'yellow2' && tar.id !== 'yellow1' && tar.id !== 'yellow3')
      document.getElementById('yellowh4').appendChild(w);
  }
}
function diceroll(e) {                 //dice roll
  if (disableroll == 0) {
    if (id[indx - 1] == e) {
      result = Math.floor((Math.random() * 6) + 1);
      completeturn = result;
      document.getElementById(e).src = "img/roll.gif";
      setTimeout(function () {
        document.getElementById(e).src = "img/" + result + ".PNG";
        if (result != 6)
          checks();
        console.log(result);
        if (result != 6 && previousnmber != 6 && completeturn == 0) {
          if (indx == 4)
            indx = 0;
          turns.innerHTML = "it's " + turncolor[indx] + " turn";
          indx++;
          previousnmber = result;
          result = 0;
          disableroll = 0;
        }
        else {
          disableroll = 1;
        }
      }, 1000);
    }
  }
}
function checks() { 
  if (indx == 1) {                   //check red pawn is free or not
    if ((redpawn1.parentNode.id === "redh1" &&
      redpawn2.parentNode.id === "redh2" &&
      redpawn3.parentNode.id === "redh3" &&
      redpawn4.parentNode.id === "redh4" )|| winredpawn==4 ) 
      completeturn = 0;
    else {
      completeturn = 1;
    }
  }
  else if (indx == 2) {           //check bluepawn is free or not
    if((bluepawn1.parentNode.id == 'blueh1' &&
      bluepawn2.parentNode.id == 'blueh2' &&
      bluepawn3.parentNode.id == 'blueh3' &&
      bluepawn4.parentNode.id == 'blueh4') || winbluepawn==4) {
      completeturn = 0;
    }
    else {
      completeturn = 1;
    }
  }
  else if (indx == 3) {         //check yellow pawn is free or not
    if ((yellowpawn1.parentNode.id == "yellowh1" &&
      yellowpawn2.parentNode.id == "yellowh2" &&
      yellowpawn3.parentNode.id == "yellowh3" &&
      yellowpawn4.parentNode.id == "yellowh4") || winyellowpawn==4 || (yellowpawn1.parentNode.id === "wingoti" || yellowpawn2.parentNode.id === "wingoti" || yellowpawn3.parentNode.id === "wingoti" || yellowpawn4.parentNode.id === "wingoti")) 
      completeturn = 0;
    else {
      completeturn = 1;
    }
  }
  else if (indx == 4) {        //check green pawn is free or not
    if ((greenpawn1.parentNode.id == 'greenh1' &&
      greenpawn2.parentNode.id == 'greenh2' &&
      greenpawn3.parentNode.id == 'greenh3' &&
      greenpawn4.parentNode.id == 'greenh4') || wingreenpawn==4 || (greenpawn1.parentNode.id === "wingoti" || greenpawn2.parentNode.id === "wingoti" || greenpawn3.parentNode.id === "wingoti" || greenpawn4.parentNode.id === "wingoti")) 
      completeturn = 0;
    else {
      completeturn = 1;
    }
  }
}
function checkwinnner(){
  console.log("wins:"+winsp[indx-1]);
  if(winsp[indx-1]===4){
    turns.innerHTML = "it's " + turncolor[indx] + " turn";
    indx++;
    if(winsp[indx-1]===4){
      turns.innerHTML = "it's " + turncolor[indx] + " turn";
      indx++;
    }
  }
}
function wins() {                       //check anyblock is win or not
  if (winbluepawn == 4 && winB == 0)
   {
    winB = winposition[winindx++];
    positions[posI++]="Blue";
    console.log("win got blue"+posI);
    }
  if (wingreenpawn == 4 && winG == 0)
  {
    winG = winposition[winindx++];
    positions[posI++]="Green";
    console.log("win got green"+posI);
  }
   
  if (winredpawn == 4 && winR == 0){
    positions[posI++]="Red";
    console.log("win got red" +posI);
    winR = winposition[winindx++];
  }
   
  if (winyellowpawn == 4 && winY == 0){
    winY = winposition[winindx++];
    positions[posI++]="yellow";
    console.log("win got yellow"+posI);
  }
}
function allWins() {                  //check final winner
  if (winB != 0 && winG != 0 && winR != 0 && winY != 0) {
    document.getElementById('winners').innerHTML="2st position "+positions[1];
     document.getElementById('winners').style.display='block';

  }
}
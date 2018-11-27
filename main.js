var playerArea = document.querySelector('#playerArea');
var playerBtn = document.querySelector('#playerBtn');
var comp1Area = document.querySelector('#comp1Area');
var comp1Btn = document.querySelector('#comp1Btn');
var comp2Area = document.querySelector('#comp2Area');
var comp2Btn = document.querySelector('#comp2Btn');
var comp3Area = document.querySelector('#comp3Area');
var comp3Btn = document.querySelector('#comp3Btn');
var startBtn = document.querySelector('#startBtn');
var infoDiv = document.querySelector('#infoDiv');

var rand;
var winner = 0;
var texts = ['Danas je divan dan','Sutra je divan dan','Juce je bio divan dan'];

startBtn.addEventListener('click',timer);

function timer() {
  var time = 5;
  startBtn.innerHTML = time;
  var loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time === 0) {
      clearInterval(loop);
      startBtn.style.display = "none";
      startTyping();
    }
  },1000);
}

function startTyping() {
   rand = Math.floor(Math.random()*texts.length);
  infoDiv.innerHTML = '<h3>'+texts[rand]+'</h3>';
infoDiv.style.display = "block";
playerArea.focus();
comp1startTyping();
comp2startTyping();
comp3startTyping();
playerStartTyping();
}


function playerStartTyping() {
  playerArea.addEventListener('keyup',function (e) {
    if (e.keyCode === 13) {
      var userText = playerArea.value.trim();
      if (userText == texts[rand]) {
         winner++;
         playerBtn.className = "form-control btn btn-success";
         playerBtn.innerHTML = "Position : "+winner;
      }else {
        playerBtn.className = "form-control btn btn-danger";
        playerBtn.innerHTML = "Wrong typing";
      }
    }
  });
}

function comp1startTyping() {
var text = texts[rand];
var textArray = text.split("");
var loop = setInterval(function () {
  if (textArray.length != 0) {
    comp1Area.value += textArray.shift();
  }else {
    clearInterval(loop);
    winner++;
    comp1Btn.className = "form-control btn btn-success";
    comp1Btn.innerHTML = "Position : "+winner;
  }
},250);
}


function comp2startTyping() {
var text = texts[rand];
var textArray = text.split("");
var loop = setInterval(function () {
  if (textArray.length != 0) {
    comp2Area.value += textArray.shift();
  }else {
    clearInterval(loop);
    winner++;
    comp2Btn.className = "form-control btn btn-success";
    comp2Btn.innerHTML = "Position : "+winner;
  }
},350);
}


function comp3startTyping() {
var text = texts[rand];
var textArray = text.split("");
var loop = setInterval(function () {
  if (textArray.length != 0) {
    comp3Area.value += textArray.shift();
  }else {
    clearInterval(loop);
    winner++;
    comp3Btn.className = "form-control btn btn-success";
    comp3Btn.innerHTML = "Position : "+winner;
  }
},400);
}

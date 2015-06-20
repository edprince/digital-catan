var tiles = ["wood", "wood", "wood", "wool", "wool", "wool", "wheat", "wheat", "wheat", "brick", "brick", "brick", "ore", "ore", "ore", "desert"];

var player = {};
function player() {
  this.color = blue;
  this.VP = 0;
  
  this.settlements = 0;
  this.cities = 0;
  
  this.wood = 0;
  this.wool = 0;
  this.wheat = 0;
  this.ore = 0;
  this.brick = 0;
}

function tile() {
  this.resource = 0;
  this.probability = 0;
  this.vertices = 0;
}


function removeItemFromArray(array) {
  var board = [];
  while (array.length > 0) {
    var number = Math.floor(Math.random() * array.length);
    console.log(number, array);
    board.push(array[number]);
    array.splice(number, 1);
    console.log("Board: " + board);
    console.log(number);
  }
  initializeBoard(board);
}



function initializeBoard(board) {
  board.forEach(function(tile, i) {   
    console.log("T" + (i) + " = " + tile);
    //Assign tile colours
    switch (board[i]) {
      case "wood":
        document.getElementById("T" + i).style.background = "#99532F";
        break;
      case "wool":
        document.getElementById("T" + i).style.background = "green";
        break;
      case "wheat": 
        document.getElementById("T" + i).style.background = "#E7C100";
        break;
      case "ore": 
        document.getElementById("T" + i).style.background = "#AEAEAE";
        break;
      case "desert": 
        document.getElementById("T" + i).style.background = "orange";
        break;
      case "brick": 
        document.getElementById("T" + i).style.background = "brown";
        break;
    }
    
  });
  placeDieRoll(board);
  //placeProbability(board);
}



function placeDieRoll(board) {
  var dieRoll = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 2];
  console.log(dieRoll.length + " characters long");
  var i;
  var randomRolls = [];
  while (dieRoll.length > 0) {
    var n = Math.floor(Math.random() * dieRoll.length);
    console.log(dieRoll.length);
    console.log("n = " + n);
    var p = dieRoll[n];
    randomRolls.push(p);
    dieRoll.splice(n, 1);
  }  
  board.forEach(function(tile, i) {
    if (tile === "desert") {
      return;
    }
    document.getElementById('T' + i).innerText += randomRolls[i].toString();
  });
}

/*
function placeProbability(board) {
  console.log("Placing probability");
  board.forEach(function(tile, i) {
    console.log("T" + i);
    console.log(document.getElementById("T" + i).innerText);
    console.log(tile);
    switch (document.getElementById("T" + i).innerText) {
      case ("2" || "12"):
        document.getElementById("T" + i).innerText += ".";
        break;
      case (("3" || "4") || "11"):
        document.getElementById("T" + i).innerText += "..";
        break;
      case (("5" || "9") || "10"):
        document.getElementById("T" + i).innerText += "...";
        break;
      case ("6" || "8"):
        document.getElementById("T" + i).innerText += "....";
        break;
    }
  });
}

*/








window.addEventListener("load", function() {
  removeItemFromArray(tiles);
});
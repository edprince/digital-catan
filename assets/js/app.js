var tiles = ["wood", "wood", "wood", "wool", "wool", "wool", "wheat", "wheat", "wheat", "brick", "brick", "brick", "ore", "ore", "ore", "desert"];
var boardDimension = 4;


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

function Tile() {
  this.resource = 0;
  this.probability = 0;
  this.dieRollToken = 0;
  this.vertices = 0;
  this.leftAdjacent = 0;
  this.rightAdjacent = 0;
  this.upperAdjacent = 0;
  this.lowerAdjacent = 0;
  this.inUse = false;
  this.color = null;
}


function chooseName() {
  var title = ['Lord', 'Sir', 'King', 'Queen', 'Laird', 'Father', 'Commander', 'Dame', 'Chief', 'Prince', 'Princess'];
  var surname = ['Bywater', 'Ostrich', 'Belford', 'Crabbe', 'Slytherin', 'Tarly', 'Snow', 'Willow', 'Thorne', 'Jamieson', 'Dixon']; 
  return title[Math.floor(Math.random() * title.length)] + " " + surname[Math.floor(Math.random() * surname.length)];
}

var board = [];
function removeItemFromArray(array) {
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

var tileObject = {};

function initializeBoard(board) {
  board.forEach(function(tile, i) {   
    console.log("T" + (i) + " = " + tile);
    tileObject['T'+ i] = new Tile();
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
  getAdjacentTiles(board);
  console.log("Tile T3: " + tileObject.T15.resource);
  console.log(tileObject.T15.leftAdjacent);
  console.log(tileObject.T15.rightAdjacent);
  console.log(tileObject.T15.upperAdjacent);
  console.log(tileObject.T15.lowerAdjacent);
  //rollBothDice();//Should be called after a dice button is clicked
  //console.log(rollBothDice(), " = die roll");
}



function placeDieRoll(board) {
  var dieRoll = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, 2];
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
    console.log(randomRolls[i]);
    document.getElementById('T' + i).innerText += randomRolls[i].toString();
    tileObject['T' + i].dieRollToken = randomRolls[i];
    tileObject['T' + i].resource = tile;
  });
}


function getAdjacentTiles(board) {
  board.forEach(function(tile, i) {
    console.log("i = " + i);
    console.log(board.length, "Board length");
    tileObject['T' + i].leftAdjacent = i - 1;
    tileObject['T' + i].rightAdjacent = i + 1;
    tileObject['T' + i].upperAdjacent = i - 4;
    tileObject['T' + i].lowerAdjacent = i + 4;

    var t = tileObject['T' + i];
    if (!isTileToLeft(i)) {
      t.leftAdjacent = null; 
    }

    if (!isTileToRight(i)) {
      t.rightAdjacent = null;
      console.log(t.rightAdjacent);
    }

    if (!isTileAbove(i)) {
      t.upperAdjacent = null;
    }
    if (!isTileBelow(i)) {
      t.lowerAdjacent = null;
    }
  
    //Check for empy adjacent tile
    function isTileToLeft(i) {
      for (var j = 0; j <= (board.length - (boardDimension)); j += 4) {
        if (i === j) {
          return false;
        }
      }
      return true;
      
    }
    function isTileToRight(i) {
      for (var j = (boardDimension - 1); j <= (board.length - 1); j += 4) {
        return false;
      }
      return true;
    }

    function isTileAbove(i) {
      if ((i >= 0) && (i < boardDimension)) {
        return false;
      }
      return true;
    }

    function isTileBelow(i) {
      var l = board.length;
      if ((i <= (l - 1)) && (i > ((l - boardDimension)))) {
        return false; 
      }
      return true;
    }
  });
}


function rollDie(sides) {
  return Math.ceil(Math.random() * sides); 
}

function rollBothDice() {
  var result = rollDie(6) + rollDie(6);
  var colors = ['#42A5F5', '#8BC34A', '#FFA726', '#AB47BC'];
  document.getElementById('die-roll').innerText = result; 
  document.getElementById('die-roll').style.background = colors[Math.floor(Math.random() * colors.length)]; 
  return result;
}

function selectTile(T) {
  //var selectedTile = this. 
  //Perform check to see if other tiles are already selected
  console.log(T);
  console.log(tileObject[T].upperAdjacent, 'selectTile parameter correct');
  document.getElementById(T).style.border = 'solid 3px rgba(5, 150, 80, 1)';
}

function placeSettlement(board, hand, T) {
  //Check that tile and adjacent tiles are free
  if (areAdjacentTileFree) {
   T.inUse = true;
   //document.getElementById('').style.
}
  //check that player has sufficient resources
  /*
  wool | 8
  wheat | 0
  ore | 2
  brick | 2
  */
  //
}


function areAdjacentTilesFree(board, T) {
//Checks whether all adjacent tiles are free, therefore a settlement can be placed
  if (T.upperAdjacent && T.lowerAdjacent && T.leftAdjacent && T.rightAdjacent === false || null) {
    return true; 
  }
  return false;
}

//List chat
function appendUpdate() {
  var name = document.getElementById('name').innerText;
  var node = document.createElement('li');
  var roll = document.getElementById('die-roll').innerText;
  var textNode = document.createTextNode(name + " has rolled a " + roll);
  node.appendChild(textNode);
  document.getElementById('update-list')
    .insertBefore(node, document.getElementById('update-list').childNodes[0]);
  var objDiv = document.getElementById('game-commentary');
  var scrollHeight = 100;
  objDiv.scrollTop = objDiv.scrollHeight;
}

function pickDevelopmentCard() {
  var developmentCards = [];
}


window.addEventListener("load", function() {
  removeItemFromArray(tiles);
  var name = chooseName();
  document.getElementById('name').innerText = name;
  console.log(name);

  document.getElementById('roll').addEventListener('click', function() {
    var roll = rollBothDice();
    appendUpdate();
  });


  for (var i = 0; i <= (board.length - 1); i++) {
    document.getElementById('T' + i).addEventListener('click', function() {
      console.log("Clicked on tile: T" + i);
      selectTile(i);
    });
  }

  /*
  document.getElementById('T3').addEventListener('click', function() {
    selectTile();
  });
*/

  for (var i = 0; i < board.length; i++) {
    document.getElementById('T' + i).addEventListener('click', function() {
      selectTile('T' + i);
    });
  }

  document.getElementById('T2').addEventListener('click', function() {
    tileObject['T2'].inUse = true;
  });

  document.getElementById('T3').addEventListener('click', function() {
    selectTile('T3');
  });




  //Chat
  var chatForm = document.getElementById('chat-form')
  chatForm.addEventListener('submit', function(e) {
    console.log("Submitted");
    e.preventDefault();
    if (document.getElementById('chat').value !== '') {
      var message = document.getElementById('chat').value;
      console.log(message);
      var node = document.createElement('li');
      var textNode = document.createTextNode(name + ": " + message);
      node.appendChild(textNode);
      document.getElementById('update-list')
        .insertBefore(node, document.getElementById('update-list').childNodes[0]);
      document.getElementById('chat').value = '';
    }
  });

});

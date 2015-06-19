//Resource array
var tiles = ["wood", "wood", "wood", "wool", "wool", "wool", "wheat", "wheat", "wheat", "ore", "ore", "ore", "brick", "brick", "brick", "desert"]


function IntializeBoard() {
  var board = [];
  while (tiles.length > 0) {
    var element = (Math.floor(Math.random() * tiles.length));
    var resource = tiles[element];
    board.push(resource);
    tiles.splice(element, 1);
  }
  //Now we have a shuffled array containing the elements of tiles array 
}

function displayBoard(board) {
  board.forEach(function(tile, i) {
    document.getElementById("").innerText = tile;
  });
}



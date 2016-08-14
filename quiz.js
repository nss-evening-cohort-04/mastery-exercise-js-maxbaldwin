//variable for the button trees
var button = document.getElementById("Trees");

//event listener to start when it is 'clicked'
button.addEventListener("click", checkThis);
addEventListener("keypress", checkReturn);

function checkReturn (e){
  if (e.keyCode == 13){
   checkThis()
  }
}

//grabbing the values from the input fields from the HTML
function submittedValue() {
  var treeForming = {
    height: parseInt(document.getElementById("height").value),
    symbol: document.getElementById("symbol").value
  };
  buildTree(treeForming)
}

//What if they don't put in the correct variables in the input fields? This should take care of that
function checkThis() {
  var treeHeight = document.getElementById("height");
  var treeSymbol = document.getElementById("symbol");
  if(treeHeight.value === "" || tree.symbol === "" ) {
    alert("You forgot to enter either a number or a symbol, GO BACK!")
  } else {
      submittedValue();
  }
}

//building the tree
function buildTree (tree) {
    var maxsymbol = (2 * tree.height -1)
    var space = " ";
  for (var i = 0; i < tree.height; i++) {
    var spaces = maxsymbol - (i+(i+1));
    var treeSymbol = space.repeat(spaces/2)+tree.symbol.repeat(i+(i+1));
 //console log the tree so we can see how pretty it is
  console.log(treeSymbol);
}
}
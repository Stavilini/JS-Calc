window.onload = calc;
var materialPrice = 0;
var printPrice = 0;
var shWidth = 320;
var shHeight = 450;


function calc(){
    
    var button = document.getElementById('count');
    button.onclick = calculate;
}

function calculate(){
    
var sizeX = document.getElementById('sizeX').value;
var sizeY = document.getElementById('sizeY').value; 
var amount = document.getElementById('amount').value;
var result = document.getElementById('result');
var result2 = document.getElementById('sheets');
var pieces = document.getElementById('amountPieces');
var matherial = document.getElementById('material').selectedIndex;
var pieceCost = document.getElementById('pieceCost');

if (matherial == 0) {
    matherialPrice = 120;}
  else {
        matherialPrice = 100;
    }
var color = document.getElementById('color-selector').selectedIndex;

if (color == 0) {
    printPrice = 45;
} else {
        printPrice = 75;
}


var piecesTotal = Math.max(Math.floor(shWidth/sizeX) * Math.floor(shHeight/sizeY), Math.floor(shWidth/sizeY)*(Math.floor(shHeight/sizeX)));

console.log(piecesTotal);
var sheetsAmount = Math.ceil(amount / piecesTotal);
var sum = sheetsAmount * (matherialPrice + printPrice);
var pieceCostVar = (sum / amount).toFixed(2);

sheets.innerHTML = sheetsAmount;
result.innerHTML = sum;
amountPieces.innerHTML = piecesTotal;
pieceCost.innerHTML = pieceCostVar;
}

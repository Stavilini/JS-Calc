window.onload = calc;
// Фиксированные значения
var materialPrice = 0;
var printPrice = 0;
var shWidth = 0;
var shHeight = 0;

function calc() {
    var button = document.getElementById('count');
    button.onclick = calculate;
}

function calculate() {

    var sizeX = document.getElementById('sizeX').value;
    var sizeY = document.getElementById('sizeY').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    var result2 = document.getElementById('sheets');
    var pieces = document.getElementById('amountPieces');
    var pieceCost = document.getElementById('pieceCost');
    var extra = document.getElementById('extraPieces');
    var best = document.getElementById('bestAmount');

    // Выбор и получение размеров материала
    var matherial = document.getElementById('material').selectedIndex;
    if (matherial == 0) {
        matherialPrice = 120;
        shWidth = 310;
        shHeight = 440;
    } else {
        matherialPrice = 100;
        shWidth = 320;
        shHeight = 475;
    }

    // Выбор цветности 
    var color = document.getElementById('color-selector').selectedIndex;
    if (color == 0) {
        printPrice = 45;
    } else {
        printPrice = 75;
    }
    // Получение наиболее выгодной раскладки и подсчет кол-ва изделий с листа
    var piecesTotal = Math.max(Math.floor(shWidth / sizeX) * Math.floor(shHeight / sizeY), Math.floor(shWidth / sizeY) * (Math.floor(shHeight / sizeX)));
    console.log(piecesTotal + " с листа");
    // Кол-во листов
    var sheetsAmount = Math.ceil(amount / piecesTotal);
    console.log(sheetsAmount + " Листов нужно");
    // Сумма, рэ
    var sum = sheetsAmount * (matherialPrice + printPrice);
    console.log(sum + " сумма");
    // шт, которые не заявлены в тираже, но "получатся"
    var extra = piecesTotal * sheetsAmount - amount;
    console.log(extra + " бесплатные");
    // Оптимальный тираж при заданных размерах
    var best = piecesTotal * sheetsAmount;
    console.log(best + " оптимальных штук");
    // Стоимость одной шт.
    var pieceCostVar = (sum / amount).toFixed(2);
    console.log(sum / amount + " цена единицы");

    //Вывод данных в форму
    sheets.innerHTML = sheetsAmount;
    result.innerHTML = sum;
    amountPieces.innerHTML = piecesTotal;
    pieceCost.innerHTML = pieceCostVar;
    extraPieces.innerHTML = extra;
    bestAmount.innerHTML = best;
}

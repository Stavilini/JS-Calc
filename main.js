class Calc {
    constructor() {
        this.result = document.getElementById('result');
        this.form = document.getElementById('calc');
        this.sizeX = document.getElementById('sizeX');
        this.sizeY = document.getElementById('sizeY');
        this.amount = document.getElementById('amount');
        this.material = document.getElementById('material');
        this.color_selector = document.getElementById('color-selector');
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculate();
        });
    }

    calculate() {
        const result = `
            sizeX: ${this.sizeX.value},
            sizeY: ${this.sizeX.value},
            amount: ${this.amount.value},
            material: ${this.material.value},
            color selector: ${this.color_selector.value}
        `.trim();

        this.result.innerHTML = result;
    }
}

function ready() {
    const calc = new Calc();

    calc.init();
}

document.addEventListener("DOMContentLoaded", ready);
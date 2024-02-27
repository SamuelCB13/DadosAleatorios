var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var die3 = document.getElementById("die3");
var die4 = document.getElementById("die4");
var previousValues = {
    die1: null,
    die2: null,
    die3: null,
    die4: null
};

function rollDice() {
    die1.classList.add("animation", "color-change");
    die2.classList.add("animation", "color-change");
    die3.classList.add("animation", "color-change");
    die4.classList.add("animation", "color-change");

    die1.classList.add("rotate-animation");
    die2.classList.add("rotate-animation");
    die3.classList.add("rotate-animation");
    die4.classList.add("rotate-animation");

    setTimeout(function() {
        var texts1 = ["Tocar", "Besar", "Lamer", "Chupar", "Cualquiera", "Meter"];
        var texts2 = ["Tetas", "Nalga", "Vagina", "Cuello", "Parte Baja"];
        var texts3 = ["Tocar", "Besar", "Lamer", "Chupar", "Cualquiera", "Metan"];
        var texts4 = ["Chimbo", "Pene", "Pito", "Cuello", "Parte Baja"];

        var index1 = getRandomIndex(texts1, previousValues.die1);
        var index2 = getRandomIndex(texts2, previousValues.die2);
        var index3 = getRandomIndex(texts3, previousValues.die3);
        var index4 = getRandomIndex(texts4, previousValues.die4);

        die1.innerText = texts1[index1];
        die2.innerText = texts2[index2];
        die3.innerText = texts3[index3];
        die4.innerText = texts4[index4];

        previousValues.die1 = index1;
        previousValues.die2 = index2;
        previousValues.die3 = index3;
        previousValues.die4 = index4;

        die1.classList.remove("animation", "rotate-animation", "color-change");
        die2.classList.remove("animation", "rotate-animation", "color-change");
        die3.classList.remove("animation", "rotate-animation", "color-change");
        die4.classList.remove("animation", "rotate-animation", "color-change");
    }, 500);
}

function getRandomIndex(arr, previousValues) {
    var index = Math.floor(Math.random() * arr.length);

    while (index === previousValues) {
        index = Math.floor(Math.random() * arr.length);
    }

    return index;
}
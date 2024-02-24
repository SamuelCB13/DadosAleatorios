var die1 = document.getElementById("die1");
var die2 = document.getElementById("die2");
var previousValues = {
    die1: null,
    die2: null
};

function rollDice() {
    die1.classList.add("animation", "color-change");
    die2.classList.add("animation", "color-change");

    die1.classList.add("rotate-animation");
    die2.classList.add("rotate-animation");

    setTimeout(function() {
        var texts1 = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];
        var texts2 = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];

        var index1 = getRandomIndex(texts1, previousValues.die1);
        var index2 = getRandomIndex(texts2, previousValues.die2);

        die1.innerText = texts1[index1];
        die2.innerText = texts2[index2];

        previousValues.die1 = index1;
        previousValues.die2 = index2;

        die1.classList.remove("animation", "rotate-animation", "color-change");
        die2.classList.remove("animation", "rotate-animation", "color-change");
    }, 500);
}

function getRandomIndex(arr, previousValues) {
    var index = Math.floor(Math.random() * arr.length);

    while (index === previousValues) {
        index = Math.floor(Math.random() * arr.length);
    }

    return index;
}
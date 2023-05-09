const target = document.getElementById("target");
let array = ["développeur", "créatif", "photographe"];
let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];
};

const loop = () => {
    setTimeout(() => {
        if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
        }
    }, 100);
};
loop();
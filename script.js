document.getElementById("translateButton").addEventListener("click", ()=> {
    const inputText = document.getElementById("inputText").value;
    const outputText = parrotify(inputText);
    document.getElementById("outputText").innerText = outputText;
});

const parrotWords = ["cawk", "sqwuak", "chirp", "awwk", "keet", "tweet", "screech", "peep", "cawkity", "sqwuakity", "awwwk", "tweety", "keetity"];

function getRandomParrotWord() {
    return parrotWords[Math.floor(Math.random() * parrotWords.length)];
}

function parrotify(text) {
    return text
        .split(' ')
        .map(word =>{
            return word.replace(/[aeiouAEIOU]/g, () => getRandomParrotWord());
        })
        .join(' ');
}
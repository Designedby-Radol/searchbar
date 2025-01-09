const List = [
    "duna",
    "100 dias y 101 programas",
    "Alemania naC#",
    "100 AÑOS ARCH",
    "kamazutra",
];

const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");

function selectInput(autor) {
    inputBox.value = autor.innerText;
    resultBox.innerHTML = "";
}

const displayResults = function(result) {
    const resultHTML = result.map(function(autor) {
        return `<li onclick="selectInput(this)">
            ${autor}
        </li>`;
    });

    resultBox.innerHTML = `<ul>${resultHTML.join("")}</ul>`;
}

inputBox.onkeyup = function(e) {
    let result = [];
    const input = inputBox.value.toLowerCase();
    
    if(input.length === 0) {
        resultBox.innerHTML = "";
    }
    
    if(input.length) {
        result = List.filter((autor) => {
            return autor.toLowerCase().includes(input);
        });
        displayResults(result);
    }
}
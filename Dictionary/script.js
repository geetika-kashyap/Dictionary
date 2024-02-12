const input = document.getElementById('word');
const btn = document.getElementById('btn'); 
const output = document.getElementById("dictionary");

async function dictionaryfn() {
    const word = input.value;
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const jsonData = await res.json();

    output.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = `
    <h3><strong>Word : </strong><span>${jsonData[0].word}</span></h3>
    <p><strong>Part of Speech : </strong>: <span>${jsonData[0].meanings[0].partOfSpeech}</span></p>
    <p><strong>Meaning :</strong><span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
    <p><strong>Example : </strong><span>${jsonData[0].meanings[0].definitions[0].example}</span></p>
    <p><strong>Synonyms :</strong><span>${jsonData[0].meanings[0].synonyms}</span></p>`

    output.appendChild(div);
}
 
btn.addEventListener('click',dictionaryfn);
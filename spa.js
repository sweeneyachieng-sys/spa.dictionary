// const pronunciation = document.querySelector("#pronunciation-audio");
const form = document.querySelector("#search-form");
// const button = document.querySelector("#btn");
const wordSearch = document.querySelector("#word-search");
const result = document.querySelector("#result");



async function fetchurl(word) {
    try{
    let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`


       console.log("Searching for:", word);
   const response = await fetch(url)
    
        if(!response.ok){
        throw new Error("the search does not exist,pookie!!");
    }
    const data= await response.json();

    displayResults(data)
}catch(error){
    console.error(error.message)
}
}
//  fetchurl("hello")   

function displayResults(data){
const entry = data[0];
const word =entry.word;
const partOfSpeech = entry.meanings[0].partOfSpeech
const definition = entry.meanings[0].definitions[0].definition
const example = entry.meanings[0].definitions[0].example;

   if (example){
    console.log(example);
   }
const synonyms = entry.meanings[0].synonyms;
    
   if (synonyms.length > 0){
    console.log(synonyms);
   }
   result.innerHTML = ""
const heading = document.createElement("h3");
const typep = document.createElement("p");
const definitionp = document.createElement("p");
const  examplep = document.createElement("p");
 
//insert the entry part
heading.textContent = word;
typep.textContent = partOfSpeech;
definitionp.textContent = definition;

if(example){
    result.textContent = examplep;
}

result.appendChild(heading);
result.appendChild(definitionp);
result.appendChild(typep);
 if (example){
result.appendChild(examplep);

 }
 synonyms.forEach((synonym) => {
    const displaysy = document.createElement("span")
    displaysy.textContent = synonym;
    result.appendChild(displaysy)
    
 });

}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
   console.log("Form submitted!");

     const word = wordSearch.value.trim();
     console.log("Word entered:",)
    if(word === ""){
        alert("please enter a word!!");
        return;
    } 
    fetchurl(word)

});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Form submitted without reloading!");
});

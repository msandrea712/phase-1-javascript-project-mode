const header = document.getElementById("header");
const pokeId = document.getElementById("pokeId");
const unorderedList = document.getElementsByTagName("ul")[0];
const searchButton=document.getElementById("searchButton")
searchButton.addEventListener("click",getPokemon)
 function getPokemon() {
 fetch(`https://pokeapi.co/api/v2/pokemon/${+pokeId.value}/`)
 .then(function(response){
    return response.json()
 })
 .then(function(data){
    unorderedList.innerText=data.name
 })

}


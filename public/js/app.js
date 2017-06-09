$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response) {
  var pokemones = response.results;
  agregarPokemones(pokemones);
});

var agregarPokemones=function(pokemones){
  pokemones.forEach(function(pokemon) {
    $("#listaPokemones").append($("<li />").text(pokemon.name));
  });
};

// Funcion para cargar la pagina
var cargarPagina=function(){
  cargarPokemones();
}

// LLamar lista pokemones
var cargarPokemones=function(){
  var url="http://pokeapi.co/api/v2/pokemon/";
  $.getJSON(url, function (response) {
    // De la respuesta del servidor ocupamos los Resultados
    var pokemones=response.results;
    mostrarPokemones (pokemones);
  });
};

var mostrarPokemones=function (pokemones) {
  var $ul=$("#listaPokemones");
  pokemones.forEach(function (pokemon) {
  var $li=$("<li />");
  $li.addClass(".pokemon");
  $li.text(pokemon.name);
  $ul.append($li);
  console.log($li);
});
};



// Para cargar el documento
$(document).ready(cargarPagina);

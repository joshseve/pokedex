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
  var plantillaFinal="";
  pokemones.forEach(function(pokemon, index){
    plantillaFinal += plantilla.replace(/__nombre__/g, pokemon.name).replace("__numero__", index+1);
  });
  $("#listaPokemones").html(plantillaFinal);

  // var $ul=$("#listaPokemones");
  // pokemones.forEach(function (pokemon) {
  // var $li=$("<li />");
  // $li.addClass(".pokemon");
  // $li.text(pokemon.name);
  // $ul.append($li);
  // console.log($li);
// });
};

var plantilla= '<div data-url="pokeapi.co/api/v2/pokemon-species/__numero__">' +
'<img src="assets/img/__nombre__.png" alt="">' +
'<h5>__nombre__</h5>' +
'</div>';


// Para cargar el documento
$(document).ready(cargarPagina);

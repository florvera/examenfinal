//agrega overlay 
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//con imagen
$overlay.append($image);

//texto
$overlay.append($caption);

//agrgar el averlauy al body
$("body").append($overlay);

//click a un link que rodea la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//Mostrar la imagen a la que se seleccionó
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();
console.log(href);
});

//menu lateral y menu de navegación
var $select = $("<select></select>");
$("#menu").append($select);

//recorrido de  el menu
$("#menu a").each(function(){ 
	var $anchor = $(this);
	//opcion para el selector por cada elemento del menu
	var $option = $("<option></option>");
	//Obtener valor de la opcion href
	$option.val($anchor.attr("href"));
	//obtener texto de cada menu
	$option.text($anchor.text());
	//agrega la opcion al select
	$select.append($option);
});

	var $button = $("<button>Go</button>");
	$("#menu").append($button);

	$button.click(function(){
	//toma el valor de la opcion seleccionada
	window.location = $select.val();
	});
	




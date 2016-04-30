function printListaReproduccion ( listCanciones )
{ 
var listaHTML = '<ol>';
	for (var i = 0; i < listCanciones.length; i += 1) 
	{
		listaHTML += '<il>Tema:' + listaCanciones[i][0] + ' Por: ' + listaCanciones[0][i];
	}
	listHTML += '</ol>';
	print( listaHTML );
}

function print(html)
{ 
	document.write(html);
}

var playList = [];
playList.push("musica 1" , "autor 1");
playList.push("musica 2" , "autor 2");
playList.push("musica 3" , "autor 2");
playList.unshift("musica 4" , "autor 4");
playList.unshift("musica 4" , "autor 5");

printList( playList );
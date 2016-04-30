/*Codigo que se dio en clase 

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

printList( playList );*/

 //Inicializamos el arreglo y el objeto.
   var array = new Array();
   var pelicula1 = {"nombre": null,"autor": null, "genero": null, "presentación": null};
   var pelicula2 = {"nombre": null,"autor": null, "genero": null, "presentación": null};
   var pelicula3 = {"nombre": null,"autor": null, "genero": null, "presentación": null};
   var pelicula4 = {"nombre": null,"autor": null, "genero": null, "presentación": null};
   var pelicula5 = {"nombre": null,"autor": null, "genero": null, "presentación": null};
   var pelicula6 = {"nombre": null,"autor": null, "genero": null, "presentación": null};

    //Insertamos objeto en el arreglo:
    array.push({"nombre": Alvin y las ardillas ,"autor": Walt Becker, "genero": Aventura , "presentación":22/05/2016});
    console.log("Array despues de añadir este objeto: ");
    console.log(array); 
    mostrarObjetosArray()
   }
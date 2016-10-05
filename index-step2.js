$(document).ready(pied);

// Fonction principale
function pied(){

		function getRandomIntInclusive(min, max) {
  			min = Math.ceil(min);
 			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min +1)) + min;
		}
		var nombre_aleatoire = getRandomIntInclusive(9, 29);
		console.log(nombre_aleatoire);
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		var contenu = parseInt($('input').val(), 10);
		console.log(typeof contenu);

		if(contenu === nombre_aleatoire){
			alert("Gagné!");
		}
		else if(contenu > nombre_aleatoire){
			alert("Perdu, votre nombre est trop grand!");
		}
		else if(contenu < nombre_aleatoire){
			alert("Perdu, votre nombre est trop petit!");
		}

	}
	$('button').click(function(){
			clickValider();
	});	
		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


}
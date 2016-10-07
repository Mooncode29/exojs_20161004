$(document).ready(main);

// Fonction principale
function main(){

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	var nbTentative = 3
		// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	var nbMystere = parseInt(Math.random()*(29-9) + 9);
	
	function demarrerPartie(){
		nbTentative = 3;
		nbMystere = parseInt(Math.random()*(29-9) + 9);
		
	}

	function partieGagnee(){
		return demarrerPartie();
	}

	function partiePerdue(){
		if(nbTentative === 0){
			alert('Perdu');
			return  demarrerPartie();
		}
	}
	
	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){

		var contenu = parseInt($('input').val(), 10);
	
		if(contenu === nbMystere){
			alert('Gagné');
			partieGagnee();
			
		}else if(contenu > nbMystere){
			alert('Perdu,votre nombre est trop grand');
			nb_tentative --;
			$('span').text(nbTentative);
			partiePerdue();
		
		}else if(contenu < nbMystere){
	
			alert('Perdu, votre nombre est trop petit');
			nbTentative --;
			$('span').text(nbTentative);
			partiePerdue();
		
		}
	}
$('button').click(function(){
			clickValider();
	});	
		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
			*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}
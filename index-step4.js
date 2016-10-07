$(document).ready(main);
var nbTentative;
var nbMystere;

function main(){
	
	$('#recupInput').click(function(){
		nbTentative = parseInt($('#tentatives').val(), 10);
		var nb_min = parseInt($('#mini').val(), 10);
		var nb_maxi = parseInt($('#maxi').val(), 10);

		nbMystere = parseInt(Math.random()*(nb_maxi - nb_min) + nb_min);
	});

	function demarrerPartie(){
		nbTentative = parseInt($('#tentatives').val(), 10);
		nb_mystere = parseInt(Math.random()*(nb_maxi - nb_min) + nb_min);
		$('span').text(nb_tentative);
	}

	function partieGagnee(){
		demarrerPartie();
	}

	function partiePerdue(){
		if(nbTentative === 0){
			alert('Perdu');
			demarrerPartie();
		}

	}


	function clickValider(){
		var contenu = parseInt($('#votre_nombre').val(), 10);

		if(contenu === nbMystere){
			alert('Gagné');
			partieGagnee();
		} else if(contenu > nbMystere){
			alert('Perdu, votre nombre est trop grand!');
			nbMystere --;
			$('span').text(nb_tentative);
		} else if(contenu < nb_tentative){
			alert('Perdu, votre nombre est trop petit')
			nbMystere --;
			$('span').text(nb_tentative);
		}
		partiePerdue();
	}
	$('#go').click(function(){
		clickValider();
	});

}

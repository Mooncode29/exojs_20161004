$(document).ready(main);
var nbTentative;
var nbMystere;

function main(){
	
	$('#recupInput').click(function(){
		nbTentative = parseInt($('#tentatives').val(), 10);
		var nbMin = parseInt($('#mini').val(), 10);
		var nbMaxi = parseInt($('#maxi').val(), 10);

		nbMystere = parseInt(Math.random()*(nbMaxi - nbMin) + nbMin);
	});

	function demarrerPartie(){
		nbTentative = parseInt($('#tentatives').val(), 10);
		nbMystere = parseInt(Math.random()*(nbMaxi - nbMin) + nbMin);
		$('span').text(nbTentative);
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
			$('span').text(nbTentative);
		} else if(contenu < nbTentative){
			alert('Perdu, votre nombre est trop petit')
			nbMystere --;
			$('span').text(nbTentative);
		}
		partiePerdue();
	}
	$('#go').click(function(){
		clickValider();
	});

}

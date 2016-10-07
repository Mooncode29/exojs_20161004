$(document).ready(main);
var nb_tentative;
var nb_min;
var nb_maxi;
var nb_mystere;

function main(){

		
	$('#recupInput').click(function(){
	nb_tentative = parseInt($('#tentatives').val(), 10);
	console.log(nb_tentative);
	nb_min = parseInt($('#mini').val(), 10);
	console.log(nb_min);
	nb_maxi = parseInt($('#maxi').val(), 10);
	console.log(nb_maxi);

	nb_mystere = parseInt(Math.random()*(nb_maxi - nb_min) + nb_min);
	console.log(nb_mystere);
	});


	function demarrerPartie(){
		nb_tentative = parseInt($('#tentatives').val(), 10);
		console.log(nb_tentative);
		nb_mystere = parseInt(Math.random()*(nb_maxi - nb_min) + nb_min);
		console.log(nb_mystere);
		$('span').text(nb_tentative);


	}

	function partieGagnee(){
		demarrerPartie();

	}

	function partiePerdue(){
		if(nb_tentative === 0){
			alert('Perdu');
			demarrerPartie();
		}

	}


	function clickValider(){
		var contenu = parseInt($('#votre_nombre').val(), 10);

		if(contenu === nb_mystere){
			alert('Gagné');
			partieGagnee();
		}

		else if(contenu > nb_mystere){
			alert('Perdu, votre nombre est trop grand!');
			nb_tentative --;
			$('span').text(nb_tentative);
		}

		else if(contenu < nb_tentative){
			alert('Perdu, votre nombre est trop petit')
			nb_tentative --;
			$('span').text(nb_tentative);
		}
		partiePerdue();
	}
	$('#go').click(function(){
		clickValider();
		console.log('coucou');

	});

}
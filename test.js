var $nom = document.getElementById('nom');
var $prenom = document.getElementById('prenom');
var $age = document.getElementById('age');
var $pseudo = document.getElementById('pseudo');
var $mdp1 = document.getElementById('mdp1');
var $mdp2 = document.getElementById('mdp2');
var $pays = document.getElementById('pays');
var $sexe = document.getElementById('sexe');

$sexe.addEventListener('mouseover',function(){
	var $span0 = document.getElementById('el-sexe');
	$span0.innerHTML = "<img src='info.png'> Choisir votre sexe";

	var $masc = document.getElementById('masculin');
	$masc.addEventListener('click',function(){
		$span0.innerHTML = "<img src='good.png'>";
	});

});

var maRegex1 = /^[a-zA-Z]{2,}$/;
var maRegex2 = /^[a-zA-Z]{4,}$/;
var maRegex3 = /^[a-zA-Z0-9]{8,}$/;

$nom.addEventListener('focus',function(e){
	var $span1 = document.getElementById("el-nom");
	$span1.innerHTML = "<img src='info.png'> Le nom doit contenir au moins deux caractères";

	$nom.addEventListener('keyup',function(e){
		if(maRegex1.test(e.target.value) == false){
			$span1.innerHTML = "<img src='bad.png'> Le nom doit contenir au moins deux caractères"
			
		}else{
			$span1.innerHTML = "<img src='good.png'>";	
		}
	});
});
$prenom.addEventListener('focus',function(e){
	var $span2 = document.getElementById("el-prenom");
	$span2.innerHTML = "<img src='info.png'> Le prenom doit contenir au moins deux caractères";

	$prenom.addEventListener('keyup',function(e){
		if(maRegex1.test(e.target.value) == false){
			$span2.innerHTML = "<img src='bad.png'> Le prenom doit contenir au moins deux caractères"
			
		}else{
			$span2.innerHTML = "<img src='good.png'>";	
		}
	});
});
$age.addEventListener('focus',function(e){
	var $span3 = document.getElementById("el-age");
	$span3.innerHTML = "<img src='info.png'> L'age doit être un nombre compris entre 5 et 140";

	$age.addEventListener('keyup',function(e){
		if((e.target.value) < 5 || (e.target.value) > 140){
			$span3.innerHTML = "<img src='good.png'> L'age doit être un nombre compris entre 5 et 140"
			
		}else{
			$span3.innerHTML = "<img src='good.png'>";	
		}
	});
});
$pseudo.addEventListener('focus',function(e){
	var $span4 = document.getElementById("el-pseudo");
	$span4.innerHTML = "<img src='info.png'> Le pseudo doit contenir au moins quatre caractères";

	$pseudo.addEventListener('keyup',function(e){
		if(maRegex2.test(e.target.value) == false){
			$span4.innerHTML = "<img src='good.png'> Le pseudo doit contenir au moins quatre caractères"
			
		}else{
			$span4.innerHTML = "<img src='good.png'>";
		}
	});
});
$mdp1.addEventListener('focus',function(e){
	var $span5 = document.getElementById("el-mdp1");
	$span5.innerHTML = "<img src='info.png'> Le mot de pass doit contenir au moins huit caractères";

	$mdp1.addEventListener('keyup',function(e){
		if(maRegex3.test(e.target.value) == false){
			$span5.innerHTML = "<img src='bad.png'> Le mot de pass doit contenir au moins huit caractères"
			
		}else{
			$span5.innerHTML = "<img src='good.png'>";	
		}
	});
});
$mdp2.addEventListener('focus',function(e){
	var $span6 = document.getElementById("el-mdp2");
	$span6.innerHTML = "<img src='info.png'> Confirmer le mot de pass";

	$mdp2.addEventListener('keyup',function(e){
		if(maRegex3.test(e.target.value) == false){
			$span6.innerHTML = "<img src='bad.png'> Le mot de pass doit contenir au moins huit caractères"
			
		}else{
			$span6.innerHTML = "<img src='good.png'>";	
		}
	});
});

$pays.addEventListener('mouseover',function(e){
	var $span7 = document.getElementById("el-pays");
	$span7.innerHTML = "<img src='info.png'> Choisir votre pays";

	var $country = document.getElementById('country1');
	$country.addEventListener('click',function(){
		$span7.innerHTML = "<img src='good.png'>";
	});
});
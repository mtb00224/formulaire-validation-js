//declaration d'un tableau d'objet contenant mes different affichages
const data = [
	{el: "nom", info:"Le nom doit contenir au moins deux caractères", success: "symbole", error:"Le nom doit contenir au moins deux caractères"},
	{el: "prenom", info:"Le prenom doit contenir au moins deux caractères", success: "symbole", error:"Le tahirou doit bien être dans le prenom"},
	{el: "age", info:"L' age doit contenir au moins deux chiffres", success: "Bravo", error:"Le tahirou doit bien être dans le nom"},
	{el: "pseudo", info:"Le pseudo doit contenir au moins deux caractères", success: "Yes", error:"Le tahirou doit bien être dans le nom"},
	{el: "mdp1", info:"le mot de pass doit contenir au moins deux caractères", success: "All right", error:"Le tahirou doit bien être dans le nom"},
	{el: "mdp2", info:"La confirmation du mot de pass 2 doit contenir au moins deux caractères", success: "Excellent", error:"Le tahirou doit bien être dans le nom"}

]
var maRegex = /^[a-zA-Z]{2,}$/;

var suc1 = document.getElementById('suc1');
suc1.style.display = "none";
var ech1 = document.getElementById('ech1');
ech1.style.display = "none";

data.forEach(function(element){
	$input = document.getElementById(element.el)

	$input.addEventListener('focus', function(e) {
	$span = document.getElementById('el-'+element.el)
	$span.innerText = " "+element.info;
	
	})

	$input.addEventListener('keyup',function(e){
		$span = document.getElementById('el-'+element.el);
		
		if(maRegex.test(e.target.value) == false){
			suc1.style.display = "none"
			ech1.style.display = "block"
			$span.innerText = " "+element.error
			
		}else{
			ech1.style.display = "none";
			suc1.style.display = "block";
			$span.innerText = " "+element.success	
		}
	})
});
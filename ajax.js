
// Foncton qui réalise l'appel Ajax en lieu et place de la fonction $.post de jQuery qui faisait le café.
// La fonction prend en paramètre le fichier dont on a besoin, en string, la fonction qu'on veut appeler, str également ainsi que les paramètres de la fonction, souvent en tableau.
// J'ai pas encore trouvé la manière de faire un return du JSON.parse afin de sortir de la fonction et de décentraliser un peu l'architeture du programme
// Pour gérer le retour de l'appel et exploiter les données il faut faire des if sous "let results = ..." du style if(func == 'nomDeLaFonction')
function ajaxCall(file, func, params) {
	//Crée un objet xhttp qui permettra de communiquer avec le serveur
	let xhttpPost = new XMLHttpRequest();
	// .open est la méthode qui permet de communiquer avec un fichier php de manière asynchrone ou non, en POST ou en GET
	xhttpPost.open('POST', 'ajax.php', true);
	// Permet de préciser quel type de données on envoie, ici JSON
	xhttpPost.setRequestHeader('Content-Type', 'application/json');
	// Ici on définit le tableau data qui sera passé au fichier php
	data = [true, file, func, params];
	// On déclenche la requête en faisant passer data en JSON dans l'appel
	xhttpPost.send(JSON.stringify(data));
	xhttpPost.onreadystatechange = function() {
		// Quand la reqûete a été effectuée
		if (this.status == 200) {
			// On récupère les récupère d'un fichier JSON et on les transforme en données exploitables en JS
			let results = JSON.parse(this.responseText);
			// Si la fonction passée dans l'appel est displayEmployees
			if (func == 'displayEmployees') {
				// On appel une fonction bien particulière; ici pour créer le tableau des employés.
				makeEmployeeTable(results);
			}
		}
	};
}

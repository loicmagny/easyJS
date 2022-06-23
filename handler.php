<?php
// On décode le JSON envoyé depuis le JSON
$data = json_decode(file_get_contents("php://input"));
// Si il y a un appel
if (isset($data[0])) {
    // On appelle la fonction qui cherche les fonctions
    functionFinder($data[1], $data[2], $data[3]);
}

// Importe le fichier requis pour trouver la fonction puis appelle ladite fonction
// La valeur de retour de la fonction est encoder en JSON
// Puis afficher, afin d'être décodées en JS
function functionFinder($file, $function, $params)
{
    // On appelle le fichier concerné
    require_once '' . $file . '.php';
    // Puis on appelle la fonction recherchée
    echo json_encode(call_user_func($function, $params));
}

<?php
	$message = $_POST['message'];
	$lastName = $_POST['lastname'];
	$firstName = $_POST['firstname'];
	$mail = $_POST['mail'];
	$myMessage = "Nom: ".$lastName."\nPrenom: ".$firstName."\nEmail: ".$mail."\nMessage: ".$message;
	if (mail('dcl.thibauds@18pixel.fr', 'form de contact', $myMessage, "FROM : ".$mail))
		echo "message envoye";
	else
		echo "echec de l'envoi";
?>
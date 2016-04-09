<?php
//Get external variables
$destMail = 'bclayton123@comcast.net';
$senderSubject = 'Feedback from BJCP review';
$senderName = $_REQUEST["senderName"];
$senderMail = $_REQUEST["senderMail"];
$senderBody = $_REQUEST["senderBody"];
//Add header info
$header = "From: $senderName <$senderMail>\n";
$header .= "Reply-To: $senderName <$senderMail>\n";
//Send Email (to, subject, $senderBody, $header);
mail($destMail, $senderSubject, $senderMail, $senderBody, $header);
?>
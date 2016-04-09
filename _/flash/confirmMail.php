<?php
//Get external variables
$destMail = 'bclayton123@comcast.net';
$senderName = $_REQUEST["senderName"];
$senderMail = $_REQUEST["senderMail"];
$senderSubject = 'feedback from BJCP review';
$senderBody = $_REQUEST["senderBody"];
//Add header info
$header = "From: $senderName <$senderMail>\n";
$header .= "Reply-To: $senderName <$senderMail>\n";
//Send Email (to, subject, $senderBody, $header);
if(@mail($destMail, $senderSubject, $senderBody, $header)){
echo "confirmStatus=success&confirmName=$senderName&confirmMessage=The email was sent successfully.";
}else{
echo "confirmStatus=failed&confirmName=$senderName&confirmMessage=There was an error in sending your email.";
}
?>
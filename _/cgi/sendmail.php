<?
  $name = $_REQUEST['name'] ;
  $email = $_REQUEST['email'] ;
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;

  mail( "webmaster@cannoneers.net", "Subject: $subject",
    "$message 
	$name 
	$email", "From: $email" );
  header( "Location: http://www.cannoneers.net/thanks.html" );
?>
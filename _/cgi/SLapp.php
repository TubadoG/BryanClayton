<?
  $fname = $_REQUEST['fname'] ;
  $lname = $_REQUEST['lname'] ;
  $email = $_REQUEST['email'] ;
  $year = $_REQUEST['year'] ;

  mail( "claytobs@npenn.org", "Subject: $email",
    "First Name is $fname $lname
	$year 
	$email", "From: $email" );
  header( "Location: http://www.bryanclayton.net/NPMK" );
?>
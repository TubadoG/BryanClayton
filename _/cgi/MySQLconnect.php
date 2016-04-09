<?php
//Set Variables
$hostname='h50mysql57.secureserver.net';
$username='bclayton';
$password='Vader1420';
$dbname='bclayton';
//Connect to Server
mysql_connect($hostname, $username, $password) or die("Unable to connect");
echo "Connected to MySQL<br />";
mysql_select_db("bclayton") or die("Unable to Connect to 'bclayton'");
echo "Connected to Database<br/>";
/*Create a table
mysql_query("CREATE TABLE npmk(
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY(id),
 fname VARCHAR(30), 
 lname VARCHAR(30),
 year INT,
 email VARCHAR(30))")
 or die(mysql_error());  

echo "Table Created!";
*/
/*Insert Data
mysql_query("INSERT INTO npmk
(fname, lname, email) VALUES('Bryan', 'Clayton', 'bclayton123@comcast.net')")
or die("Oops, something went wrong!");
echo("Inserted, wink, wink...<br/>");
mysql_query("INSERT INTO npmk
(fname, lname, year, email) VALUES('Bryan', 'Clayton', '1998', 'tubadog@yahoo.com')")
or die("Oops, something went wrong!");
echo("Nudge, nudge...")
*/
//Retrieve Date
$result = mysql_query("SELECT * FROM npmk")
or die("result error<br/>");
while($row = mysql_fetch_array( $result )){
	echo $row['fname']." ".$row['lname']. "<br/>". $row['year']. "-". $row['email'];
	echo"<br />";
}
/*echo "First Name: ".$row['fname'];
echo "<br/>Last Name: ".$row['lname'];
echo "<br/>Year: ".$row['year'];
echo "<br/>Email Address: ".$row['email'];
*/
?>
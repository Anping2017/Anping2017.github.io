<?php
     $serverName=$_SERVER['HTTP_HOST'];
	 
     if($serverName=="localhost"){
     	
	     $sql_server="localhost";
		 
	     $sql_uname="root";
		 
	     $sql_pwd="";
		 
	     $sql_name="greenpatch";
     }
	 
	 $conn=mysqli_connect($sql_server, $sql_uname, $sql_pwd,$sql_name);
	 
	 if ($conn == FALSE){
	 	
	     die("Error connecting to mysql server :" . mysqli_connect_error());
		 
	 }
	 

?>
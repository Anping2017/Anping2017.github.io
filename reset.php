<?php
   session_start();
   $login_session=FALSE;
   if(isset($_SESSION['login_session'])){
   	$login_session=TRUE;
   }
?>
<?
	require_once 'config.php';
	require_once 'connect.php';

?>

<!--
/*
 *      rainbow9
 *		interface development lab
 *
 *      Copyright 2007 Azer Koculu <http://azer.kodfabrik.com>
 *		Fri Apr 27, 1:47 PM	
 *
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<title>rainbow9 project
		</title>
		<meta content="text/html;charset=utf-8" http-equiv="content-type" />
		<style type="text/css">
			@import url(<?=($r["path"]!=""?"/{$r["path"]}":"")?>/inc/<? print preg_match("/MSIE/i",$_SERVER["HTTP_USER_AGENT"])?"ie":"style" ?>.css);
		</style>
		<script src="<?=($r["path"]!=""?"/{$r["path"]}":"")?>/rainbow9.js" type="text/javascript"></script><?
		
			if(array_key_exists("open",$_GET))
				printf("\n\t\t<script type=\"text/javascript\">var opendoc = %s</script>",$_GET["open"]);
			
			$email = isset($_SESSION["email"])?$_SESSION["email"]:(isset($_COOKIE["email"])?$_COOKIE["email"]:0);
			$password = isset($_SESSION["password"])?$_SESSION["password"]:(isset($_COOKIE["password"])?$_COOKIE["password"]:0);
  			
  			$d = u_c($email,$password);
  			if($d)
  			{
  				$_SESSION["email"] = $email;
  				$_SESSION["password"] = $password;
  				print "\n\t\t<script type=\"text/javascript\">var email = '$email'; var id = $d[id];</script>";
  				print "\n\t\t<script type='text/javascript' src='".($r["path"]!=""?"/{$r["path"]}":"")."/am.php?do=lo&i=0'></script>";
  			}
  		?>
  		
  		<script src="<?=($r["path"]!=""?"/{$r["path"]}":"")?>/inc/engine.js" type="text/javascript"></script>
  		
	</head>
	<body>
	</body>
</html>

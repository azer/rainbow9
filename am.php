<?
/*
 *      rainbow9
 *
 *      Copyright 2007 Azer Koçulu <http://azer.kodfabrik.com>
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
	
	require_once 'config.php';
	require_once 'connect.php';
	
	$auth = u_c($_SESSION["email"],$_SESSION["password"]);
	$user = $auth?$auth[id]:0;
	
	switch((isset($_GET["do"])?$_GET["do"]:$_POST["do"]))
	{
		case "ls":
			a_list($user);
			break;
		case "lo":
			a_load($_GET["i"],$user);
			break;
		case "sv":
			u_a($auth);
			a_sv($user,$_GET["i"],$_GET["load"]);
			break;
		default:
			print "/*<h1>Method not found.</h1>*/nav.msg('Method not found.','red')";
	}

?>

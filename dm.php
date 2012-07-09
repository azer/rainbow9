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
		case "del":
			u_a($auth);
			d_del($_GET["key"],$_GET["reset"],$user);
			break;
		case "sv":
			u_a($auth);
			d_save($_POST["public"],$_POST["type"],$_POST["key"],$user,$_POST["title"],$r["domain"]=="localhost"?$_POST["js"]:addslashes($_POST["js"]),$r["domain"]=="localhost"?$_POST["css"]:addslashes($_POST["css"]),$r["domain"]=="localhost"?$_POST["html"]:addslashes($_POST["html"]),$r["domain"]=="localhost"?$_POST["xml"]:addslashes($_POST["xml"]),$r["domain"]=="localhost"?$_POST["svg"]:addslashes($_POST["svg"]),$r["domain"]=="localhost"?$_POST["xaml"]:addslashes($_POST["xaml"]),$_POST["tag"]);
			break;
		case "owner":
			u_a($auth);
			d_owner($_GET["data"],$_GET["code"],$user);
			break;
		case "open":
			d_open($_GET["open"],$user);
			break;
		case "view":
			d_view($_GET["key"],$_GET["type"],$user);
			break;
		case "index":
			d_index($_GET["index"]);
			break;
		case "anything":
			u_a($auth);
			break;
		default:
			print "nav.msg('Method not found.','red'); ";
	}
	if($auth)
	{
		d_list($user);
		print "\narchive.search('');";
	}
?>

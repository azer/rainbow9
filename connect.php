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

	$d["link"] = mysql_connect($d["host"],$d["user"],$d["password"]);
	mysql_select_db($d["database"],$d["link"]);
	
	function q($query="",$t=0)
	{
		$q = $query;
		$query = mysql_query($query);
		if(mysql_error()!="")die("/*<h1>Internal server error, try again please.</h1>*/nav.msg('Internal server error, try again please.','red');");
		if($t==0)return $query;
		$data = array();
		while($row = mysql_fetch_array($query))$data[] = $row;
		return count($data)>0?(count($data)>1 || $t>1?$data:$data[0]):Array();
	}
	
	function m($str,$pt=0,$r="")
	{
		$p = Array("/^\w+$/","/\w+@\w+[\w\.]+$/","/^[\w\s@\.,_-]+$/");
		return preg_match($p[$pt],$str);
	}
	
	function r($str,$pt=0,$r="")
	{
		$p = Array("/[^\w]/","/[^\w@\._]/","/[^\w\s@\._]/","/\n/");
		return preg_replace($p[$pt],$r,$str);
	}
	
	function f($file=0)
	{
		if(is_dir($file))
		{
			$f = array();
			$d = dir($file);
			while (false !== ($entry = $d->read()))
				if($entry!="." && $entry!="..")
					$f[] = $entry;
			$d->close();
			return $f;	
		}
		elseif(file_exists($file))
			return file($file);
	}
	
	/* 
	 * user management
	 */
	
	function u_mail($e,$p="*****")
	{
		@mail($e,"Account Information (rainbow9)","Hi,\n\nYour rainbow9.org information has been updated.If you think that this account isn't your, you can delete it.\n\nE-mail:$e\nPassword:$p\nIp:{$_SERVER['REMOTE_ADDR']}\n\nThank you very much,\nRainbow9.org","From: noreply@rainbow9.org");
	}
	
	function u_a($v)
	{
		if(!$v)
		{
			u_lo();
			die("\nnav.msg('Session timeout.','red')");
		}
	}
	
	function u_c($email,$password)
	{
		$d = q("select * from user where email='$email' && password='$password'",1);
		if(count($d)>0)
			return $d;
		return 0;
	}
	
	function u_su($email,$password)
	{
		if(!m($email,1) || !m($password))
			die("nav.msg('".(!m($email,1)?"Invalid e-mail address":"Password contains illegal characters")."','red');  nav.form.button_su.style.display = \"inline\";");
		
		$k = q("SELECT * FROM log WHERE (title='su' && ip='".$_SERVER["REMOTE_ADDR"]."') && date>".(time()-900),2);
		if(count($k)>4)die("nav.msg('<strong>You have used up your registeration quota!</strong><br /> Please wait 15 minutes before trying again.','red'); nav.form.button_su.style.display = \"inline\"; ");
		
		if(count(q("select * from user where email='$email'",1))>0)
			die("nav.msg('The email address you entered is already in use.','red'); nav.form.button_su.style.display = \"inline\"");
		q("insert into user(email,password) values('$email','".md5($password)."')");
		q("insert into log (date,title,ip) VALUES (".time().",'su','{$_SERVER['REMOTE_ADDR']}')");
		
		$_SESSION["email"] = $email;
		$_SESSION["password"] = md5($password);
		setcookie("email",$email,time()+3600*24*15);
		setcookie("password",md5($password),time()+3600*24*15);
		u_mail($email,$password);
		print "user.email = '$email'; user.id = ".u_id($email)."; nav.close(); nav.msg('Thank you for registering, this panel will change in 3 seconds..','green'); setTimeout('nav.init(); nav.msg(0)',3000)";
	}
	
	function u_si($email,$password)
	{
		if(!m($email,1) || !m($password))
			die("nav.msg('".(!m($email,1)?"Invalid e-mail address":"Password contains illegal characters")."','red');  nav.form.button_si.style.display = \"inline\";");
		
		$k = q("SELECT * FROM log WHERE (title like 'wp-%' && ip='".$_SERVER["REMOTE_ADDR"]."') && date>".(time()-900),2);
		if(count($k)>4)die("nav.msg('<strong>You have used up your failed login quota!</strong><br /> Please wait 15 minutes before trying again. Don\'t forget that the password is case sensitive. Forgotten your password? <a href=\'javascript:nav.open(\"reset\")\'>Click here!</a>','red');  nav.form.button_si.style.display = \"inline\"; ");
		$u = u_c($email,md5($password));
		if($u)
		{
			$_SESSION["email"] = $email;
			$_SESSION["password"] = md5($password);
			setcookie("email",$email,time()+3600*24*15);
			setcookie("password",md5($password),time()+3600*24*15);
			print "user.email = '$email'; user.id = $u[id]; nav.init(); nav.msg('You should <a href=\'javascript:document.location.href=document.location.href\'>reload the window</a> to load extensions.'); nav.close();";
		} else {
			q("insert into log (date,title,ip) VALUES (".time().",'wp-$email','{$_SERVER['REMOTE_ADDR']}')");
			if(count($k)>3)die("nav.msg('<strong>Wrong username or password.You have used up your failed login quota!</strong><br /> Please wait 15 minutes before trying again. Don\'t forget that the password is case sensitive. Forgotten your password? <a href=\'javascript:nav.open(\"reset\")\'>Click here!</a>','red');  nav.form.button_si.style.display = \"inline\"; ");
			die("nav.msg('You have entered an invalid username or password.You have used ".(count($k)+1)." out of 5 <br /> login attempts. After all 5 have been used, you will be unable to login for 15 Minutes.','red'); nav.form.button_si.style.display = \"inline\"; ");
		}
	} 
	
	function u_cp($password)
	{
		if(!m($password))
			die("nav.msg('Password contains illegal characters','red'); nav.form.cp_submit.style.display = 'inline'");
		q(sprintf("UPDATE user SET password='%s' WHERE email='%s' && password='%s'",md5($password),$_SESSION["email"],$_SESSION["password"]));
		$_SESSION["password"] = md5($password);
		setcookie("password",md5($password),time()+3600*24*15);
		print "nav.msg(0); nav.form.cp_submit.style.display = 'inline'";
	}
	
	function u_ce($e)
	{
		if(!m($e,1))
			die("nav.msg('Invalid E-Mail Address.','red'); nav.form.ce_submit.style.display = 'inline'");
			
		if(count(q("select * from user where email='$e'",1))>0)
			die("nav.msg('The email address you entered is already in use.','red'); nav.form.ce_submit.style.display = 'inline';");
			
		q(sprintf("UPDATE user SET email='%s' WHERE email='%s' && password='%s'",$e,$_SESSION["email"],$_SESSION["password"]));
		u_mail($e);
		$_SESSION["email"] = $e;
		setcookie("email",$e,time()+3600*24*15);
		print "nav.msg(0); nav.form.ce_submit.style.display = 'inline'; ";
	}
	
	function u_lo()
	{
		$_SESSION["email"] = "";
		$_SESSION["password"] = "";
		setcookie("email","",time()+3600*24*15);
		setcookie("password","",time()+3600*24*15);
		print "user.email = ''; user.id = 0; nav.init(); nav.msg(0); nav.close()";
	}
	
	function u_da()
	{
		q("DELETE FROM user WHERE id = ".u_id($_SESSION["email"]));
		u_lo();
	}
	
	function u_id($email)
	{
		$d = q("select * from user where email='$email'",1);
		return $d[id];
	}
	
	function u_re($e)
	{
		if(!m($e,1))
			die("nav.msg('Invalid E-Mail Address.','red'); nav.form.ce_submit.style.display = 'inline'");
			
		$k = q("SELECT * FROM log WHERE (title like 're_$e_%' && ip='".$_SERVER["REMOTE_ADDR"]."') && date>".(time()-900),2);
		if(count($k)>4)die("nav.msg('<strong>You have used up your quota!</strong><br /> Please wait 15 minutes before trying again.','red');  nav.form.button_re.style.display = \"inline\"; ");
		if(!count(q("select * from user where email='$e'",2))>0)die("nav.msg('Invalid e-mail address.','red');");
		$key = rand(0,99999);
		q("insert into log (date,title,ip) VALUES (".time().",'re_{$e}_{$key}','{$_SERVER['REMOTE_ADDR']}')");
		@mail($e,"Your login details for Rainbow9.org","Hi,\n\nYou have requested to reset your password on Rainbow9 because you have forgotten your password. If you did not request this, please ignore it. It will expire and become useless in 24 hours time.\n\nTo reset your password, please visit the following page:\nhttp://rainbow9.org/?gp=$e&i=$key\n\nRainbow9.org","From: noreply@rainbow9.org");
		die("nav.msg('Your username and details about how to reset your password have been sent to you <br />by email. You will now be returned to where you were before.','red'); nav.form.button_re.style.display = \"inline\"; ");
	}
	
	function u_gp($e,$i)
	{
		if(!m($e,2) || !m($i,2))
			die("nav.msg('Invalid input.','red');");
		
		if(count(q("select * from log where title='re_{$e}_{$i}' && date>".(time()-86400),2))>0)
		{
			$p = rand(999,99999);
			q("update user set password='".md5($p)."' where email='$e'");
			q("delete from log where title='re_{$e}_{$i}'");
			u_mail($e,$p);
			die("nav.msg('Your login details has been sent, check your mailbox.','green')");
		} else {
			die("nav.msg('Invalid session.','red')");
		}
	}
	
	/* 
	 * data management
	 */
	
	function d_check($doc,$user)
	{
		if(count(q("select * from code where num=$doc && user=$user",1))>0)
			return 1;
		else
			return 0;
	}
	
	function d_save($public,$type,$key,$user,$title,$js,$css,$html,$xml,$svg,$xaml,$tag)
	{
		global $date;
		if(!m($public) || !m($type) || !m($key) || !m($user) || !m($title,2) || (!m($tag,2) && strlen($tag)>0))
			die("nav.msg('An error occured.','red');");
		if($key==0 || !d_check($key,$user))
		{
			$key = rand(0,100000000);
			if($html=="null")
			{
				$html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\\n\\n\\t<head>\\n\\t\\t<title>'.$title.'</title>\\n\\t\\t<meta http-equiv="content-type" content="text/html;charset=utf-8" />\\n\\t\\t<meta name="generator" content="Rainbow9.org" />\\n\\t\\t<style type="text/css">\\n\\t\\t\\t@import url(css/);\\n\\t\\t</style>\\n\\t\\t<script type="text/javascript" src="js/"></script>\\n\\t</head>\\n\\n\\t<body>\\n\\n\\t</body>\\n\\n</html>';
				print "editor.value[2] = '$html'; ";
			}
			q("insert into code(num,public,type,date,user,title,js,css,html) VALUES ($key,$public,$type,'$date',$user,'$title','$js','$css','$html')");
		}
		else 
			q("UPDATE code SET public=$public, type=$type,date='$date',title='$title',js='$js',css='$css',html='$html',xml='$xml',svg='$svg',xaml='$xaml' WHERE num=$key");
		
		q("delete from tag where code=$key");
		foreach(spliti(" ",$tag) as $k=>$v)
			if(m($v))
				q("insert into tag(title,code) values('$v',$key)");
			
		print ("doc.key = $key; doc.user = $user; doc.date = '$date'; nav.init(); nav.msg(0); setTimeout(idle.replace,10); ");
	}
	
	function d_owner($d,$key,$user)
	{
		if(!m($d,2) || !m($key))
			die("nav.msg('An error occured.','red');");
		elseif(!d_check($key,$user))
			die("You should be owner of this document to setting another owner.");
		
		q("delete from owner where code=$key");
		
		foreach(spliti(" ",$d) as $k=>$v)
			if(m($v))
				q("insert into owner(code,email) values($key,$v)");
		print ("nav.msg(0)");
	}
	
	
	
	function d_del($doc,$reset,$user)
	{
		if(!m($doc) || !m($reset))
			die("nav.msg('An error occured.','red');");
		if(q("delete from code where num=$doc && user = $user"))
			print "nav.msg(0);".($reset=="true"?"doc.reset();":"")."nav.init();";
		else
			print "nav.msg('An error occured.','red')";
	}
	
	function d_list($user)
	{
		$d = q("select * from code where user = $user",2);
		if(!count($d)>0)die("");
		print "\narchive.data = [";
		foreach($d as $k=>$v)
		{
			print ($k>0?",":"")."{ id:{$v[id]}, key:{$v[num]}, title:'$v[title]', tag:{";
			$td = q("select * from tag where code = {$v[num]}",2);
			foreach($td as $tk=>$tv)
				print ($tk>0?",":"")."{$tv[title]}:0";
			print "}}";
		}
		print "];";
	}
	
	function d_open($key,$user)
	{
		if(!m($key))
			die("nav.msg('Invalid document key.','red')");
		$d = q("select * from code where num=$key",1);
		if(!count($d)>0)die("dm.msg('Could not found the document that you opened.','red')");
		$isOwner = count(q("select * from owner where code=$key && email='{$_SESSION['email']}'",1))>0;
		if($d["public"]==0 && $d["user"]!=$user && !$isOwner)
			die("nav.msg('Error: You should be owner to view this document.','red')");
		
		$dt = q("select * from tag where code = $key",2);
		$tag = "";
		foreach($dt as $k=>$v)
			$tag.=($k>0?" ":"").$v["title"];
			
		$do = q("select * from owner where code = $key",1);
		$owner = "";
		foreach($do as $k=>$v)
			$owner.=($k>0?" ":"").$v;
		
		print "doc.user = ".($isOwner?$user:$d["user"])."; ";
		print 'editor.value[0] = "'.(r(addslashes($d["js"]),3,"\\n")).'";';
		print 'editor.value[1] = "'.(r(addslashes($d["css"]),3,"\\n")).'";';
		print 'editor.value[2] = "'.(r(addslashes($d["html"]),3,"\\n")).'";';
		print 'editor.value[3] = "'.(r(addslashes($d["xml"]),3,"\\n")).'";';
		print 'editor.value[4] = "'.(r(addslashes($d["svg"]),3,"\\n")).'";';
		print 'editor.value[5] = "'.(r(addslashes($d["xaml"]),3,"\\n")).'";';
		print <<<E0D
		
		doc.title = '{$d["title"]}';
		doc.pub = {$d["public"]};
		doc.type = {$d["type"]};
		doc.date = '{$d["date"]}';
		doc.key = {$d["num"]};
		doc.tag = '$tag';
		idle.owner = '$owner';
		
		dm.open(true);
		nav.msg(0);
		nav.close();
E0D;

	}
	
	function d_view($key,$type,$user)
	{
		global $r;
		$err403 = "<html><head><title>403 Directory listing denied</title></head><body><h1>Directory listing denied</h1><p>The requested document is not public.You should be owner to view.</p><hr /><p><em>powered by <a href='http://rainbow9.org'>Rainbow9</a></em></p></body></html>";
		$err404 = "<html><head><title>404 Not found</title></head><body><h1>Not found</h1><p>The requested document was not found on this server.</p><hr /><p><em>powered by <a href='http://rainbow9.org'>Rainbow9</a></em></p></body></html>";
		if(!m($key) || (!m($type) && strlen($type)>0))
			die($err403);
		$d = q("select * from code where num=$key",1);
		if(!count($d)>0)die($err404);
		$isOwner = count(q("select * from owner where code=$key && email='{$_SESSION['email']}'",1))>0;
		if($d["public"]==0 && $d["user"]!=$user && !$isOwner)
			die($err403);
		
		$mimetypes = Array("html"=>"text/html","js"=>"text/javascript","css"=>"text/css","xml"=>"text/xml","svg"=>"image/svg+xml","xaml"=>"text/xml");
		
		
		if(!$mimetypes[$type] && strlen($type)>0)die($err404);
		
		
		
		if($type!="")
		{
			header("Content-type: ".$mimetypes[$type]);
			print $d[$type];
		}
		else
		{
			header("Content-type: text/html");
			print <<<E0D
<html>
	<head>
		<title>Index of /$key</title>
	</head>
	<body>
		<h1>Index of /$key</h1>
		<ul>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view'>..</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/index.html'>index.html</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/css'>css/</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/js'>js/</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/xml'>xml/</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/svg'>svg/</a></li>
			<li><a href='http://{$r["domain"]}/{$r["path"]}/view/$key/xaml'>xaml/</a></li>
		</ul>
		<hr />
		<p>
			<em>
				powered by <a href='http://rainbow9.org'>Rainbow9</a>
			</em>
		</p>
	</body>
</html>
E0D;
		}
		die();
	}
	
	function d_index($type)
	{
		global $r;
		if(!m($type))die("");
		$d = q("select * from code",2);
		$list = "";
		foreach($d as $k=>$v)
			$list.="<li><a href='http://{$r["domain"]}/{$r["path"]}/$type/{$v['num']}'>{$v['num']}/</a></li>";
		print <<<E0D
<html>
	<head>
		<title>Index of /$type</title>
	</head>
	<body>
		<h1>Index of /$type</h1>
		<ul>
			<li><a href='http://{$r["domain"]}/{$r["path"]}'>..</a></li>
			$list
		</ul>
		<hr />
		<p>
			<em>
				powered by <a href='http://rainbow9.org'>Rainbow9</a>
			</em>
		</p>
	</body>
</html>
E0D;
die();
	}
	
	
	/* 
	 * addon management
	 */
	
	function a_check($user,$file)
	{
		if($user==0)return false;
		return count(q("select * from addon where user=$user && file='$file'",1))>0;
	}
	
	function a_list($user)
	{
		print "am.data = [";
		foreach(f("addon") as $key=>$value)
		{
			$fl = f("addon/$value");
			$title = spliti("title:",substr($fl[1],0,strlen($fl[1])-1));
			$desc = spliti("description:",substr($fl[2],0,strlen($fl[2])-1));
			$developer = spliti("developer:",substr($fl[4],0,strlen($fl[4])-1));
			$tag = spliti("tag:",substr($fl[3],0,strlen($fl[3])-1));
			$tag = spliti(" ",$tag[1]);
			$tag_ = "";
			foreach($tag as $k=>$v)
				$tag_ .= ($k>0?",":"")."'$v':0";
			
			print ($key>0?",":"").sprintf("{ file:'$value', title:'%s', description:'%s', tag:{%s}, developer:'%s', sel:%s }",$title[1],$desc[1],$tag_,$developer[1],a_check($user,$value)?"3":"0");
		}
		print "]; am.search();";
	}
	
	function a_load($item,$user)
	{
		if(!m($item,2))die("nav.msg('Invalid input.','red'); nav.form.am_bload.disabled=false; nav.form.am_bsave.disabled=false; idle.replace();");
			
		if(strlen($item)==1)
		{
			foreach(q("select * from addon where user=$user",2) as $k=>$v)
				include("addon/".$v["file"]);
			die("");
		}
		
		$item = spliti(",",$item);
		
		foreach($item as $k=>$v)
		{
			if(substr($v,-3,3)==".js")
			{
				print "\n\n";
				include("addon/$v");
			}
		}
		print "\n\nnav.msg(0);   nav.form.am_bload.disabled=false; nav.form.am_bsave.disabled=false; idle.replace();";
	}
	function a_sv($user,$item,$load)
	{
		if(!m($item,2) || !m($load,2))
			die("nav.msg('Invalid input.','red'); nav.form.am_bload.disabled=false; nav.form.am_bsave.disabled=false; idle.replace();");
			
		$item = spliti(",",$item);
		
		foreach($item as $k=>$v)
		{
			if(substr($v,-3,3)==".js")
			{
				if(a_check($user,$v))
					q("delete from addon where user=$user && file='$v'");
				else
				{
					q("insert into addon(user,file) values($user,'$v')");
					
					print "\n\n";
					include("addon/$v");
				}
			}
		}
		print "\n\nnav.msg(0); nav.form.am_bload.disabled=false; nav.form.am_bsave.disabled=false; idle.replace();";
	}
?>

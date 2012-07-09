/*
 *      rainbow9
 *
 *      Copyright 2007 Azer Koçulu <http://azer.kodfabrik.com>
 *		Fri Apr 27, 1:47 PM	
 * 
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

l_data = typeof l_data=='undefined'?{}:l_data;

l_data["en"]=["Yes","No","USE SHIFT+ENTER KEYS TO CREATE MULTILINE TAB","PLEASE DON'T FORGET THE ; IN MULTILINE TABS","USE echo() TO OUTPUT","USE clrscr() TO CLEAR SCREEN","Internet explorer can't display this application correctly, please use Firefox or Opera etc..!","Close","Untitled Document","Unsaved","New document created","Javascript Shell","Preview","You will be logout, are you sure","Addons","Search","Tag","Application","Loading..","Load Only","Save Only","Save & Load","Sign In","E-Mail","Password","Reset Password","Sign Up","Create new password","Header Information","Title","Tags","Seperate with spaces","Save","Public","Publish","You should save this document to publish","Links","Project Link","Owners of current document","Define owners (<i>They should login with defined e-mail address</i>) who they are out of you","Define","Seperate e-mail addresses with spaces.E.g., a@mail.com b@mail.com","Edit Account","Change","Find & Replace","Search for","Next","Replace with","Replace All","Go to line","Enter Line Number","Go","New","Save As","Delete","Watch Demo Video","Editor","Logout","Delete Account","Hide","Import From Shell","Execute","Zoom in","Zoom out","You should save this document to use html editor.","An error occured","Line count","Your are on","No matches found for","Documents","Open","View","Unsaved data will be lose, do you want to continue","All","Refresh","Document Index","Address","You should save this document to use preview mode.","Picked","Current","document will be deleted, Are you sure","Please wait","You should login to save this document","Title contains illegal characters","Tags contains illegal characters","Loading file, please wait..","Addresses contains illegal characters","Please fill the fields correctly","Invalid e-mail address","Password contains illegal characters","Passwords do not match","Some errors occured","Your account will be <strong>deleted</strong>, are you sure","Developer","Username","You should login to use addons."];

var l = function(i){ return typeof l_data[(typeof l_cur=='undefined'?"en":l_cur)][i]=='undefined'?l_data["en"][i]:l_data[(typeof l_cur=='undefined'?"en":l_cur)][i]; }
var idle = {
	i: { title:'Rainbow9', address:(String(document.location).substring(7,10)=="www"?"www.":"")+"rainbow9.org", path:"/", lu:'Fri Apr 27, 1:47 PM' , version:'1.3', footer:'Rainbow9 v1.3b, Developer: <a href="http://azer.kodfabrik.com">Azer Koçulu</a>, <em><a href="http://code.google.com/p/rainbow9">Source</a>, <a href="mailto:azer@kodfabrik.com">Contact</a>' },
//	i: { title:'Rainbow9 ', address:"localhost/app/rainbow9", path:"/app/rainbow9/", lu:'Fri Apr 27, 1:47 PM' , version:'1.0b', footer:'Copyright 2007 Developer: <a href="http://azer.kodfabrik.com">Azer Koçulu</a> (<em><a href="http://rainbow9.googlecode.com">Project Page</a></em>)' },
	syn: {
		javascript: ["true","false","break","continue","document","window","navigator","Date","function","return","var ","alert","typeof","Math","getElementById","getElementsByTagName","createElement","appendChild","setAttribute","getAttribute","innerHTML","innerText","parseInt","Array","Object","value","length","this","style","prototype","title","setSelectionRange","selectionStart","selectionEnd","selectedIndex","RegExp","exec","test","replace","match","split","search","concat()","join()","pop()","push()","reverse()","shift()","slice()","sort()","splice()","toSource()","toString()","unshift()","valueOf()","substring","onabort","onblur","onchange","onclick","ondblclick","onerror","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onresize","onselect","onsubmit","onunload","number","string","undefined","Number","String","fromCharCode"],
		css: ["html","body","div","input","background","background-color","background-image","background-repeat","background-attachment","border","border-bottom","border","border-width","border-style","border-color","","clear","cursor","display","float","position","visibility","height","line-height","max-height","max-width","min-height","min-width","width","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","content","counter-increment","counter-reset","quotes","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","outline","outline-color","outline-style","outline-width","padding","padding-bottom","padding-left","padding-right","padding-top","bottom","clip","left","overflow","position","right","top","vertical-align","z-index","border-collapse","border-spacing","caption-side","empty-cells","table-layout","color","direction","line-height","letter-spacing","text-align","text-decoration","text-indent","text-transform","white-space","word-spacing","active","focus","hover","link","visited","first-child","lang","before","after","auto","none","inline","block","visible","scroll","fixed","center","repeat","repeat-x","repeat-y","no-repeat","thin","medium","thick","length","both","crosshair","default","pointer","move","e-resize","ne-resize","nw-resize","n-resize","se-resize","sw-resize","s-resize","w-resize","text","wait","help","disc","circle","square","decimal","","dotted","dashed","solid","double","groove","ridge","inset","outset","absolute","static","relative"],
		html: ["html","head","body","meta","table","div","img","input","button","label","script","center","strong","form","frame","span","font","fieldset","legend","iframe","select","href","target","align","type","class","disabled","selected","name","style","tabindex","title","action","option","textarea","blockquote","onchange","onclick","ondblclick","onerror","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onresize","onselect","onsubmit","onunload"],
		xaml: ["Ellipse","Width","Height","Fill","Stretch","Stroke","StrokeThickness","Canvas","Left","Top","Data","Rectangle","Triggers","EventTrigger","RoutedEvent","BeginStoryboard","Storyboard","DoubleAnimationUsingKeyFrames","BeginTime","TargetName","TargetProperty","RenderTransformOrigin","RenderTransform","TransformGroup","ScaleTransform","SkewTransform","RotateTransform","TranslateTransform","Angle","ScaleX","ScaleY","AngleX","AngleY","RadialGradientBrush","GradientStop","Offset","Background","Path","MouseLeftButtonUp","MouseEnter","MouseLeftButtonDown","MouseLeave","MouseMove"]
	},
	element: {},
	row: [],
	owner: "",
	cursor: { node:-1, tree:-1, depth:0, e:0 },
	init: function()
	{
		with(idle)
		{
			
			element.a = document.create('div',{ id:'a' });
			doc.init();
			subnav.init();
			panel.init();
			editor.init();
			preview.init();
			archive.init();
			footer.init();
			
			
			
			idle.replace();
			idle.checkurl();
			
			print("# "+l(2),{ color:'rgb(150,150,150)' });
			print("# "+l(4),{ color:'rgb(150,150,150)' });
			print("# "+l(5),{ color:'rgb(150,150,150)' });
			print("&nbsp;")
			
			doc.reset(true);
			
			if(typeof opendoc!="undefined")
				dm.open(opendoc)
		}
	},
	replace:function()
	{
		with(idle)
		{
			doc.elm.a.style.top =((parseInt(document.body.offsetHeight)/2)-(parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight))/2)<30?"30px":((parseInt(document.body.offsetHeight)/2)-(parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight))/2)+"px";
			panel.elm.a.style.top = (parseInt(doc.elm.a.offsetTop)+parseInt(doc.elm.a.offsetHeight)-1)+"px"
			element.a.style.top = (parseInt(panel.elm.a.offsetTop)+parseInt(panel.elm.a.offsetHeight))+"px"
			editor.elm.a.style.top = (parseInt(panel.elm.a.offsetTop)+parseInt(panel.elm.a.offsetHeight))+"px"
			subnav.elm.a.style.top = (parseInt(panel.elm.a.offsetTop)+parseInt(panel.elm.a.offsetHeight))+"px"
			preview.elm.a.style.top = (parseInt(panel.elm.a.offsetTop)+parseInt(panel.elm.a.offsetHeight))+"px"
			archive.elm.a.style.top = (parseInt(doc.elm.a.offsetTop)+parseInt(doc.elm.a.offsetHeight)-1)+"px"
			footer.elm.a.style.top = (parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetTop)+parseInt(panel.elm.a.offsetHeight)+(n.ie && doc.type>0?12:0))+"px"
			
			archive.elm.a.style.height = parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight)-(n.ie?0:12)+"px"
			
			try {
				archive.elm.s_tag.style.height = (((parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight)-155-(n.ne?8:0))/2)+"px")
				archive.elm.s_doc.style.height = (((parseInt(element.a.offsetHeight)+parseInt(panel.elm.a.offsetHeight)-155-(n.ne?8:0))/2)+"px")
			}catch(e){}
			
			var x=archive.status?90:0;
			x-=52;
			element.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			panel.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			doc.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			editor.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			archive.elm.a.style.left = (parseInt(element.a.offsetLeft)+parseInt(element.a.offsetWidth))+"px"
			preview.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			subnav.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x-131)+'px';
			footer.elm.a.style.left = (((parseInt(document.body.offsetWidth)/2)-(parseInt(element.a.offsetWidth)/2))-x)+'px';
			footer.elm.a.style.width = parseInt(archive.elm.a.offsetWidth)+parseInt(panel.elm.a.offsetWidth)+(n.ie?10:0)-8+"px";
		
		}
	},
	checkurl: function()
	{
		try 
		{
			var key = { demo:idle.demo,gp:function(){ um.gp(data["gp"],data["i"]) } };
			var data = {};
			for(x in document.location.href.split("?")[1].split("&"))
				data[document.location.href.split("?")[1].split("&")[x].split("=")[0]] = document.location.href.split("?")[1].split("&")[x].split("=")[1];
			
			for(x in data)
				if(typeof key[x]!="undefined")
					key[x]();
			return data;
		}catch(e){  }
	},
	print: function(str,css)
	{
		with(idle)
		{
			element.a.create('div::'+str,{ id:'row' },css);
		}
	},
	run: function(code)
	{
		if(typeof code=='string')
		with(idle)
		{
			try 
			{
				code = code.replace(/var ([\w\$])/g,"window.$1")
				code = code.replace(/function\s([\w\$]+)/g,"window.$1 = function")
				var o = eval(code);
				idle.print(o);
			}
			catch (e)
			{
				print(n.ie?e.description:e,{ color:'#ff0000' });
			}
		}
	},
	add: function(text)
	{
		with(idle)
		{
			row.push({ value:'',memo:[], depth:cursor.depth });
			var a = element.a.create('div',{'id':'row'});
			element.arr = a.create('div::>>>',{ 'id':'arr' },(cursor.depth!=0?{color:'#aaa'}:null));
			element.val = a.create('div',{ 'id':'val' });
			element.inp = element.val.create('input',{ value:typeof text!="undefined"?text:"" },{ width:(572)-(cursor.depth*30+(n.ie?20:0))+'px', paddingLeft:(cursor.depth*30)+'px' });
			event(element.inp,'keyup',idle.listen)
			cursor.node = row.length-1;
			if(cursor.depth==0)
				cursor.tree = row.length-1;
			
			if(n.ie)setTimeout(element.inp.focus,10);
			else element.inp.focus();
		}
		idle.replace();
	},
	execute: function()
	{
	
		with(idle)
		{
			var node = row[cursor.tree];
			if(cursor.depth==0)
			{
				node.memo.push(row[row.length-1].value);
				var code = '';
				for(x in node.memo)
					code+=node.memo[x]+"\n";
				run(code);
			}
			else
				node.memo.push(row[row.length-1].value);
			
			add();
		}
	},
	listen: function(event)
	{
		var kC = event.keyCode;
		switch(kC){
			case 13:
				with(idle)
				{
					element.val.innerHTML = element.inp.value+"&nbsp;";
					row[row.length-1].value = element.inp.value;
					element.val.style.width = 572-(cursor.depth*30)+'px';
					element.val.style.paddingLeft=(cursor.depth*30)+2+'px';

					if((row[row.length-1].value=='' || row[row.length-1].value==' ') && cursor.depth>0)
							cursor.depth--;
					if(event.shiftKey)
						cursor.depth++;
					
					execute();
				}
				break;
			case 38:
				with(idle)
				{
					var node = row[row.length-1];
					if(row.length-1==cursor.node)
						element.inp.value;
					if(cursor.node>0)
					{
						cursor.node--;
						element.inp.value = row[cursor.node].value;
					}
				}
				break;
			case 40:
				with(idle)
				{
					var node = row[row.length-1];
					if(cursor.node<row.length-1)
					{
						cursor.node++;
						element.inp.value = row[cursor.node].value;
					}
				}
				break;
			default:
				idle.complete(idle.element.inp,idle.syn.javascript,event)
		}
	},
	select : function(e,s,l)
	{

		e.focus();
		if(e.createTextRange)
		{
			var r = e.createTextRange();
			r.moveStart("character",s);
			r.moveEnd("character",s+l-e.value.length)
			r.select()
		} else {
			e.setSelectionRange(s,s+l);
		}
		
	},
	findPos: function(e){
		if(navigator.appName=="Microsoft Internet Explorer")
		{
			if(e.tagName=="TEXTAREA")
			{
				var range = document.selection.createRange(); 
				var stored = range.duplicate();
				stored.moveToElementText(e);
				stored.setEndPoint('EndToEnd', range);
				e.selectionStart = stored.text.length - range.text.length;
				e.selectionEnd = e.selectionStart + range.text.length;
			} else {
				e.selectionStart = Math.abs(document.selection.createRange().moveStart("character", -1000000));
				e.selectionEnd = Math.abs(document.selection.createRange().moveEnd("character", -1000000));
			}
		}

		return {
			s:e.selectionStart,
			l:e.selectionEnd
		}
	},
	complete: function(e,d,event){
		if (event.keyCode < 32 || (event.keyCode >= 33 && event.keyCode <= 46) || (event.keyCode >= 112 && event.keyCode <= 123))
				return false
		
		var s = idle.findPos(e).s
		var l = idle.findPos(e).l

		if(/[^\w]/.test(e.value.substring(s+1,s))==false && e.value.substring(s+1,s)!=" " && e.value.substring(s+1,s)!="")
			return false
			
		var w = e.value.substring(s-1,s);
		for(i=s-2; i>-1; i--)
			if(e.value.substring(i,i+1).match(/^\w+$/)!=null)
				w = e.value.substring(i,i+1) + w
			else
				break
		try {
			if(w.length>1)
				for(x in d)
						if(d[x].substring(0,w.length)==w)
						{
							if(n.ne)
							{
								try{ var scrollTop = e.scrollTop }catch (e){}
							}
							if(navigator.appName!="Microsoft Internet Explorer")
								e.value = e.value.substring(0,s) + d[x].substring(w.length,d[x].length) + e.value.substring(l,e.value.length)
							else
								document.selection.createRange().text = d[x].substring(w.length,d[x].length);
							idle.select(e,s,d[x].length-w.length)
							if(n.ne)
							{
								try{ e.scrollTop = scrollTop }catch (e){}
							}
							break;
						}
		}catch(e){  }
	},
	demo:function()
	{
		var html = "<iframe src='http://rainbow9.org/swfdemo.php' frameborder='0'></iframe><br><br><a href='javascript:idle.demo()'>"+l(7)+"</a>";
		with(idle)
		{
			if(typeof element.demo!="object")
				element.demo = document.create("div::"+html,{ id:"demo" },{ top:(((parseInt(document.body.offsetHeight)/2)-300)>20?((parseInt(document.body.offsetHeight)/2)-300):20)+"px", left:((parseInt(document.body.offsetWidth)/2)-300)+"px" });
			else if(element.demo.css('display')=='block')
			{
				element.demo.innerHTML = "";
				element.demo.style.display = "none";
			}
			else
			{
				element.demo.innerHTML = html;
				element.demo.style.display = "block";
			}
		}
	}
}

var user =  {
	id: typeof id!='undefined'?id:0,
	email: typeof email!='undefined'?email:null,
	title: ""
}

var doc = {
	status: false,
	key: 0,
	title: l(8),
	user: user.id,
	type: 0,
	date: l(9)+".",
	tag: "",
	pub:1,
	elm : {},
	init: function()
	{
		with(doc)
		{
			if(doc.status)
			{
				elm.a.innerHTML = title+" <i>("+date+")</i>"
				return true
			}
			elm.a = document.create("div::"+title+" <i>("+date+")</i>",{ id:"title" })
			status = true
		}
	},
	reset: function(notclr)
	{
		doc.key = 0;
		doc.title = l(8);
		doc.tag = "";
		doc.date = l(9)+".";
		doc.pub = 1;
		doc.init()
		
		editor.value = ["","","","","",""];
		editor.cursor = { type:-1, search:[" ",0] };
		
		
		
		if(typeof notclr=="undefined")
			clrscr()
		var now = new Date()
		idle.print("# "+l(10)+": " +  now.getMonth() + "." + now.getDay() + "." + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),{ color:'rgb(150,150,150)' })
		idle.add();
		editor.du.hide();
		preview.du.hide();
	}
}

var panel = {

	elm: {},
	init: function()
	{
		var $ = panel;
		$.elm.a = document.create("div",{ id:'panel' })
		$.elm.left = $.elm.a.create("div",{ 'class':'left' })
		
		$.elm.right = $.elm.a.create("div",{ 'class':'right' })
		$.elm.selectbox = $.elm.right.create("select",{ "class":"tabber" },null,{ onchange:function(){ 
			
			if(panel.elm.selectbox.selectedIndex==7)
				preview.du.display();
			else if(panel.elm.selectbox.selectedIndex>0)
				editor.du.display(panel.elm.selectbox.selectedIndex-1);
			else
			{
				editor.du.hide();
				preview.du.hide();
			}
		}});
		
		$.elm.selectbox.create("option::"+l(11),{ value:"0" });
		$.elm.selectbox.create("option::js/",{ value:"1" });
		$.elm.selectbox.create("option::css/",{ value:"2" });
		$.elm.selectbox.create("option::index.html",{ value:"3" });
		$.elm.selectbox.create("option::xml/",{ value:"4" });
		$.elm.selectbox.create("option::svg/",{ value:"5" });
		$.elm.selectbox.create("option::xaml/",{ value:"6" });
		$.elm.selectbox.create("option::"+l(12),{ value:"99" });
		$.elm.a.create("div",null,{ clear:"both" });
		
		if(n.op)g.att("class","left").style.paddingTop = "4px"
		nav.init()
	}
}

var nav = {
	status:false,
	cursor: null,
	color:{ blue:[155,180,200], red:[200,150,150], green:[150,180,150] },
	p: [user.id!=0,doc.user==user.id,doc.date!=l(9)+"."],
	form: { 
		logout: { type:1, html:l(13)+"? <a href='javascript:nav.msg(0)'>"+l(1)+"</a> /<a href='javascript:um.lo()'>"+l(0)+"</a> " },
		addon: { type:0, title:l(14), init:function()
		{
			with(nav)
			{
				form.am = form.c.create("div",{ id:"am" });
				form.am.create("label::"+l(15)+":");
				form.am_search = form.am.create("input",{ "class":"search" },null,{ onkeydown:am.search, onkeyup:am.search });
				
				form.am_left = form.am.create("div",{ "class":"left" });
				form.am_right = form.am.create("div",{ "class":"right" });
				form.am.create("div",null,{ "clear":"both" });
				
				form.am_ftag = form.am_left.create("fieldset::<legend>"+l(16)+"</legend>");
				form.am_fapp = form.am_right.create("fieldset::<legend>"+l(17)+"</legend>");
				
				form.am_stag = form.am_ftag.create("div::"+l(18),{ "class":"selectbox" });
				form.am_sapp = form.am_fapp.create("div::"+l(18),{ "class":"selectbox" },{ width:n.op==false?"100%":"255px" });
				form.am_dapp = form.am_fapp.create("div",{ "class":"desc" },{ width:n.op==false?"100%":"255px" });
				
				form.am_bload = form.am_fapp.create("button::"+l(19),null,null,{ onclick:am.load });
				form.am_bsave = form.am_fapp.create("button::"+l(20),null,null,{ onclick:am.sv });
				form.am_bsavenload = form.am_fapp.create("button::"+l(21),null,null,{ onclick:am.sv });
				
				form.am.create("hr");
				form.am.create("div::* If you developed an addon, please send to me for publish in there: <a href='mailto:azer@kodfabrik.com'>azer@kodfabrik.com</a>")
				form.am.create("div::** You can create your own language pack, <a href='"+idle.i.path+"lang_en.js'>start with this file.</a>")
				am.init();
			}
		}},
		signin: { type:0, title:l(22), init:function(){
			with(nav)
			{
				form.c.create("label::"+l(23));
				form.c.create("input",{ "class":"input", id:"email", value:"@" });
				form.c.create("label::"+l(24));
				form.c.create("input",{ "class":"input", id:"password", type:"password", value:"" });
				form.button_si = form.c.create("a::"+l(22),{ "class":"button", href:"javascript:um.si()" });
				form.c.create("a::"+l(25),{ href:"javascript:nav.open('reset')" });
			}
		}},
		signup: { type:0, title:l(26), init:function(){
			with(nav)
			{
				form.c.create("label::"+l(23)+":")
				form.c.create("input",{ "class":"input", id:"email", value:"@" })
				form.c.create("label::"+l(24)+":")
				form.c.create("input",{ "class":"input", id:"password", type:"password", value:"" })
				form.c.create("label::"+l(24)+"(*):")
				form.c.create("input",{ "class":"input", id:"password_", type:"password", value:"" })
				form.button_su = form.c.create("a::"+l(26),{ "class":"button", href:"javascript:um.su()" });
			}
		}},
		reset: { type:0, title:l(25), init: function(){
			with(nav)
			{
				form.c.create("label::"+l(23))
				form.c.create("input",{ "class":"input", id:"email", value:"@" })
				form.button_re = form.c.create("a::"+l(27),{ "class":"button", href:"javascript:um.re()" })
			}
		}},
		headerInf: { type:0, title: l(28), init: function(){
			with(nav)
			{
				form.c.create("label::"+l(29)+":")
				form.c.create("input",{ "class":"input", id:"save_title", value:doc.title },{ width:"120px" });
				form.c.create("label::"+l(30)+":(<i>"+l(31)+"</i>)");
				form.c.create("input",{ "class":"input", id:"save_tag", value:doc.tag },{ width:"120px" });
				
				form.button_su = form.c.create("a::"+l(32),{ "class":"button", href:"javascript:dm.save()" });
				form.c.create("hr")
				
				var checkbox = form.c.create("input",{ type:"checkbox",name:"public" },null,{ onclick:function(){
					doc.pub = doc.pub==1?0:1;
					if(doc.type==1)
						editor.du.st();
				}});
				checkbox.checked = (doc.pub==1?true:false)
				form.c.create("label::"+l(33),{ "for":"public" });
			}
			
		}},
		publish: { type:0, title: l(34), init: function(){
			with(nav)
			{
				if(doc.key==0)
				{
					msg(l(35)+".",'red')
					return close()
				}
				var link = form.c.create("fieldset::<legend>"+l(36)+"</legend>",null,{ width:"565px" });
				link.create("label::<a href='http://"+idle.i.address+"/open/"+doc.key+"'>"+l(37)+"</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/open/"+doc.key },{ width:"402px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/index.html'>index.html</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/index.html" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/js'>js/</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/js" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/css'>css/</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/css" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/xml'>xml/</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/xml" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/svg'>svg</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/svg" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				link.create("label::<a href='http://"+idle.i.address+"/view/"+doc.key+"/xaml'>xaml</a>:");
				link.create("input",{ "class":"input", value:"http://"+idle.i.address+"/view/"+doc.key+"/xaml" },{ width:"400px", border:'0px', color:"rgb(100,100,100)" });
				link.create("br");
				var owner = form.c.create("fieldset::<legend>"+l(38)+"</legend>",null,{ width:"565px" });
				owner.create("label::"+l(39)+".");
				owner.create("br");
				form.owner_input = owner.create("input",{ "class":"input", "value":idle.owner },{ width:"413px" });
				form.owner_submit = owner.create("a::"+l(40),{ "class":"button", href:"javascript:dm.defOwner()" });
				owner.create("br");
				owner.create("label::<i>"+l(41)+"</i>");
			}
		}},
		editAccount: { type:0, title:l(42), init: function(){
			with(nav)
			{
				form.c.create("label::"+l(24))
				form.cp_password = form.c.create("input",{ "class":"input", id:"password", type:"password", value:"" })
				form.c.create("label::"+l(24)+" *")
				form.cp_password_ = form.c.create("input",{ "class":"input", id:"password_", type:"password", value:"" })
				form.cp_submit = form.c.create("a::"+l(43),{ "class":"button", href:"javascript:um.cp()" })
				form.c.create("hr");
				form.c.create("label::"+l(23));
				form.ce_email = form.c.create("input",{ "class":"input", type:"text", value:user.email },{ width:"175px" });
				form.ce_submit = form.c.create("a::"+l(43),{ "class":"button", href:"javascript:um.ce()" });
			}
		}},
		find: { type:0, title:l(44), init: function(){
			with(nav)
			{
				editor.cursor.search = ["",0];
				form.c.create("label::"+l(45)+":")
				form.find_key = form.c.create("input",{ "class":"input", id:"key", type:"text" },{ width:"110px"  });
				form.c.create("a::"+l(46),{ "class":"button", href:"javascript:editor.du.find()" },{ marginLeft:"2px" })
				form.c.create("label::"+l(47)+":",null,{ marginLeft:"5px" })
				form.find_replace = form.c.create("input",{ "class":"input", type:"text" });
				form.c.create("a::"+l(48),{ "class":"button", href:"javascript:editor.du.replace()"},{ marginLeft:"2px" })
			}
		}},
		gotoline: { type:0, title:l(49), init: function(){
		
			with(nav)
			{
				form.gotoline_linecount = form.c.create("label",null,{ marginRight:"10px" });
				form.gotoline_place = form.c.create("label",null,{ marginRight:"10px" });
				form.c.create("label::"+l(50)+":");
				form.gotoline_line = form.c.create("input",{ "class":"input", type:"text" });
				form.c.create("a::"+l(51),{ "class":"button", href:"javascript:editor.du.gotoline()" });
				setTimeout(editor.du.st,0);
			}
		}}
			
	},
	data: [
		/* p:[logged?,owner?,saved?] */
		{ value:l(52), p:[2,2,2], event:"doc.reset()" },"",
		{ value:l(32), p:[2,2,2], event:"dm.save()" },
		{ value:l(53), p:[2,2,1], event:"dm.saveAs()" },
		{ value:l(28), p:[1,1,1], event:"nav.open('headerInf')" },
		{ value:l(34), p:[2,2,2], event:"nav.open('publish')" },
		{ value:l(54), p:[1,1,1], event:"dm.del()" },"",
		{ value:l(55), p:[2,2,2], event:"idle.demo()", subnav:["film",1] },
		{ value:l(14), p:[2,2,2], event:"nav.open('addon')", subnav:["application_double",1] },
		{ value:"&nbsp;", p:[2,2,2], event:"void(0)", subnav:["",1] },
		{ value:l(56)+": /js", p:[2,2,2], event:"editor.du.display(0);", subnav:["script_edit",1] },
		{ value:l(56)+": /css", p:[2,2,2], event:"editor.du.display(1);", subnav:["style_edit",1] },
		{ value:l(56)+": index.html", p:[2,2,2], event:"editor.du.display(2);", subnav:["layout_edit",1] },
		{ value:l(56)+": /xml", p:[2,2,2], event:"editor.du.display(3);", subnav:["page_code",1] },
		{ value:l(56)+": /svg", p:[2,2,2], event:"editor.du.display(4);", subnav:["vector",1] },
		{ value:l(56)+": /xaml", p:[2,2,2], event:"editor.du.display(5);", subnav:["page_brush",1] },
		{ value:l(12), p:[2,2,2], event:"preview.du.display();", subnav:["page_world",1] },
		{ value:l(11), p:[2,2,2], event:"editor.du.hide(); preview.du.hide();", subnav:["application_osx_terminal",1] },
		{ value:"&nbsp;", p:[2,2,2], event:"void(0)", subnav:["",1] },
		{ value:l(22), p:[0,2,2], event:"nav.open('signin')", subnav:["user",1] },
		{ value:l(26), p:[0,2,2], event:"nav.open('signup')", subnav:["user_green",1] },
		{ value:l(57), p:[1,2,2], event:"nav.open('logout')", subnav:["user_gray",1] },
		{ value:l(42), p:[1,2,2], event:"nav.open('editAccount')", subnav:["user_edit",1]  },
		{ value:l(58), p:[1,2,2], event:"um.deleteAccount()", subnav:["user_delete",1] }
	],
	init: function()
	{
		if(nav.status)
		{
			with(nav)
			{
				p = [user.id!=0,doc.user==user.id,doc.date!=l(9)+"."];
				for (x in data)
				{
					node = data[x]
					if(data[x]!="")
					{
						if(typeof node.subnav=="object")
						{
							node.subnav[2].style.display=((node.p[0]==2 || node.p[0]==p[0]) && (node.p[1]==2 || node.p[1]==p[1]) && (node.p[2]==2 || node.p[2]==p[2]))?"block":"none"
							
							if(node.subnav[1]==1)
								continue;
						}
						node.elm.style.display=((node.p[0]==2 || node.p[0]==p[0]) && (node.p[1]==2 || node.p[1]==p[1]) && (node.p[2]==2 || node.p[2]==p[2]))?"inline":"none"
					}
				}
			}
		}
		else
		with(nav)
		{
			form.msg = panel.elm.a.create("div",{ "class":"msg" });
			form.a = panel.elm.a.create("fieldset",{ "class":"form" });
			form.b = form.a.create("legend")
			form.c = form.a.create("legend")
			for (x in data)
			{
				node = data[x]
				if(data[x]=="")
					panel.elm.left.create("label::&nbsp;&nbsp;")
				else
				{
					if(typeof node.subnav=="object")
					{
						node.subnav[2] = subnav.elm.a.create("a::"+node.value,{ "href":"javascript:"+node.event },{ backgroundImage:"url("+idle.i.path+"inc/"+node.subnav[0]+".gif)", display:((node.p[0]==2 || node.p[0]==p[0]) && (node.p[1]==2 || node.p[1]==p[1]) && (node.p[2]==2 || node.p[2]==p[2]))?"block":"none" });
						if(node.subnav[1]==1)
							continue;
					}
					node.elm = panel.elm.left.create("a::"+node.value,{ "href":"javascript:"+node.event, "class":typeof node.c=="undefined"?"button":null },{ display:((node.p[0]==2 || node.p[0]==p[0]) && (node.p[1]==2 || node.p[1]==p[1]) && (node.p[2]==2 || node.p[2]==p[2]))?"inline":"none" })
				}
			}
			status = true;
		}
	},
	open:function(node)
	{
		if(nav.cursor==node)
			return nav.close()
		with(nav)
		{
			if(form[node].type==1)
				return msg(form[node].html,typeof form[node].color=="undefined"?"blue":form[node].color)
			
			form.c.innerHTML = "";
			form.b.innerHTML = form[node].title + " <a title='Close' href='javascript:nav.open(\""+node+"\")' class='closer "+(n.webkit?"webkitCloser":"")+"'>x</a>"
			form.a.style.display = "block"
			form[node].init();
			cursor = node;
			
		}
		idle.replace()
	},
	close: function()
	{
		nav.form.a.style.display = "none"
		idle.replace()
		nav.cursor = null;
	},
	msg: function(text,c)
	{
		if(text!=0)
		with(nav)
		{
			form.msg.innerHTML = n.ie?"&nbsp;":""
			
			if(!n.ie)form.msg.create("a::[ "+l(59).substring(0,5)+" ]",{ href:"javascript:nav.msg(0)" },{ display:"block", position:"absolute", margin:"0px 0 0 565px", backgroundColor:"rgb("+color[(typeof c!="undefined"?c:"blue")][0]+","+color[(typeof c!="undefined"?c:"blue")][1]+","+color[(typeof c!="undefined"?c:"blue")][2]+")", color:"rgb("+(color[(typeof c!="undefined"?c:"blue")][0]-50)+","+(color[(typeof c!="undefined"?c:"blue")][1]-50)+","+(color[(typeof c!="undefined"?c:"blue")][2]-50)+")" })
			else form.msg.create("a::[ "+l(59).substring(0,5)+" ]",{ href:"javascript:nav.msg(0)" },{ backgroundColor:"rgb("+color[(typeof c!="undefined"?c:"blue")][0]+","+color[(typeof c!="undefined"?c:"blue")][1]+","+color[(typeof c!="undefined"?c:"blue")][2]+")", color:"rgb("+(color[(typeof c!="undefined"?c:"blue")][0]-50)+","+(color[(typeof c!="undefined"?c:"blue")][1]-50)+","+(color[(typeof c!="undefined"?c:"blue")][2]-50)+")" }) 
			form.msg.innerHTML += ""+text
			form.msg.style.backgroundColor = "rgb("+color[(typeof c!="undefined"?c:"blue")][0]+","+color[(typeof c!="undefined"?c:"blue")][1]+","+color[(typeof c!="undefined"?c:"blue")][2]+")";
			form.msg.style.border = "1px solid rgb("+(color[(typeof c!="undefined"?c:"blue")][0]-30)+","+(color[(typeof c!="undefined"?c:"blue")][1]-30)+","+(color[(typeof c!="undefined"?c:"blue")][2]-30)+")";
			form.msg.style.display = "block"
		}
		else
			nav.form.msg.style.display = "none";
		idle.replace();
	}
}

var subnav = {

	elm : { },
	init: function(){
	
		with(subnav)
		{
			elm.a = document.create("div",{ id:"subnav" });
		}	
	}
	
}

var footer = {
	elm : {},
	init: function()
	{
		with(footer)
		{
			elm.a = document.create("div::"+idle.i.footer,{ id:"footer" });
		}
	}

}

var editor = {
	elm: {},
	cursor:{ type:-1, search:[" ",0] },
	value : ["","","","","",""],
	template: ["","","null","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root>\n\n</root>","<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1 Basic//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd\">\n\n<svg version=\"1.1\"\n\tbaseProfile=\"full\"\n\txmlns=\"http://www.w3.org/2000/svg\">\n\n</svg>","<Canvas\n\txmlns=\"http://schemas.microsoft.com/client/2007\"\n\txmlns:x=\"http://schemas.microsoft.com/winfx/2006/xaml\"\n\tWidth=\"640\" Height=\"480\"\n\tBackground=\"White\"\n\tx:Name=\"Page\">\n\n</Canvas>"],
	key: ["javascript","css","html","xml","xaml","silverlight","svg"],
	nav: {
		button: [[7,l(61),"editor.du.execute()","control_play.gif"],[0,l(60),"editor.du.add()","add.gif"],[7,l(44),"nav.open('find')","find.gif"],[7,l(49),"nav.open('gotoline')","gotoline.gif"],[7,l(62),"editor.du.zoom()","zoom_in.gif"],[7,l(63),"editor.du.zoom(0)","zoom_out.gif"]],
		init: function()
		{
			with(editor)
			{
				elm.b.innerHTML = "";
				with(nav)
				{
					for(x in button)
						if(button[x][0]==cursor.type || button[x][0]==7)
							elm.b.create("a::"+button[x][1],{ id:"editor_nav_"+x, href:"javascript:"+button[x][2] },{ backgroundImage:"url("+idle.i.path+"inc/"+button[x][3]+")" })
				}
			}
		}
	},
	init: function()
	{
		with(editor)
		{
			elm.a = document.create("div",{ id:"editor" });
			elm.b = elm.a.create("div",{ "class":"nav" });
			elm.c = elm.a.create("textarea");
			elm.c.setAttribute("wrap","off");
			elm.d = elm.a.create("div",{ "class":"statusbar" });
			event(editor.elm.c,'keydown',editor.du.tab);
			event(editor.elm.c,'keyup',editor.du.st);
			event(editor.elm.c,'keyup',editor.du.sv);
			
			event(editor.elm.c,'click',editor.du.st);
			event(editor.elm.c,'select',editor.du.st);
			event(editor.elm.c,'keyup',function(e){ if(n.ie==0)idle.complete(editor.elm.c,idle.syn[editor.key[editor.cursor.type]],e); });
			nav.init();

		}

	},
	find: {
		line: function()
		{
			return [editor.elm.c.value.split("\n").length,editor.elm.c.value.substring(0,idle.findPos(editor.elm.c).s).split("\n").length]
		},
		col: function()
		{
			var cur = idle.findPos(editor.elm.c).s
			var data = editor.elm.c.value.substring(0,cur).split("\n");
			var l = 0;
			for(x in data)
				if(x!=data.length-1)
					l+=data[x].length+1;
			return cur-l
		},
		sel: function()
		{
			var p = idle.findPos(editor.elm.c);
			return p.l-p.s
		},
		tab: function()
		{
			with(editor)
			{
				var f = 0;
				for(i=0; i<elm.c.value.split("\n")[find.line()[1]-(n.op?2:1)].length; i++)
					if(elm.c.value.split("\n")[find.line()[1]-(n.op?2:1)].substring(i,i+1)=="\t")
						f++;
					else
						break;
				return f;
			}
		}
	},
	du: {
		display: function(type)
		{
			preview.elm.a.style.display = "none";
			if(type==2 && doc.key==0)
			{
				panel.elm.selectbox.selectedIndex = doc.type==0?0:editor.cursor.type+1;
				return nav.msg(l(64),'red');
			}
			with(editor)
			{
				doc.type = 1;
				if(typeof type=="undefined")
					for(x in value)
						if(value[x].length>0)
						{
							type=x;
							break;
						}
						
				cursor.type = type;
				
				panel.elm.selectbox.selectedIndex = cursor.type+1;
				var now = new Date();
				var tmp1 = '/* '+l(10)+': ' + now.getMonth() + "." + now.getDay() + "." + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " */\n\n";
				template[0] = tmp1;
				template[1] = tmp1;
				
				elm.c.value = value[cursor.type]!=""?value[cursor.type]:(template[cursor.type]);
				value[cursor.type] = elm.c.value;
				nav.init();
				
				elm.a.style.display = "block"
				elm.c.focus();
				
				du.st();
				
				idle.element.a.style.overflow = "hidden"
				idle.replace();
			}
		},
		hide: function()
		{
			with(editor)
			{
				doc.type = 0;
				cursor.type = -1;
				elm.a.style.display = "none";
				idle.element.a.style.overflowY = "scroll"
				idle.element.inp.focus();
				idle.replace();
				panel.elm.selectbox.selectedIndex = 0;
			}
		},
		execute: function()
		{
			g.id("editor_nav_0").style.backgroundImage = "url("+idle.i.path+"inc/control_stop.gif)";
			g.id("editor_nav_0").setAttribute("href","#");
			g.id("editor_nav_0").style.cursor = "default";
			
			var files = ["js","css","index.html","xml","svg","xaml"];
			if(editor.cursor.type==0)
			{
				try { eval(editor.value[editor.cursor.type]); editor.du.dexecute(); } catch(e) { nav.msg("<strong>"+l(65)+":</strong><br />"+e,"red");  editor.du.dexecute(); eval(editor.value[editor.cursor.type]); }
			}
			else if(editor.cursor.type==1)
			{
				var data = editor.value[editor.cursor.type].split("\n");
				for(x in data)
					try {  css(data[x]); } catch(e){}
				editor.du.dexecute();
			}
			else if(editor.cursor.type>1)
			{
				preview.du.display(files[editor.cursor.type]);
			}
			
		},
		dexecute: function()
		{
			setTimeout(function(){ 
				g.id("editor_nav_0").style.backgroundImage = "url("+idle.i.path+"inc/control_play.gif)"
				g.id("editor_nav_0").style.cursor = "pointer"
				g.id("editor_nav_0").setAttribute("href","javascript:editor.du.execute()")
			},500);
		},
		tab: function(e)
		{
			with(editor)
			{
				try { var scrollTop = elm.c.scrollTop } catch (e){}
				if(e.ctrlKey && e.keyCode==83)
				{
					dm.save();
					return false;
				}
				if(e.keyCode==13)
				{
					var tch = "";
					var x = find.tab()
					for(i=0; i<x; i++)
						tch+="\t";
	
					setTimeout(function(){ 
						try { var scrollTop = elm.c.scrollTop } catch (e){}
						if(elm.c.setSelectionRange)
						{
							var p = idle.findPos(elm.c);
							elm.c.value = elm.c.value.substring(0,p.s) + tch + elm.c.value.substring(p.l,elm.c.value.length);
							elm.c.setSelectionRange(p.s+x,p.s+x);
						} else if(document.selection) {	
							var range = document.selection.createRange();
							var isCollapsed = range.text == ''
							range.text = tch;
							range.moveStart('character', -1);
						}
						try { elm.c.scrollTop = scrollTop } catch (e){}
					},1);
				}
				if(e.keyCode==9)
				{
					if(elm.c.setSelectionRange)
					{
						var p = idle.findPos(elm.c);
						elm.c.value = elm.c.value.substring(0,p.s) + String.fromCharCode(9) + elm.c.value.substring(p.l,elm.c.value.length)
						elm.c.setSelectionRange(p.s+1,p.s+1);
					} else if(document.selection) {	
						var range = document.selection.createRange();
						var isCollapsed = range.text == ''
						range.text = String.fromCharCode(9);
						range.moveStart('character', -1);
					}
					setTimeout("editor.elm.c.focus()",0);
					try { elm.c.scrollTop = scrollTop } catch (e){}
					return false;
				}
			}
		},
		st: function()
		{
			with(editor)
			{
				var line = find.line();
				elm.d.innerHTML = "Line: "+line[1]+" &nbsp;&nbsp;&nbsp;&nbsp;Col:"+find.col() + " &nbsp;&nbsp;&nbsp;&nbsp;Sel: "+find.sel()+" &nbsp;&nbsp;&nbsp;&nbsp;Len:"+value[cursor.type].length+" &nbsp;&nbsp;&nbsp;&nbsp;Filetype: text/"+key[cursor.type]+" &nbsp;&nbsp;&nbsp;&nbsp;Public:"+(doc.pub?"True":"False")
			
			}
			if(nav.cursor=="gotoline")
			with(nav)
			{
				form.gotoline_linecount.innerHTML = l(66)+": <span style='color:#555'>"+line[0]+"</span>";
				form.gotoline_place.innerHTML = l(67)+": <span style='color:#555'>"+line[1]+"</span>";
			}
		},
		sv: function(e)
		{
			with(editor)
			{
				value[cursor.type] = editor.elm.c.value;
			}
		},
		add: function()
		{
			for(x in idle.row)
			{
				editor.value[0]+="\n";
				for(i=0; i<idle.row[x].depth; i++)
					editor.value[0]+="\t";
				editor.value[0]+=idle.row[x].value;
			}
			editor.elm.c.value = editor.value[editor.cursor.type];
		},
		find: function()
		{
			var keyw = nav.form.find_key.value.toLowerCase();
			var value = editor.value[editor.cursor.type].toLowerCase();
		
			if(editor.cursor.search[0]!=keyw)
				editor.cursor.search[1]=0;
			
			var start = value.substring(editor.cursor.search[1]).search(keyw);
			if(start<0)return nav.msg(l(68)+" '"+keyw+"'","red");
			idle.select(editor.elm.c,editor.cursor.search[1]+start,keyw.length);
			editor.cursor.search =  value.substring(editor.cursor.search[1]+start+keyw.length).search(keyw)<0?[keyw,0]:[keyw,start+keyw.length];
		},
		replace: function()
		{
			keyw = nav.form.find_key.value;
			replace = nav.form.find_replace.value;
			if(keyw=="")return void(0);
			result = editor.value[editor.cursor.type].split(keyw).length-1;
			if(result==0)return nav.msg(l(68)+" '"+keyw+"'","red")
			
			editor.value[editor.cursor.type] = editor.value[editor.cursor.type].replace(new RegExp(keyw,"g"),replace);
			editor.elm.c.value = editor.value[editor.cursor.type];
			
			nav.msg("Replaced "+result+" occurrence(s) of '"+keyw+"' with '"+replace+"'","green");
		},
		gotoline: function()
		{
			var result = editor.value[editor.cursor.type].split("\n")
			var count = result.length;
			var go = nav.form.gotoline_line.value;
			var s = 0;
			for(i=0; i<go-1; i++)
				s+=result[i].length+1
			idle.select(editor.elm.c,s,typeof result[go-1]!="undefined"?result[go-1].length:0);
		},
		zoom: function(p)
		{
			with(editor)
			{
				var size = elm.c.css("fontSize")==""?11:parseInt(elm.c.css("fontSize"));
				css("#editor textarea { font-size:"+(typeof p=="undefined"?size+2:size-2)+"px } ")
			}
		}
	
	}
		
}

var archive = {
	status: false,
	elm: {},
	data: [],
	init: function()
	{
		with(archive)
		{
			elm.a = document.create("div",{ id:"archive" });
			elm.f_search = elm.a.create("fieldset::<legend>"+l(15)+"</legend>");
			elm.i_search = elm.f_search.create("input",null,{ width:n.ne?'183px':'175px' },{ onkeydown:archive.search,onkeyup:archive.search });
			elm.f_tag = elm.a.create("fieldset::<legend>"+l(30)+"</legend>",null,null);
			elm.s_tag = elm.f_tag.create("select",{ "multiple":"multiple" },{ width:"100%" },{ onclick:archive.search })
			elm.f_doc = elm.a.create("fieldset::<legend>"+l(69)+"</legend>");
			elm.s_doc = elm.f_doc.create("select",{ "multiple":"multiple" },{ width:"100%" },{ onfocus:archive.navigate })
			elm.b_o = elm.f_doc.create("button::"+l(70),{ disabled:"disabled" },{ marginRight:"0px" },{ onclick:function()
			{
				window.opendoc = archive.elm.s_doc.value;
				dm.open();
			}});
			elm.b_oo = elm.f_doc.create("button::*",{ title:"Opens in the full body of the window", disabled:"disabled" },null,{ onclick:function()
			{
				nav.msg(l(72)+"? <a href='javascript:nav.msg(0)'>"+l(1)+"</a> / <a href='http://"+idle.i.address+"/open/"+archive.elm.s_doc.value+"'>"+l(0)+"</a>");
			}});
			elm.b_d = elm.f_doc.create("button::"+l(54),{ disabled:"disabled" },null,{ onclick:function(){
					dm.del(null,parseInt(archive.elm.s_doc.value))
			}});
			elm.b_v = elm.f_doc.create("button::"+l(71),{ disabled:"disabled" },null,{ onclick:function(){
				window.open("http://"+idle.i.address+"/view/"+archive.elm.s_doc.value);	
			}});
			set();
		}
	},
	set: function()
	{
		with(archive)
		{
			status = user.id!=0;
			if(status)
			{
				elm.a.style.display = "block";
				inc('http://'+idle.i.address+"/dm.php?do=anything")
			} else
				elm.a.style.display = "none";
		}
	},
	navigate: function(disable)
	{
		with(archive)
		{
			elm.b_o.disabled = typeof disable!='number'?'':'true';
			elm.b_d.disabled = typeof disable!='number'?'':'true';
			elm.b_v.disabled = typeof disable!='number'?'':'true';
			elm.b_oo.disabled = typeof disable!='number'?'':'true';
		}
	},
	search:function()
	{
		setTimeout(function(){
		var tagfilt = archive.elm.s_tag.value
		var tagfilt = typeof tagfilt=="undefined" || tagfilt==""?false:tagfilt;
		var keyword = archive.elm.i_search.value.toLowerCase();
		if(typeof keyword=='string')
		
		with(archive)
		{
			var tags = {};
		
			
			archive.elm.s_doc.innerHTML = "";
			for(x in data)
				if(data[x].title.toLowerCase().search(keyword)>(-1))
				{
					var tag = data[x].tag;
					if(tagfilt==false || typeof tag[tagfilt]!='undefined')
					{
						var $ = elm.s_doc.create("option::"+data[x].title)
						$.setAttribute("value",data[x].key);
					}
					if(tagfilt==false)
						for(y in tag)
						{
							if(typeof tags[y]=='undefined')
								tags[y] = 1
							else
								tags[y]++;
						}
				}
			if(tagfilt==false)
			{
				archive.elm.s_tag.innerHTML = "";
				archive.elm.s_tag.create("option::"+l(73)+"("+data.length+")",{ value:"" });
				archive.elm.s_tag.create("option",{ value:"" });
				for(x in tags)
					elm.s_tag.create("option::"+x+"("+tags[x]+")",{ value:x })
			}
			
		}
		},10);
	}
	
}

var preview = {
	url: "",
	elm: {},
	nav: {
	
		button:[[l(7),"preview.du.hide()",'cancel.gif'],[l(74),"preview.du.refresh()",'page_refresh.gif'],[l(75),'preview.du.nw()','page_add.gif']],
		init: function()
		{
			for (x in preview.nav.button)
			{
				preview.elm.b.create("a::"+preview.nav.button[x][0],{ href:"javascript:"+preview.nav.button[x][1] },{ backgroundImage:"url("+idle.i.path+"inc/"+preview.nav.button[x][2]+")" })
			}
			with(preview)
			{
				elm.e = elm.b.create("a::Link",{ href:url },{ backgroundImage:"url("+idle.i.path+"inc/link.gif)" })
				elm.b.create("label::"+l(76)+":",null,{ marginLeft:'20px' })
				elm.d = elm.b.create("input")
				elm.b.create("a::"+l(51),{ href:'javascript:preview.du.go()' },{ padding:'2px' })
				
			}
		}
	
	},
	init: function()
	{
		with(preview)
		{
			elm.a = document.create("div",{ id:"preview" });
			elm.b = elm.a.create("div",{ "class":"nav" });
			elm.c = elm.a.create("iframe",{ frameBorder:'0px' },null,{ onload:function(){
				preview.elm.d.value = preview.elm.c.src;
			}});
			preview.nav.init();
			
			if(n.ne)
				css("#preview { width:630px; height:410px }");
		}
	},
	du : {
		display: function(file)
		{
			if(doc.key==0)
			{
				panel.elm.selectbox.selectedIndex = doc.type==0?0:editor.cursor.type+1;			
				return nav.msg(l(77),"red")
			}
			with(preview)
			{
				file = typeof file=="undefined"?"index.html":file;
				panel.elm.selectbox.selectedIndex = 4;
				elm.d.value = "http://"+idle.i.address+"/view/"+doc.key+"/"+file;
				elm.a.style.display = "block";
				idle.element.a.style.overflow = "hidden"
				du.go();
			}
		},
		hide: function()
		{
			panel.elm.selectbox.selectedIndex = doc.type==0?0:editor.cursor.type+1;
			preview.elm.a.style.display = "none";
			idle.element.a.style.overflowY = doc.type==0?"scroll":"hidden";
			editor.du.dexecute();
		},
		go: function()
		{
			with(preview)
			{
				url = elm.d.value==""?"http://"+idle.i.address+"/view/"+doc.key+"/index.html":elm.d.value;
				elm.c.src = url;
				elm.d.value = url;
				elm.e.href = url;
			}
		},
		refresh: function()
		{
			with(preview)
			{
				elm.c.src = elm.c.contentWindow.document.location;
			}
		},
		nw : function()
		{
			with(preview)
			{
				elm.d.value = "http://"+idle.i.address+"/view/"+doc.key
				du.go();
			}
		}
	
	}

}

var dm = {
	status: false,
	elm: {},
	regex: { text:new RegExp(/^[\w\s@\._\-]+$/) },
	del: function(k,node)
	{
		if(typeof k!="number")
			return nav.msg((typeof node=="number"?l(78):l(79))+" "+l(80)+"? <a href='javascript:nav.msg(0)'>"+l(1)+"</a> / <a href='javascript:dm.del("+(typeof node=="number"?0:1)+","+(typeof node=="number"?node:doc.key)+")'>"+l(0)+"</a>?");
		
		nav.msg(l(81)+"..");
		inc(idle.i.path+"dm.php?do=del&reset="+(k==1?"true":"false")+"&key="+node);
	},
	fix: function(key)
	{
		var text = editor.value[key];
		return escape(text==""?editor.template[key]:text).replace(new RegExp("@","g"),"%40").replace(new RegExp("/","g"),"%2F").replace(new RegExp("\\+","g"),"%2B")
	},
	save: function()
	{
		if(user.id==0)
		{
				nav.msg(l(82)+".",'red')
				return close()
		}
		if(doc.date==l(9)+"." && nav.cursor!="headerInf")
			return nav.open("headerInf")
		try {
			if(nav.cursor=="headerInf")
			{
				if(g.id("save_title").value=='' || !dm.regex.text.test(g.id("save_title").value))
					return nav.msg(l(83)+".","red")
		
				if(!dm.regex.text.test(g.id("save_tag").value) && g.id("save_tag").value!="")
					return nav.msg(l(84)+".","red")
				
				doc.title = g.id("save_title").value
				doc.tag = g.id("save_tag").value
			}
		} catch(e){}
		nav.msg(l(81)+"..","blue")
		nav.close();

		xhr(idle.i.path+"dm.php",{ parameters:"do=sv&public="+doc.pub+"&type="+doc.type+"&key="+doc.key+"&title="+doc.title+"&tag="+doc.tag+"&js="+dm.fix(0)+"&css="+dm.fix(1)+"&html="+dm.fix(2)+"&xml="+dm.fix(3)+"&svg="+dm.fix(4)+"&xaml="+dm.fix(5), method:'post', onComplete: function(c){ eval(c); doc.init() } })
	},
	saveAs: function()
	{
		doc.date = l(9)+'.';
		doc.key = 0;
		dm.save();
	},
	open: function(data)
	{
		if(typeof data=="number")
		{
			nav.msg(l(85));
			inc(idle.i.path+"dm.php?do=open&open="+opendoc)
			return void(0)
		}
		else if(typeof data=="undefined")
			return nav.msg(l(72)+"? <a href='javascript:nav.msg(0)'>"+l(1)+"</a> / <a href='javascript:dm.open(1)'>"+l(0)+"</a>")
		
		doc.init()
		nav.msg(0);
		nav.init();
		
		preview.du.hide();
		if(doc.type==1)
			editor.du.display();
		else
			editor.du.hide();
	},
	defOwner: function()
	{
		if(!dm.regex.text.test(nav.form.owner_input.value) && nav.form.owner_input.value!="")
			return nav.msg(l(86)+".","red")
		nav.msg(l(81)+"..")
		inc(idle.i.path+"dm.php?do=owner&code="+doc.key+"&data="+nav.form.owner_input.value+"")
	}
	
}

var um = {
	status: false,
	elm: {},
	regex: { email:new RegExp(/^[\w_\.]+@[\w_\.]+$/), text:new RegExp(/^[\w@\._\-]+$/) },
	lo: function()
	{
		inc(idle.i.path+"um.php?do=lo");
	},
	su: function()
	{
		if(g.id("email").value=='' || g.att("id","password","input").value=='')
			return nav.msg(l(87)+".","red")
			
		var $ = um.regex;
		var err = []
		if(!$.email.test(g.id("email").value))
			err.push("-"+l(88)+" ")
		if(!$.text.test(g.att("id","password","input").value))
			err.push("-"+l(89)+" ")
		if(g.att("id","password","input").value!=g.att("id","password_","input").value)
			err.push("-"+l(90)+" ")
		if(err.length>0)
			return nav.msg("<strong>"+l(91)+":</strong><br />"+err,"red")
		nav.msg(l(81))
		nav.form.button_su.style.display = "none"
		inc(idle.i.path+"um.php?do=su&e="+g.id("email").value+"&p="+g.id("password").value)
	},
	si: function()
	{
		var $ = um.regex;
		var err = []
		if(!$.email.test(g.id("email").value))
			err.push("-"+l(88)+" ")
		if(!$.text.test(g.att("id","password","input").value))
			err.push("-"+l(89)+" ")
		if(err.length>0)
			return nav.msg("<strong>"+l(91)+":</strong><br />"+err,"red")
			
		nav.form.button_si.style.display = "none"
		nav.msg(l(81))
		inc(idle.i.path+"um.php?do=si&e="+g.id("email").value+"&p="+g.id("password").value)
	},
	cp: function()
	{
		var $ = um.regex;
		var err = []
		if(!$.text.test(nav.form.cp_password.value))
			err.push("\n\t*"+l(89))
		if(nav.form.cp_password.value!=nav.form.cp_password_.value)
			err.push("\n\t*"+l(90))
		if(err.length>0)
			return nav.msg("<strong>"+l(91)+":</strong><br />"+err,"red")
		nav.msg(l(81))
		inc(idle.i.path+"um.php?do=cp&p="+nav.form.cp_password.value)
		nav.form.cp_submit.style.display = "none"
	},
	ce:function()
	{
		if(!um.regex.email.test(nav.form.ce_email.value))
			return nav.msg(l(88),"red");
		nav.msg("Please wait..");
		inc(idle.i.path+"um.php?do=ce&e="+nav.form.ce_email.value);
	},
	deleteAccount: function(v)
	{
		if(typeof v=="undefined")
			return nav.msg(l(92)+"? <a href='javascript:nav.msg(0)'>"+l(1)+"</a>/<a href='javascript:um.deleteAccount(1)'>"+l(0)+"</a>");
		nav.msg(l(81));
		inc(idle.i.path+"um.php?do=da");
	},
	re:function()
	{
		var email = g.id("email").value;
		if(!um.regex.email.test(email))
			return nav.msg(l(88),"red");
		nav.msg(l(81)+"..")
		inc(idle.i.path+"um.php?do=re&e="+email);
	},
	gp:function(e,id)
	{
		nav.msg(l(81)+"..");
		inc(idle.i.path+"um.php?do=gp&e="+e+"&i="+id);
	}
}

var am = {
	cursor:{ tag:false, elm:null },
	elm:{},
	data:[],
	init: function()
	{
		with(am)
		{
			inc(idle.i.path+"am.php?do=ls");
		}
	},
	search:function(t)
	{
		with(am)
		{
			cursor.tag = typeof t=='string'?t:false;

			var filter =  [nav.form.am_search.value!="" && typeof nav.form.am_search.value!="undefined"?nav.form.am_search.value.toLowerCase():false,cursor.tag];
			nav.form.am_sapp.innerHTML = "";
			am.tag = {};
			for(x in data)
			{
				var item = data[x];
				
				if((filter[0]!=false && item.title.toLowerCase().search(filter[0])==(-1)) || (filter[1]!=false && typeof item.tag[cursor.tag]=='undefined'))continue;
	
				item.elm = nav.form.am_sapp.create("a::<input type='checkbox' onclick='am.select("+x+")'  "+(item.sel!=0 && item.sel!=2?"checked":"")+"/>&nbsp;"+item.title,{ "class":"app", onmousedown:"e:am.hl("+x+")" });

				for(y in item.tag)
					if(typeof am.tag[y]=='undefined')
						am.tag[y] = [1,null];
					else
						am.tag[y][0]++;
				
			}
			nav.form.am_stag.innerHTML = "";
			var all = nav.form.am_stag.create("a::"+l(73)+" ("+data.length+")",{ "class":"tag", onmousedown:"e:am.search()" });
			
			for (x in am.tag)
				am.tag[x][1] = nav.form.am_stag.create("a::"+x+'('+am.tag[x][0]+')',{ "class":"tag", onmousedown:"e:am.search('"+x+"')" });
			
			if(cursor.tag!=false)tag[cursor.tag][1].setAttribute(n.ie?"className":"class","stag");
			else all.setAttribute(n.ie?"className":"class","stag");
			
		}
	},
	hl: function(x)
	{
		with(am)
		{
			data[x].elm.setAttribute(n.ie?"className":"class",data[x].elm.getAttribute(n.ie?"className":"class")=="app"?"sapp":"app");
			
			nav.form.am_dapp.innerHTML = "<h1>"+data[x].title+"</h1>"+data[x].description+"<h2>"+l(93)+":"+data[x].developer+"</h2>";
			
			if(cursor.elm!=null)data[cursor.elm].elm.setAttribute(n.ie?"className":"class","app");
			cursor.elm = cursor.elm==x?null:x;
		}
	},
	select: function(item)
	{
		
		if(typeof item!='number')return false;
		with(am)
		{
			var item = data[item];
			item.sel = item.sel==0?1:(item.sel==1?0:(item.sel==2?3:2));
		}
	},
	load: function()
	{
		with(am)
		{
			nav.form.am_bload.setAttribute("disabled","disabled");
			nav.form.am_bsave.setAttribute("disabled","disabled");

			nav.msg(l(81))
			var lo = "i=";
			for(x in data)
				if(data[x].sel==1)
					lo+=data[x].file+","
			inc(idle.i.path+"am.php?do=lo&"+lo);
		}
	},
	sv: function(x)
	{
		if(user.id==0)
			return nav.msg(l(95),"red");
		with(am)
		{
			var lo = "i=";
			for(x in data)
				if(data[x].sel==1 || data[x].sel==2)
				{
					data[x].sel=data[x].sel==1?3:0;
					lo+=data[x].file+","
				}
			if(lo.length==2)return false;
			nav.msg(l(81));
			nav.form.am_bload.setAttribute("disabled","disabled");
			nav.form.am_bsave.setAttribute("disabled","disabled");
			inc(idle.i.path+"am.php?do=sv&load="+(typeof x!='undefined'?x:0)+"&"+lo);
		}
	},
	svnload:function()
	{
		am.sv(1)
	}

}

var echo = idle.print;
var clrscr = function(){ idle.element.a.innerHTML=''; idle.row = [] }
window.onload = function(){ idle.init(); }
window.onresize = idle.replace


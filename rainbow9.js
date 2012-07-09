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

function _e(elm)
{
	elm = typeof elm == 'object'?elm:document;
	elm.create = function(tag,attribute,css,event,innerHTML)
	{
		if(typeof tag!='string')
			return false;
		innerHTML = tag.split('::').length>1 && typeof innerHTML!='string'?tag.split('::')[1]:innerHTML;
		tag = tag.split('::').length>1?tag.split('::')[0]:tag;

		var element = document.createElement(tag);
		if(typeof attribute=='object')
		for (x in attribute)		
			if(typeof attribute[x]=='string' && attribute[x].substring(0,2)!="e:" || n.ie!=true)
				element.setAttribute(x=="class"&&n.ie?"className":x,attribute[x]);
			else
				eval('element.'+x+' = function(){'+attribute[x].substring(2)+'}');
				
		if(typeof css=='object')
		for (x in css)
			eval('element.style.'+(x=="float"?(n.ie?"styleFloat":"cssFloat"):x)+' = "'+css[x]+'"');
	
		if(typeof event=='object')
		for (x in event)
			eval('element.'+x+' = '+event[x]);

		if(typeof innerHTML=='string')
			element.innerHTML = innerHTML;

		if(elm==document)
			document.body.appendChild(element);
		else
			elm.appendChild(element);
		return _e(element);
	}
	elm.css = function(property)
	{
		var style = navigator.appName!='Microsoft Internet Explorer'?document.defaultView.getComputedStyle(elm, null):elm.currentStyle;
		if(typeof property=='string')
			return eval('style.'+property);
		else if(typeof property=='object')
		{
			var data = {};
			for (x in property)
				eval('data.'+property[x]+' = style.'+property[x]);
			return data;
		}
		return style;
	}
	return elm;
}
var e = new _e();

function _g()
{
	var obj = {
		id: function(id)
		{
			return _e(document.getElementById(id));
		},
		tag: function(tag)
		{
			var data = [];
			for (x in document.getElementsByTagName(tag))
			{
				if(typeof document.getElementsByTagName(tag)[x]!='object')
					continue;
				data[data.length] = _e(document.getElementsByTagName(tag)[x]);
			}
			return data.length==1?data[0]:data;
		},
		att: function(att,val,tag)
		{
			tag = typeof tag!='string'?'*':tag;
			var data = [];
			if(typeof att!='string')return null;
			for(x in document.getElementsByTagName(tag))
			{	
				if(typeof document.getElementsByTagName(tag)[x]!='object')
					continue;
				if(document.getElementsByTagName(tag)[x].getAttribute(att))
					if(typeof val!='string')
						data[data.length] = _e(document.getElementsByTagName(tag)[x]);
					else if(typeof val=='string' && document.getElementsByTagName(tag)[x].getAttribute(att)==val)
					{
						data[data.length] = _e(document.getElementsByTagName(tag)[x]);
					}
				if(parseInt(x)+1==document.getElementsByTagName(tag).length)
					break;
				
			}
			return data.length==1?data[0]:data;
		}
	}
	return obj;
}
var g = new _g();

function css(r)
{
	r = navigator.appName!='Microsoft Internet Explorer'?r:r.split(/{|}/);
	var s = document.create("style");
	if(navigator.appName!='Microsoft Internet Explorer')
		s.sheet.insertRule(r,s.sheet.cssRules.length)
	else
		s.styleSheet.addRule(r[0],r[1]);
}

function timer(p,f1)
{
	p = typeof p=='object'?p:{};
	var obj = {
		status: typeof p.enabled=='boolean'?p.enabled:true,
		interval:typeof p.interval=='number'?p.interval:1000,
		process:[],
		counter:0,
		loop: typeof p.loop=='number'?p.loop:-1,
		attachFunction: function(p2,f2){ p2.counter=0; p2.loop=typeof p2.loop=='number'?p2.loop:-1; with(obj)process[process.length] = [p2,f2]; },
		run: function()
		{
			if(obj.status && ((obj.counter-1)<obj.loop || obj.loop==(-1)))
			{
				obj.counter++;
				setTimeout(function(){
						with(obj)
							for($ in process)
								if((parseInt(((counter)*interval)/(process[$][0].interval*(process[$][0].counter+1)))>0 || process[$][0].interval==0) && (process[$][0].counter<process[$][0].loop || process[$][0].loop==(-1) )){  var v = process[$]; v[0].counter++; v[1]();  }
						obj.run();
				},obj.interval);
			}
		},
		enable:function(){ obj.status=true; obj.run() }
	}
	if(typeof f1=='function')obj.attachFunction({ interval:0, loop:typeof p.loop=='number'?p.loop:-1 },f1);
	obj.run();
	return obj;
}

function mouse(event)
{
	return {
		x:navigator.appName!='Microsoft Internet Explorer'?event.clientX:window.event.clientX,
		y:navigator.appName!='Microsoft Internet Explorer'?event.clientY:window.event.clientY,
		t:navigator.appName!='Microsoft Internet Explorer'?event.target:window.event.srcElement
	}
}

function event(elm,ev,f)
{
	return navigator.appName=='Microsoft Internet Explorer'?elm.attachEvent('on'+ev,f):elm.addEventListener(ev,f,false);
}

function xhr(u,p)
{
	p = typeof p=='object'?p:{};
	if(typeof u!='string' || typeof p.onComplete!='function')return false;
	var obj = {
		engine:navigator.appName=='Microsoft Internet Explorer'?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest(),
		parameters:typeof p.parameters=='string'?p.parameters:'',
		asynchronous:typeof p.asynchronous=='boolean'?p.asynchronous:true,
		method:typeof p.method=='string'?p.method:'get',
		contentType:typeof p.contentType=='string'?p.contentType:'Text',
		onComplete:p.onComplete,
		url:u,
		init:function()
		{
			with(obj)
			{
				engine.open(method,url+'?'+(method=='get'?parameters:''),asynchronous);
				engine.onreadystatechange = function()
				{
					if(engine.readyState == 4) eval('onComplete(engine.response'+contentType+')')
				}
				if(method=='post')
					engine.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			}
		},
		send:function()
		{
			with(obj)
				engine.send(method=='post'?parameters:null);
		}
	}
	obj.init();
	obj.send();
	return obj;
}

function inc(u)
{
	document.create('script',{ src:u });
}

var n = { ie:navigator.appName=='Microsoft Internet Explorer', ne:navigator.appName == 'Netscape', op:navigator.appName == 'Opera', webkit:/webkit/i.test(navigator.userAgent) }

/*
	title:color picker
	description:color picker for r9 editor
	tag:editor
	developer:<a href="http://azer.kodfabrik.com">Azer Koculu</a>
*/

event(window,"load",function(){
	
	editor.nav.button.push([7,"Color","editor.du.colorpicker()","color_wheel.gif"]);
	editor.du["colorpicker"] = function()
	{
		editor.elm.c.style.color = prompt("Color:",editor.elm.c.css("color"));
	}

});

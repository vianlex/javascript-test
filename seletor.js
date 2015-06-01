$(document).ready(
	function(){
		$("button").click(function(){$('p')[0].innerHTML = "Hello world, I am a pythoner"});
		$('button').click(function(){$(".pclass").text("这个使用的是text修改，上一个是使用innerHTML修改的！")});
	})
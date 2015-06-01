//开始学习Jquery库的使用：
//jQuery的基本语法 $(seletor).action()  jQuery的标记'$'  选择操作的对象seletor   要实行的效果action()

$(document).ready(function () {
	$('p').click(function () {
		$(this).hide();
	});


	$("#pid1").css({"color":"red"});
	alert("I am a jQuery!文档已经加载完毕了");
	alert($('p'));
})

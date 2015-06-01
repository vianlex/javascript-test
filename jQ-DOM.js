$(document).ready(function(){
	$("#btn").click(demo);
	$("#btn2").click(addHTML);
	$("#btn3").click(returnFunction);

	//添加新的内容同时也可以添加元素常用的方法Append preppend before after 
	$('#btn4').click(function(){
		$('#pid3').append("这个是新添加的！");   //在p标签后面添加新的内容，同一行插入
		$("#pid3").prepend("添加的内容");
	});

	$("#btn5").click(function(){
		$("#pid3").before("你好啊！"); //插入的时候另起一行
		$("#pid3").after("你好，少年");
	});

	//添加新的元素
	$("#btn6").click(addElement);

	//删除元素 remove empty
	$("#btn7").click(function(){
		// $('#div').remove();
		$("#div").empty();
	});
});


function demo(){
	console.log($("#pid").text());
	console.log($("#pid").html());
	console.log($("#aid").attr("href"));
	// $('#in1').attr('type','button');
	$('#in1').attr({
		'type':'button',
		'title':'python',
	});

}

function addHTML(){
	$('#pid').html("<input id = 'in1' type = 'text' value = 'hello world'>");
	// $("#pid").text("<a href = 'http://www.baidu.com' >baidu</a>")

}

//定义一个回调函数
function returnFunction(){
	$("#pid2").text(function(id,oldText){
		return "old : " + oldText + "   这是添加的新内容" + (id); 
	})
}


//添加新的element
function addElement(){
	var text1 = "<p>新添加的P标签 one</p>";
	var text2 = $("<p></p>").text("新添加的P标签 two");
	var text3 = document.createElement("p");
	text3.innerHTML = "新添加的P标签 three";
	$('body').append(text1,text2,text3);
}
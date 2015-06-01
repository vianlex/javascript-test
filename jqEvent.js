$(document).ready(function(){
	$('#btn1').dblclick(function(){$('#pid').hide()});  //双击按钮
	// $('#btn1').click(function(){$('.pclass').text("内容已经改变了！")});

	$("#btn1").click(fun);
	//事件的绑定bind 和 unbind
	
	$("#btn1").bind("click",clickHandler1);
	$("#btn1").bind("click",clickHandler2);
	//$("#btn1").unbind("click");    //解除事件，解除的是所有事件

	//使用on和bind是一样的，推荐使用on
	$("#btn1").on("click",onHandler);

	//事件之事件目标和冒泡
	
	$("body").bind("click",bodyHandler);
	$("div").bind("click",divHandler1);
	$("div").bind("click",divHandler2)

	//自定义事件
	var btn1 = $("#btn1");
	btn1.click(function(){
		var e  =  jQuery.Event("myEvent");
		btn1.trigger(e);
	})
	btn1.bind("myEvent",function(event){console.log(event);});

});
	


function clickHandler1(e){
	console.log("clickHandler1");
}


function clickHandler2(e){
	console.log("clickHandler2");
}

function fun(){
	$(".pclass").text("内容已经改变了！");
}

function onHandler(){
	console.log("这个使用的是on方法绑定事件");
}

function bodyHandler(event){
	console.log(event);
}

function divHandler1(event){
	console.log(event);
	// event.stopImmediatePropagation()   // 阻止所有事件的冒泡
	event.stopPropagation(); // 事件中阻止父类的冒泡
}

function divHandler2(event){
	console.log(event);
	
}
window.onload = function(){
	document.getElementById("btn1").addEventListener("click", demo,false);
	document.getElementById("btn2").onclick = demo;
	document.getElementById("ah1").onmouseover = changedmeo;
	document.getElementById("ah1").onmouseout = function(){this.style.color = "red";}
	var str = typeof demo;
	document.getElementById("btn3").addEventListener("click",function(){document.write(str);},false);
	// document.getElementsByName("btn3").addEventListener("click",function(){document.write("Hello my name is btn3");},false);
}

function demo(){
	var  avar = document.getElementById("aid");
	avar.innerHTML = "W3C";
	avar.href = "http://www.w3school.com.cn/";
	avar.style.color = "blue";
} 

function changedmeo(){
	document.getElementById("ah1").style.color = "orange";
	

}

function addLoadEvent(func){
	onLoad = window.load;
	if(typeof window.load != 'function'){
		window.load = func;
	}else{
		window.load = function(){
			onLoad();
			func();
		}
	}
}
window.onload = function(){

    var btn1 = document.getElementById("btn1");

    btn1.addEventListener("click",test1,false);
    btn1.addEventListener("click", test2,false);
    btn1.addEventListener("click", test3,false);

    var btn2 = document.getElementById("btn2");

    btn2.addEventListener("click",function(){

        btn1.removeEventListener("click",test1,false);

    },false);

}

function test1(){

alert("111");

}

function test2()
{
    document.write("Hello javascript");
}

function test3(obj) {
    alert("Hello I am a pythoner");
}
var oList = document.querySelectorAll(".list");
var oUl = document.querySelector(".connet ul");
var i = 0;
var b = 0;
for(i = 0; i < oList.length; i++){
    oList[i].index = i;
    oList[i].onclick = function(){
        oUl.style.top = -500*this.index + "px";
    }
    oList[i].onmouseover = function(){
        oList[this.index].style.color = 'blue';
    }
    oList[i].onmouseout = function(){
        oList[this.index].style.color = 'white';
    }
}
var oLast = document.querySelector('.last');
oLast.onclick = function(){
    oUl.style.top = "0px";
}
oLast.onmouseover = function(){
    oLast.style.color = 'red';
    oLast.style.opacity = 0.8;
}
oLast.onmouseout = function(){
    oLast.style.color = 'white';
    oLast.style.opacity = 0.2;
}
setInterval(function(){
    b++;
    if(b >= oList.length){b = 0}
    oUl.style.top = -500*b + "px";
},6000);
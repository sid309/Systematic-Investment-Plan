var slider=document.getElementById("I2");
var output=document.getElementById("value");


output.innerHTML=slider.value;
slider.oninput=function(){
    output.innerHTML=this.value;
}

slider.addEventListener("mousemove",function(){
    var x=slider.value;
    var color='linear-gradient(90deg,rgb(220,117,252)'+x+'%,rgb(214,214,214)'+x+'%)';
    slider.style.background=color;

})

var slider1=document.getElementById("I3");
var output1=document.getElementById("value1");


output1.innerHTML=slider1.value;
slider1.oninput=function(){
    output1.innerHTML=this.value;
}

slider1.addEventListener("mousemove",function(){
    var x=slider1.value;
    var color='linear-gradient(90deg,rgb(220,117,252)'+x+'%,rgb(214,214,214)'+x+'%)';
    slider1.style.background=color;

})
/*
I1=C
I2=G
I3=R
I4=T

I5=(I1/I3-I2)


*/
function calc(){
    var I1=parseFloat(document.getElementById("I1").value);
    var I2=parseFloat(document.getElementById("I2").value)/100;
    var I3=parseFloat(document.getElementById("I3").value)/100;
    var I4=parseFloat(document.getElementById("I4").value);
    var a=I1/(I3-I2);
    var b=Math.pow(1+I2,I4);
    var c=a*b;
    d=c.toFixed(2);
    document.getElementById("I5").value=parseFloat(d);
     
    var J4=(Math.pow(1+I3,1/12))-1;
    var J5=12*I4;
    var e=c*J4;
    var f=(Math.pow(1+J4,J5))-1;
    var g=e/f;
    var h=g.toFixed(2);
    document.getElementById("I6").value=parseFloat(h);
}
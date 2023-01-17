var button = document.getElementById('right-1');
button.onclick = function () {
var container = document.getElementById('boxs');
sideScrollOne(container,'right-1',10, 200, 10);
};

var back = document.getElementById('left-1');
back.onclick = function () {
var container = document.getElementById('boxs');
sideScrollOne(container,'left',10, 200,10);
};      




function sideScrollOne(element,direction,speed,distance,step){
scrollAmount = 0;
var slideTimer = setInterval(function(){
if(direction == 'left'){
   element.scrollLeft -= step;
} else {
   element.scrollLeft += step;
}
scrollAmount += step;
if(scrollAmount >= distance){
   window.clearInterval(slideTimer);
}
}, speed);
}



var button = document.getElementById('right');
button.onclick = function () {
var container = document.getElementById('box');
sideScrollTwo(container,'right',10,200,10);
};

var back = document.getElementById('left');
back.onclick = function () {
var container = document.getElementById('box');
sideScrollTwo(container,'left',10,200,10);
};      




function sideScrollTwo(element,direction,speed,distance,step){
scrollAmount = 0;
var slideTimer = setInterval(function(){
if(direction == 'left'){
   element.scrollLeft -= step;
} else {
   element.scrollLeft += step;
}
scrollAmount += step;
if(scrollAmount >= distance){
   window.clearInterval(slideTimer);
}
}, speed);
      }
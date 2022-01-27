/*
creator Biplob
Biplob kumar
*/

var info = document.querySelector(".vvv");
var displayBox = document.querySelector('.container').clientWidth;
try{

const counters = document.querySelectorAll('.counter');
const counterSocial = document.querySelectorAll('.counterSocial');
    
function cc(){   
    
counters.forEach( counter => {
function updateCount (){
	const speed = 500;
	const changeVal = 30;
    const target = parseInt(counter.getAttribute('data-target'));
	const count = parseInt(counter.innerText);
	const increment =Math.ceil(Math.random()*target/speed);
    
    if (count < target) {
    counter.innerText =`${count + increment} $/mo`;
    setTimeout(updateCount,changeVal);
    } else {
    counter.innerText = `${target} $/mo`;
    }
};
  updateCount();

});
    
};


if(document.querySelector('.container').clientWidth>768){
cc();
}else{
/*
Scroll Section
*/
window.addEventListener("scroll",function(){
if(displayBox <=500 && scrollY > 455
){
	cc();
}

});
}


}catch(err){
console.log(err.message)
}



try{


function follow(){

const counters = document.querySelectorAll('.counter');
const counterSocial = document.querySelectorAll('.counterSocial');
const speed = 370;
const changeVal = 70;

counterSocial.forEach( counter =>{
 function updateSocial(){
 
 const target = parseInt(counter.getAttribute('data-target'));
 const count = parseInt(counter.innerText);
 const increment =Math.ceil(Math.random()*target/speed);
 
 if (count < target) {
 counter.innerText =count + increment;
 setTimeout(updateSocial,changeVal);
 } else {
 counter.innerText = target;
 }        
 };
 updateSocial();
 
 
 });

};

window.addEventListener("scroll",function(){
info.innerHTML=scrollY;
if(displayBox>768 && scrollY > 1280){
follow();
}else if(displayBox <= 500 && scrollY > 3434){
follow();
}


});


}catch(err){
console.log(err.message)
}


    
    
    







//try start
try{
window.onscroll = function(){
var scrollBtn = document.getElementById("arrowKey");
var scroll = scrollY;

if(scroll > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}
};

}catch(err){
console.log(err.message)
}
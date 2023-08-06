let left=document.getElementById('left');
let right=document.getElementById('right');
let middle=document.getElementById('middle');
let fl=document.getElementById('fl');
let boy=document.getElementById('boy');

window.addEventListener("scroll",()=>{let scrollvalue=window.scrollY;
left.style.right=scrollvalue*-0.25+"px";
right.style.left=scrollvalue*-0.25+"px";
middle.style.marginLeft=scrollvalue*-0.25+"px";
fl.style.left=scrollvalue*0.25+"px";
boy.style.left=scrollvalue*0.5+"px"
ins.style.left=scrollvalue*0.25+'px'})

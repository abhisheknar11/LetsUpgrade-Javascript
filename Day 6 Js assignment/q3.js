//Welcome the user
const name = prompt("Enter your name","Anonymous");

title.innerText = `Welcome to the family ${name}`;
if(name==null){
    title.innerText=`Welcome`;
}


//clock
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);


/*
//dark mode
const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
}
*/

// dark mode using toggle

var b1 = document.querySelector("button");
b1.addEventListener("click",function(){
    document.body.classList.toggle("bg");
});
    




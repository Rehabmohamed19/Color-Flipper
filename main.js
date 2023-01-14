const colors = ["navy" , "white" , "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNum = getRandomNum();
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum];
})

function getRandomNum(){
    return Math.floor(Math.random()* colors.length);
}
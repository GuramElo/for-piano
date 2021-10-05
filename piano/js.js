function sergo(kum){
    (new Audio(`assets/b${kum}.mp3`)).play();
    document.getElementById(`b${kum}`).style.backgroundColor="lightskyblue";
setTimeout(()=>{
    document.getElementById(`b${kum}`).style.backgroundColor="black";
},500);
}
function bergo(num){
    (new Audio(`assets/w${num}.mp3`)).play();
document.getElementById(`w${num}`).style.backgroundColor="red";
setTimeout(()=>{
    document.getElementById(`w${num}`).style.backgroundColor="white";
},500);
}
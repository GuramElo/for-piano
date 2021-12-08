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

function alo(){
let b=document.querySelector("input").value;
let inn=0,outt=0,arr=[];

while(true){
outt=b.indexOf(",",inn+1);
if(outt==-1)break;
arr.push(b.substring(inn,outt));

inn=outt+1;
}
arr.push(b.substring(inn));
console.log(arr);
let a=(k)=>{
   setTimeout(()=>{
       if(k==arr.length)return;
     (new Audio(`assets/${arr[k]}.mp3`)).play();
           a(k+1);
    },1000);
}
a(0);

}
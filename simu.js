let gameseq=[];
let userseq=[];
let btns=["one","two","three","four"];
let level=0;
let started=false;
let h2=document.querySelector("h2")

document.addEventListener("keypress",()=>{
   if(started==false){
    started=true
    levelup();

   }
})

function levelup(){
    userseq=[]
    level++;
    h2.innerText=`Level ${level}`;
    let randbtn=Math.floor(Math.random()*4)
    let randomcolor=btns[randbtn];
    let btn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor)
    console.log(gameseq)
    gamebtnflash(btn);
}
function gamebtnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000)
    
}
function userbtnflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },1000) 
}
function btnpress(){
    let btn=this
    userbtnflash(btn)
    let usercolor=btn.getAttribute("id")
    console.log("user color is "+usercolor)
    userseq.push(usercolor)
    checker(userseq.length-1);


}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function checker(idx){
    //console.log("current level is "+level)
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(function(){
                levelup();
                
            },1000);
        }
        console.log("same value")
    }
    else{
        h2.innerText=`Game Over! your score was ${level-1}. Press any key to Restart`;
        reset();

        
        

    }

}
function reset(){
    level=0;
    gameseq=[];
    started=false;
    userseq=[]; 
}



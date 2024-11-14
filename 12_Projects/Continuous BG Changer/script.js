 // Generation Random Hex code for color

 const randomcolor=function(){
    const hex="0123456789abcdef";
    let col='#';
    for(let i=0;i<6;i++){
        col=col+hex[Math.floor(Math.random()*16)];
    }
    return col;
};
//console.log(randomcolor());

let bgchangefunc=function(){
    bgchange=document.body.style.backgroundColor=randomcolor()   
}

let continuechangeBG;

let start=document.getElementById('start');
start.addEventListener('click',()=>{
     continuechangeBG=setInterval(bgchangefunc,1000);
     console.log('Background Color Changing STARTED');
})

let stop=document.getElementById('Stop');

stop.addEventListener('click',function(){
    clearInterval(continuechangeBG);
    console.log('Background Changing STOPPED');

})


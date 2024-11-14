const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();


    const num1=parseInt(document.getElementById('num1').value);
    const num2=parseInt(document.getElementById('num2').value);
    const result=document.querySelector(".result");
    const comeagain=document.querySelector('.comeagain')
 
    if(num1 ==="" || num1 == NaN){
        result.innerHTML="Please Enter a Valid Number";
    }else if(num2 ==="" || num2 == NaN){
        result.innerHTML="Please Enter a Valid Number";
    }else{
        const sum=num1+num2
        result.innerHTML=`The Sum of ${num1} and ${num2} is ${sum}`;
        comeagain.innerHTML="Thanks For Visiting Us....!"
    }
    
})
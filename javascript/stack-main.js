const stackContainer=document.querySelector(".stack-holder");
var Tail=document.querySelector(".Top");
var inputval=document.querySelector(".inputval");
var deleteBtn=document.querySelector(".deleteBtn");
var addBtn=document.querySelector(".addBtn");
var resetBtn=document.querySelector(".resetBtn");


addBtn.addEventListener('click',addEleStack);
deleteBtn.addEventListener('click',deleteEleStack);
resetBtn.addEventListener('click',createStack);

var stackDivs=[];
var top1=-1;


function createStack(){
    Tail.innerHTML="";
    top1=-1;
    stackContainer.innerHTML="";
    cur=0;  
    let rearele=document.createElement("div");
    rearele.innerHTML=0;
    Tail.appendChild(rearele);
    for(let i=0;i<10;i++){
        stackDivs[i]=document.createElement("div");
        stackDivs[i].classList.add("queue-box");
        stackContainer.appendChild(stackDivs[i]);
    }
}

window.onload=createStack();


function addEleStack(){
    let someval=inputval.value;
    var regex=/^[0-9]+$/;
    if(!someval.match(regex)){
        alert(`${someval} must enter a number `);
        return;
    }
    if(top1>9){
        alert(`stack Overflow size of stack is 12 curr insertion place is ${top1}`);
        top1=9;
    }
    else{
       top1++;
       let value=parseInt(inputval.value);
       let somediv=document.createElement("div");
       somediv.classList.add(".inside");
       somediv.innerHTML=value;
       Tail.innerHTML="";
       let rearon=document.createElement("div");
       rearon.classList.add(".inside");
       rearon.innerHTML=top1;
       Tail.appendChild(rearon);
       stackDivs[top1].appendChild(somediv);
    }
}

function deleteEleStack(){
    if(top1<0){
        alert(`Queue Underflow size of queue is 12 curr deletion place is ${top1}`);
        top1=-1;
    }
    else{
        stackDivs[top1].innerHTML="";
        top1--;
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        Tail.innerHTML="";
        somediv.innerHTML=top1;
        Tail.appendChild(somediv);
    }
}
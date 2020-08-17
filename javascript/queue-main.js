const queueContainer=document.querySelector(".queue-holder");
var first=document.querySelector(".First");
var Tail=document.querySelector(".Tail");
var inputval=document.querySelector(".inputval");
var deleteBtn=document.querySelector(".deleteBtn");
var addBtn=document.querySelector(".addBtn");
var resetBtn=document.querySelector(".resetBtn");


addBtn.addEventListener('click',addEleQueue);
deleteBtn.addEventListener('click',deleteEleQueue);
resetBtn.addEventListener('click',createQueue);

var queueDivs=[];
var queueValues=[];
var front=0;
var rear=0;


function createQueue(){
    first.innerHTML="";
    Tail.innerHTML="";
    front=0;
    rear=0;
    queueContainer.innerHTML="";
    cur=0;
    let firstele=document.createElement("div");
    firstele.innerHTML=0;
    let rearele=document.createElement("div");
    rearele.innerHTML=0;
    first.appendChild(firstele);
    Tail.appendChild(rearele);
    for(let i=0;i<12;i++){
        queueDivs[i]=document.createElement("div");
        queueDivs[i].classList.add("queue-box");
        queueContainer.appendChild(queueDivs[i]);
    }
}

window.onload=createQueue();


function addEleQueue(){
    let someval=inputval.value;
    var regex=/^[0-9]+$/;
    if(!someval.match(regex)){
        alert(`${someval} must enter a number `);
        return;
    }
    if(rear>=12){
        alert(`Queue Overflow size of queue is 12 curr insertion place is ${rear}`);
    }
    else{
       let value=parseInt(inputval.value);
       let somediv=document.createElement("div");
       somediv.classList.add(".inside");
       somediv.innerHTML=value;
       Tail.innerHTML="";
       let rearon=document.createElement("div");
       rearon.classList.add(".inside");
       rearon.innerHTML=rear;
       Tail.appendChild(rearon);
       queueDivs[rear].appendChild(somediv);
       rear++;
    }
}

function deleteEleQueue(){
    if(front>=rear){
        alert(`Queue Underflow size of queue is 12 curr deletion place is ${front}`);
    }
    else{
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        first.innerHTML="";
        somediv.innerHTML=front;
        first.appendChild(somediv);
        queueDivs[front].innerHTML="";
        front++;
    }
}
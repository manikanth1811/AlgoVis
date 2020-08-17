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
var front=-1;
var rear=-1;


function createQueue(){
    first.innerHTML="";
    Tail.innerHTML="";
    front=-1;
    rear=-1;
    queueContainer.innerHTML="";
    let firstele=document.createElement("div");
    firstele.innerHTML=-1;
    let rearele=document.createElement("div");
    rearele.innerHTML=-1;
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
    else if(rear==-1 && front==-1){
        
       rear++;
       front++;
       let somediv1=document.createElement("div");
        somediv1.classList.add(".inside");
        first.innerHTML="";
        somediv1.innerHTML=front;
        first.appendChild(somediv1);
       Tail.innerHTML="";
       let rearon=document.createElement("div");
       rearon.classList.add(".inside");
       rearon.innerHTML=rear;
       Tail.appendChild(rearon);
       let value=parseInt(inputval.value);
       let somediv=document.createElement("div");
       somediv.classList.add(".inside");
       somediv.innerHTML=value;
       queueDivs[rear].appendChild(somediv);
    }
    else{
       rear++;
       Tail.innerHTML="";
       let rearon=document.createElement("div");
       rearon.classList.add(".inside");
       rearon.innerHTML=rear;
       Tail.appendChild(rearon);
       let value=parseInt(inputval.value);
       let somediv=document.createElement("div");
       somediv.classList.add(".inside");
       somediv.innerHTML=value;
       queueDivs[rear].appendChild(somediv);
    }
}

function deleteEleQueue(){
    if((front==-1 && rear==-1) ||(front==12 && rear==12)){
        alert("Queue Overflow can't delete");
    }
    else if(front>rear){
        alert(`Queue Underflow size of queue is 12 curr deletion place is ${front}`);
    }
    else if(front==rear){
        queueDivs[front].innerHTML="";
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        first.innerHTML="";
        somediv.innerHTML=front;
        first.appendChild(somediv);
        front=-1;
        rear=-1;
        let somediv1=document.createElement("div");
        somediv1.classList.add(".inside");
        first.innerHTML="";
        somediv1.innerHTML=front;
        first.appendChild(somediv1);
        let rearele1=document.createElement("div");
        rearele1.classList.add(".inside");
        rearele1.innerHTML=-1;
        Tail.innerHTML="";
        Tail.appendChild(rearele1);
    }
    else{
       
        queueDivs[front].innerHTML="";
        front++;
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        first.innerHTML="";
        somediv.innerHTML=front;
        first.appendChild(somediv);
        
    }
}
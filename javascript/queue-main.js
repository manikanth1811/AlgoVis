const queueContainer=document.querySelector(".queue-holder");
var first=document.querySelector(".First");
var Tail=document.querySelector(".Tail");
var inputval=document.querySelector(".inputval");
var deleteBtn=document.querySelector(".deleteBtn");
var addBtn=document.querySelector(".addBtn");
var resetBtn=document.querySelector(".resetBtn");



var maxsize=12;

function preprocess(){
    if (window.matchMedia('(max-device-width: 960px)').matches) {
        maxsize=9;
    }
    createQueue();
}


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
    for(let i=0;i<maxsize;i++){
        queueDivs[i]=document.createElement("div");
        queueDivs[i].classList.add("queue-box");
        queueContainer.appendChild(queueDivs[i]);
    }
}

window.onload=preprocess();


function addEleQueue(){
    let someval=inputval.value;
    var regex=/^[0-9]+$/;
    if(!someval.match(regex)){
        alert(`${someval} must enter a number `);
        return;
    }
    if(rear>=maxsize-1){
        alert(`Queue Overflow size of queue is ${maxsize} curr insertion place is ${rear+1}`);
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
    if(front>rear){
        alert(`Queue Underflow size of queue is ${maxsize} curr deletion place is ${front}`);
    }
    if(front==rear){
        alert('Queue underflow no elements to delete.');
        front=-1;
        rear=-1;
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        first.innerHTML="";
        somediv.innerHTML=front;
        first.appendChild(somediv);
        let rearele1=document.createElement("div");
        rearele1.classList.add(".inside");
        rearele1.innerHTML=-1;
        Tail.innerHTML="";
        Tail.appendChild(rearele1);
    }
    else{
        front++;
        let somediv=document.createElement("div");
        somediv.classList.add(".inside");
        first.innerHTML="";
        somediv.innerHTML=front;
        first.appendChild(somediv);
        queueDivs[front].innerHTML="";
    }
}
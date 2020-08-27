

var array_div=document.querySelector(".array_holder");
var new_array_btn=document.querySelector(".generate_new_array")
var Array_size=document.querySelector('.Array_size');
var algo_btns=document.querySelectorAll('.algobtn');


var new_array_values=[];
var new_array_divs=[];

new_array_btn.addEventListener("click",createArray);
Array_size.addEventListener("click",createArray);

var mulsize=20;

var mar=0.1

function preprocess(){
  if (window.matchMedia('(max-device-width: 960px)').matches) {
    mulsize=8;
    mar=0.3;
  }
  createArray();
}


var size;
function createArray(){
  size=Array_size.value*mulsize;
  array_div.innerHTML="";
  for(let i=0;i<size;i++){
    new_array_values[i]=Math.floor(((Math.random()*68)+1));
    new_array_divs[i]=document.createElement("div");
    array_div.appendChild(new_array_divs[i]);
    new_array_divs[i].style=" margin:0% " + mar + "%; background-color:aqua; width:" + (100/size-(2*0.1)) + "%; height:" + (new_array_values[i]) + "%;";
  }
}


window.onload=preprocess();



// Activating all the buttons
algo_btns[0].addEventListener('click',selectionSort);
algo_btns[1].addEventListener('click',bubbleSort);
algo_btns[2].addEventListener('click',mergeSort);
algo_btns[3].addEventListener('click',insertionSort);
algo_btns[4].addEventListener('click',selectionSort);



var algo_speed=document.querySelector('.Algo_speed');

var speed_array = [[300,250,200,150,100],[250,200,150,100,50],[150,120,90,60,30],[150,120,90,60,30]
,[120,100,90,60,30],[100,80,60,40,20],[100,80,60,40,20],[80,60,40,30,15],
[80,60,40,30,15],[60,50,40,20,10]];


algo_speed.addEventListener('click',updateSpeed);
Array_size.addEventListener('click',updateSpeed)


function updateSpeed(){
  speed=speed_array[parseInt(Array_size.value)-1][parseInt(algo_speed.value)-1];
}

 speed=speed_array[parseInt(Array_size.value)][parseInt(algo_speed.value)];

var delayTime=0;


//function which enables the div to change the position and color
function changeDiv(cont,height,color){
  window.setTimeout(()=>{
    cont.style=" margin:0% " + 0.1 + "%; width:" + (100/(size)-(2*0.1)) + "%; height:" + height + "%; background-color:" + color + ";";
  },delayTime+=speed);
}


function disableInputs(){
  algo_btns[0].disabled=true;
  algo_btns[1].disabled=true;
  algo_btns[2].disabled=true;
  algo_btns[3].disabled=true;
  algo_btns[4].disabled=true;
  new_array_btn.disabled=true;
  Array_size.disabled=true;
  algo_speed.disabled=true;
}


function enableInputs(){
  window.setTimeout(()=>{
  algo_btns[0].disabled=false;
  algo_btns[1].disabled=false;
  algo_btns[2].disabled=false;
  algo_btns[3].disabled=false;
  algo_btns[4].disabled=false;
  new_array_btn.disabled=false;
  Array_size.disabled=false;
  algo_speed.disabled=false;
  },delayTime+=speed);
}
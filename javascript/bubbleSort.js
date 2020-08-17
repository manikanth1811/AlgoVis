function bubbleSort(){
    disableInputs();
    delayTime=0;
    for(let i=0;i<size-1;i++){
        for(let j=0;j<size-i-1;j++){
            if(new_array_values[j]>new_array_values[j+1]){
                [new_array_values[j],new_array_values[j+1]]=[new_array_values[j+1],new_array_values[j]];
                changeDiv(new_array_divs[j+1],new_array_values[j+1],'red');
                changeDiv(new_array_divs[j],new_array_values[j],'red');    
            }
            changeDiv(new_array_divs[j],new_array_values[j],'aqua');    

        }

        changeDiv(new_array_divs[size-i-1],new_array_values[size-i-1],'green');
    }
    changeDiv(new_array_divs[0],new_array_values[0],'green');
    enableInputs();
 }
 
function selectionSort(){
  disableInputs();
   delayTime=0;
  for(let i =0 ;i<size;i++){
    let min_idx=i;
    for(let j=i+1;j<size;j++){
      if(new_array_values[min_idx]>new_array_values[j]){
        min_idx=j;
        changeDiv(new_array_divs[j],new_array_values[j],"red");
      }
    }
    //Swapping the values
    [new_array_values[i],new_array_values[min_idx]]=[new_array_values[min_idx],new_array_values[i]]
    // let temp=new_array_values[i];
    // new_array_values[i]=new_array_values[min_idx];
    // new_array_values[min_idx]=temp;
    changeDiv(new_array_divs[i],new_array_values[i],"green");
    if(i!=min_idx){
    changeDiv(new_array_divs[min_idx],new_array_values[min_idx],"aqua");
    }
  }
  enableInputs();
}

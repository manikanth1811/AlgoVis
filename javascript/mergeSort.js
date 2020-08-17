function mergeSort(){
    disableInputs();
    delayTime=0;
    mergeHelper(0,size-1);
    enableInputs();
}

function mergeHelper(start,end){
    if(start<end){
        var mid_value=Math.floor((start+end)/2);
        
        mergeHelper(start,mid_value);
        mergeHelper(mid_value+1,end);

        mergePartition(start,mid_value,end);
    }
}

function mergePartition(start,mid_value,end){
    var p=start,q=mid_value+1;
    

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid_value)
        {
            Arr[k++]=new_array_values[q++];
            changeDiv(new_array_divs[q-1],new_array_values[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=new_array_values[p++];
            changeDiv(new_array_divs[p-1],new_array_values[p-1],"red");//Color update
        }
        else if(new_array_values[p]<new_array_values[q])
        {
            Arr[k++]=new_array_values[p++];
            changeDiv(new_array_divs[p-1],new_array_values[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=new_array_values[q++];
            changeDiv(new_array_divs[q-1],new_array_values[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        new_array_values[start++]=Arr[t];
        changeDiv(new_array_divs[start-1],new_array_values[start-1],"green");//Color update
    }
}
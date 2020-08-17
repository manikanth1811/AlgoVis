function quickSort(){
    disableInputs();
    delayTime=0;
    quickSortHelper(0,size-1);
    enableInputs();
}



function quickSortHelper(start,end){
    if(start < end){
        var piv_pos= quickSortPar(start,end);
        quickSortHelper(start,piv_pos - 1);
        quickSortHelper(piv_pos + 1 , end);
    }
}



function quickSortPar(start, end){
    var i = start+1;
    var piv = new_array_values[end];
    changeDiv(new_array_divs[start],new_array_values[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            if (new_array_values[ j ] < piv)
            {
                changeDiv(new_array_divs[j],new_array_values[j],"yellow");

                changeDiv(new_array_divs[i],new_array_values[i],"red");
                changeDiv(new_array_divs[j],new_array_values[j],"red");
                var temp=new_array_values[i];
                new_array_values[i]=new_array_values[j];
                new_array_values[j]=temp;

                changeDiv(new_array_divs[i],new_array_values[i],"red");
                changeDiv(new_array_divs[j],new_array_values[j],"red");

                changeDiv(new_array_divs[i],new_array_values[i],"blue");
                changeDiv(new_array_divs[j],new_array_values[j],"blue");

                i += 1;
            
            }
    }
    changeDiv(new_array_divs[start],new_array_values[start],"red");
    changeDiv(new_array_divs[i-1],new_array_values[i-1],"red");

    var temp=new_array_values[start];
    new_array_values[start]=new_array_values[i-1];
    new_array_values[i-1]=temp;

    changeDiv(new_array_divs[start],new_array_values[start],"red");
    changeDiv(new_array_divs[i-1],new_array_values[i-1],"red");

    for(var t=start;t<=i;t++)
    {
        changeDiv(new_array_divs[t],new_array_values[t],"green");
    }

    return i-1;
}
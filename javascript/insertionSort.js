

function insertionSort()
{
    disableInputs();
    delayTime=0;

    for(var j=0;j<size;j++)
    
    {
        changeDiv(new_array_divs[j],new_array_values[j],"yellow");//Color update

        var key= new_array_values[j];
        var i=j-1;
        while(i>=0 && new_array_values[i]>key)
        {
            changeDiv(new_array_divs[i],new_array_values[i],"red");//Color update
            changeDiv(new_array_divs[i+1],new_array_values[i+1],"red");//Color update
            new_array_values[i+1]=new_array_values[i];

            changeDiv(new_array_divs[i],new_array_values[i],"red");//Height update
            changeDiv(new_array_divs[i+1],new_array_values[i+1],"red");//Height update
    
            changeDiv(new_array_divs[i],new_array_values[i],"blue");//Color update
            if(i==(j-1))
            {
                changeDiv(new_array_divs[i+1],new_array_values[i+1],"yellow");//Color update
            }
            else
            {
                changeDiv(new_array_divs[i+1],new_array_values[i+1],"blue");//Color update
            }
            i-=1;
        }
        new_array_values[i+1]=key;

        for(var t=0;t<j;t++)
        {
            changeDiv(new_array_divs[t],new_array_values[t],"green");//Color update
        }
    }
    changeDiv(new_array_divs[j-1],new_array_values[j-1],"green");//Color update
    enableInputs();
}

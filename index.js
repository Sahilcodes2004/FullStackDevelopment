function delte()
{
    document.getElementById("disp").value=" ";
}
function deleteLastElement()
{
    var display=document.getElementById("disp").value;
    document.getElementById("disp").value=display.slice(0,-1);
}
function append(val)
{
document.getElementById("disp").value+=val;
}
function calculate()
{
    let display=document.getElementById("disp");
    try{
        if(display.value==" ")
        {
            return ;
        }
        display.value=eval(display.value);
    }
    catch(error){
display.value=error;
    }
}
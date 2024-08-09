function todisplay(value)
{
  const display=document.getElementById('display');
  if(display.value==='0'){
    display.value=value;
  }
  else
    {
      display.value+=value;
    }
}
function cleardisplay()
{
  const display=document.getElementById('display');
  display.value='';
}

function deletedisplay(){
   const display=document.getElementById('display');
  display.value=display.value.slice(0,-1);
}

function result()
{
  const display=document.getElementById('display');
  const exp=display.value
  .replace(/x/g,'*')
  .replace(/÷/g,'/');
  
  
  try{
    display.value=eval(exp);
  }
  catch{
    display.value='Error';
  }
}
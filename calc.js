let output=document.getElementById("inp1");
function display(num){
  output.value+= num;
}
function calculate(){
      output.value= eval(output.value);
  }
  function clr(){
      output.value= "" ;
  }
  function del(){
      output.value = output.value.slice(0,-1);
  }
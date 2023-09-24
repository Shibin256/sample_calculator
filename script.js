function display(col){
            
    document.getElementById("headdis").textContent+=col


}

function equal(col){
            
   var text=document.getElementById("headdis").textContent
   var result=eval(text)
   document.getElementById("headdis").textContent=result


}

function clearButton(){
    document.getElementById("headdis").textContent=""

}

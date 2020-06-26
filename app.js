function setnum(){
    var name = document.getElementById('inputo')
    name.value = 0;
}
setnum()

function getNumber(num){
    var result = document.getElementById('inputo')
    result.value +=num;

}
function clearResult(){
    var cl = document.getElementById('inputo')
    cl.value = " ";
}
function getResult(){
    var result = document.getElementById('inputo')
    result.value = eval(result.value)
}

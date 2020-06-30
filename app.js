function setnum() {
    var name = document.getElementById('inputo')
    name.value = 0;
}
setnum()

function getNumber(num) {
    var result = document.getElementById('inputo')
    if (result.value === '0') {
        result.value = "";
        result.value += num;

    }
    else {
        result.value += num;
    }
}
function clearResult() {
    var cl = document.getElementById('inputo')
    cl.value = " ";
}
function getResult() {
    var result = document.getElementById('inputo')
    console.log(result.value)
    result.value = eval(result.value)
}

function clear1() {
    var clear = document.getElementById('inputo')
    clear.value = clear.value.slice(0, -1)

}
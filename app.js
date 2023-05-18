function getnum(num) {
    document.getElementById('result').value += num;
}

function clearnum() {
    document.getElementById('result').value = '';
}

function removenum() {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1);
}

function getresult() {
    document.getElementById('result').value = eval(document.getElementById("result").value)


}
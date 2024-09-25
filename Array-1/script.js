var array = [];
var rs = 0;

function adicionar() {
    var n1 = parseFloat(document.getElementById("n1").value);
    array.push(n1);
    rs += n1;
    document.getElementById("resp").innerText = array.join(', ');
    document.getElementById("soma").innerText = `Soma Total: ${rs}`;
}

function remover() {
    if (array.length > 0) {
        var removido = array.pop();
        rs -= removido;
        document.getElementById("resp").innerText = array.join(', ');
        document.getElementById("soma").innerText = `Soma Total: ${rs}`;
    }
}

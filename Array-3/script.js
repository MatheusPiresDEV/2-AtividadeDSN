function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let aleat = [];
for (let i = 0; i < 100; i++) {
    aleat.push(aleatorio(1, 100));
}


document.getElementById('numerosAleat').innerText = aleat.join(', ');

function buscar() {
    let numero = parseInt(document.getElementById('vet').value);
    let indice = aleat.indexOf(numero);
    let resultado = indice !== -1 ? `O índice do número ${numero} é ${indice}.` : `Número ${numero} não encontrado.`;
    document.getElementById('resultado').innerText = resultado;
}
function refresh() {
    window.location.reload();
}
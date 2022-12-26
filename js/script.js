function insert(num){
  let numero = document.getElementById('resultado').value;
  document.getElementById('resultado').value = numero + num;
}

function clearCampo(){
  document.getElementById('resultado').value = " " ;
}

function calcular(){
  var resultado = document.getElementById('resultado').value;
  if(resultado){
    var total = document.getElementById('resultado').value = eval(resultado);
    document.getElementById('resultado').value = total.toFixed(2);
  }
}

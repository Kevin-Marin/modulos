//calcula a area de um circulo
function area(raio) {
    let pi = 3.14
    let resultado = pi * raio ** 2
    return resultado;
  }
  


  
  //calcula a area de um retangulo
  const areaRetangulo = function (base, altura) {
    return base * altura;
  };
  
  const areaTriangulo = numero => numero ** 3;
  
  module.exports = {
    area,
    areaRetangulo,
    kubo
  }
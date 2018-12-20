
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
for (var i=0; i<=2; i++) {
    for(var j=0; j<=2; j++) {
        matriz[i][j] = i.toString() + j.toString();
        /*matriz[i][j] = '' + i + j; esta es otra forma de hacerlo: '' es un string vacio que al concadenarse con i y j se convierten en string*/
    }
  }
  console.log(matriz);
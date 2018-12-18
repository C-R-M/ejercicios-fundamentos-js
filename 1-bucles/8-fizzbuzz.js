// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
function multiplo(numero){
    resto3 = numero % 3;
    resto5 = numero % 5;
    if(resto3!=0 && resto5!=0){
        return console.log(numero);
    }
    if(resto3==0 && resto5==0){
        return console.log("GEEKSHUBS");
    }
    if(resto3==0){
        return console.log("GEEKS");
    }else{
        return console.log("HUBS");
    }
}
for (var cont=1; cont<=100; cont++) {
    multiplo(cont);
}
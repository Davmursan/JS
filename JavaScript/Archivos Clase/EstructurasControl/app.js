console.log("----------------------")
console.log("ESTRUCTURAS DE CONTROL")
console.log("----------------------")

//Estructura de control Secuencial
//Comentario de una línea
/*
    Comentarios
    de varias
    líneas
*/
console.log("--------------")
console.log("1 - Secuencial")
console.log("--------------")

const PI = 3.1416 //Las constantes suelen escribirse en MAYÚSCULAS
let edad = 18
let nombre = 'Manolín'

console.log("Hola " + nombre)
console.log("Tienes " + edad + " años")

console.log("--------------")
console.log("2 - Condicional/Selectiva")
console.log("--------------")

edad = 17 //Cambiamos valor a la variable

//Simple
if(edad >= 18){    
    console.log("Eres mayor de edad")
}

//Doble
if(edad >= 18){
    /*
    Los corchetes definen el ámbito, que es el código que se va a ejecutar dentro
    */
    console.log("Eres mayor de edad")
}else{
    console.log("Prohibido el acceso, chaval!")
}

edad = 7

//Múltiple (opción 1)
if(edad <= 6){
    console.log("Vas a Infantil")
}else if(edad <= 9){
    console.log("Vas a Primaria")
}else{
    console.log("Te vas para Secundaria")
}

edad = 6
//Múltiple (opción 2)
switch(edad){
    case 6:
        console.log("Tienes 6 años")
        break //Si no ponemos BREAK, ejecutará el siguiente case
    case 10:
        console.log("Tienes 10 años")
        break
    default:
        console.log("Eres un viejete")
}


console.log("---------------------------------")
console.log("3 - Iterativa/Repetitiva (Bucles)")
console.log("---------------------------------")

//Condición inicial; Condición de salida; Incremento de uno en uno (cont = cont + 1)
for(let cont=0; cont<100; cont++){
    console.log("Ejecuto FOR - " + cont)
}

//Condición inicial
let cont2 = 0
//Condición de salida
while(cont2<100){
    console.log("Ejecuto WHILE - " + cont2)
    //Evitamos Bucle infinito
    //Incremento de uno en uno (cont2 = cont2 + 1)
    cont2++
}

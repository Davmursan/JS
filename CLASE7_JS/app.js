// JavaScript (JS) ECMAscript 6 (ES6)
// variables con let()
// Python --> a = 7
// Java --> int a = 7;

let a = 7
let nombre = "Mike"
let apellido = "Sánchez"

/*
Python --> print(a)
Java --> System.out.println()
JS --> console.log()
*/ 

console.log(a)
console.log(nombre)
console.log(apellido)

nombre = "Miguel"
console.log(nombre)

// Python --> TAMANYO = 200
// JAVA --> final int TAMANYO = 200;

const TAMANYO = 200
console.log(TAMANYO)
//TAMANYO = 220 // Error
const PI = 3.1416
console.log(PI)


// Obsoleto --> forma anterior de declarar variables y constantes en JS
var penalti = true
let esVacio = true
console.log(esVacio)
esVacio = false
console.log(esVacio)


console.log(nombre + apellido)
console.log(nombre + " " + apellido)
let nombreApellido = nombre + " " + apellido
console.log(nombreApellido)

console.log("Hola, mi nombre es \"" + nombre + " " + apellido + "\"")

//%s %d %gç

console.log(`Hola, mi nombre es "${nombre} ${apellido}"`)

let saludo = "Hola"
console.log(saludo.length)
console.log("Hola".length)

let producto = "Manzanas"
let precio = 1.80
let cantidad = 7
// Has comprado 7 manzanas y el total es de 12.60
console.log(`Has comprado ${cantidad} ${producto} y el total es ${(precio*cantidad).toFixed(2)}€`)

console.log("Hola".charAt(2))//l
console.log("Hola".indexOf("l"))// La primera ocurrencia
console.log("Hola Hola".lastIndexOf())// La ultima ocurrencia
console.log("Hola".concat("Mundo"))
console.log("Hola".startsWith("Ho"))
console.log("Hola".toUpperCase())
console.log("Hola".toLowerCase())
let nombreCompleto = "Miguel Angel Sanchez Benito"
let nombreCompletoPalabras = nombreCompleto.split(" ")
console.log(nombreCompletoPalabras)
console.log(`El número de palabras es de: ${nombreCompletoPalabras.length}`)

//
console.log(nombreCompletoPalabras[0] + " " + nombreCompletoPalabras[1])
console.log(nombreCompletoPalabras[2]) 
console.log(nombreCompletoPalabras[3]) 

//strip, stripLeading y stripTrailing (JAVA)
console.log("        Adiós, Amigo!!         ".trim())
console.log("        Adiós, Amigo!!         ".trimStart())
console.log("        Adiós, Amigo!!         ".trimEnd())
console.log("        Adiós, Amigo!!         ".length)
console.log("        Adiós, Amigo!!         ".trim().length)

// Replace y replaceAll
console.log("Hola, Hola a todos".replace("Hola", "Adiós"))// primera ocurrencia
console.log("Hola, Hola a todos".replaceAll("Hola", "Adiós")) //Todas las ocurrencias

/*
    "CÓMO NO MOLA JAVASCRIPT"
*/

let frase = "        Cómo mola Javascript!!!"

console.log(frase.trimStart().replace("mola", "no mola").toUpperCase())

//To be contiued... INPUT (Prompt)
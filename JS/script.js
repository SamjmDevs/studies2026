//Esto es un comentario de línea en JS
/*
Esto es un comentario
de bloque 
en JS
*/

console.log("Hola mundo!")

//Vamos con variables
//var => puede accederse a ellas aunque no estén inicializadas, y peta
var hola = "Hello World"

//let => puede accederse a ella cuando de declaran, fuera de un function no funcionarán
let name = "Samu"

//const => son constantes
const ALIAS = "Pache"

console.log(hola + " soy " + name + " y me llaman "+ ALIAS)

//Tipos de datos
//Numéricos
let numberInt = 2 //Números enteros
let numberfloat = 4.5 //Números con decimales
let granNumb = BigInt(8854252855669987141225547852114) //Números muy tochos
let granNumb2 = 8854252855669987141225547852114n //Otra forma de definirlo, usarán la memoria que vayan necesitando
//Booleanos
let bool = false //Verdadero o falso, 1 || 0
//Texto
let cadena = "holi soy un string" //Cadenas de texto
let char = 'A' //Carácteres individuales
//Undefined, técnicamente es un dato
let noDefinido
//Null tambien es un dato no dato
let nulo = null //Intencionadamente es nula, la necesitamos vacía por algún motivo
//Symbol => Para crear cosas únicas
let mySymbol = Symbol("mySymbol")

//Mostramos los tipos de datos
console.log(typeof(granNumb))
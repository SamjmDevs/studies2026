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

console.log(hola + " soy " + name + " y me llaman " + ALIAS)

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
console.log(typeof (granNumb))

//Operadores
//Aritméticos
/*
+ => suma
- => resta
* => multiplicación
/ => división
% => módulo
** => exponente
// => división redondeada a la baja
++ => incremento
-- => decremento
*/
//De asignación
/**
+=x => suma a la variable x
-=x => resta a la variable x
/=x => variable dividida por x
*=x => variable multiplicada por x
%=x => el módulo de la variable dividida por x
**=x => la variable elevada a x 
*/
//Comparativos
/*
< => menor que
<= => menor o igual que
> => mayor que
>= => mayor o igual que
== => igual a (por valor)
=== => igual por identidad (tipo y valor)
!= => distinto a
!== => desigualdad por identidad (tipo y valor)
*/
//Lógicos
/*
&& => y
|| => o
! => niega el valor (invierte)
*/

//Strings
let miNombre = "Drachenwaschbär"
let saludo = "Hola, " + miNombre + "!"

console.log(saludo)

//Longitud de string
console.log(saludo.length)
//accedemos a caracter
console.log(saludo[5]) //accedemos a la posición 5, empezamos desde el 0

//Métodos comunes
console.log(miNombre.toUpperCase())
console.log(miNombre.toLowerCase())
console.log(miNombre.indexOf("s"))
console.log(miNombre.includes("v"))
console.log(miNombre.slice(0, 7))
console.log(miNombre.replace("Drachen", "Drako"))

//Template literals
let message = `Hola, este es 
              mi curso de javascript`

console.log(message)

//Interpolación de variables
let email = "drachen@wsachbar.com"
let messageIterpolado = `Hola, soy ${miNombre}! contáctame en ${email}`
console.log(messageIterpolado)

//Condicionales
//if, else-if, else
let age = 37
//
if (age == 37) {
    console.log("Tu edad es 37 jejeje")
}
//
if (age < 18) {
    console.log("No puede beber")
} else {
    console.log("Si que puedes beber")
}
//
if (age < 18) {
    console.log("No puedes beber")
} else if (age >= 18 && age < 50) {
    console.log("Puedes beber")
} else {
    console.log("Puedes beber, pero debes? Consulta tu medicación")
}

//Operadores Ternarios
console.log(age < 18 ? "Es menor de edad" : "Es mayor de edad")

//Switch

let day = 6
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "undefined"
}

console.log(`Hoy es ${dayName}`)

//Estructuras de datos
//Arrays
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicialización

myArray = [1]
myArray2 = new Array(3) //El número reserva el número de celdas

console.log(myArray)
console.log(myArray2)

//

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)  //Un número reserva el número de celdas, varios inicializa los datos

console.log(myArray)
console.log(myArray2)

//Otra forma de inicializar
myArray2 = new Array()

myArray2[0] = "Samu"
myArray2[1] = "Pache"
myArray2[2] = "Drachenwaschbär"
myArray2[3] = 32

console.log(myArray2)

myArray2.push("Español") //Añade en último lugar

console.log(myArray2)

myArray2.pop() //Elimina el último elmento del array y lo devuelve

//Shift
myArray2.shift() //Igual que el pop, también devuelve

//Unshift

myArray2.unshift(32, "Drachenwaschbär") //Mete varios elementos al principio del array

console.log(myArray2.length) //Da el número de elmentos del array

//Borrar un array
//myArray2 = []
//myArray2.length = 0 //Este es poco elegante

//Slice
//Devuelve copia superficial de una porción

myArray2.slice(1, 2)//El último no cuenta dentro del slice, aquí solo guardaría el elemento del índice 1

//Splice

//myArray2.splice(1, 2)//Elimina los elementos desde el índice del primer número elimina tantos elementos como indica el segundo número

//myArray2.splice(1,2,4)//Aquí desde la última posición que eliminamos añadimos el tercer número

//Comenzamos con sets
//Declaración
let mySet = new Set(["Samu", "Pache", 32, "Drachenwaschbär", 1.69])

console.log(mySet)

//Métodos comunes
//Añadir datos
mySet.add("pache@drachen.com") //Añade al final

mySet.delete("pache@drachen.com")//No borra el último elemento, tenemos que indicar el valor, devuelve bool, true si existe y fue borrado o false si no

//has
//Devuelve true si el elemento existe dentro del set o false si no
mySet.has("Drachen") //Devolvería false

//size
console.log(mySet.size) //Devuelve el número de elementos, como length de arrays

//Convertir de set a array
let arrayFromSet = Array.from(mySet)

//Convertir de array a set

let myArray3 = [1, 5, 69.69, "alto"]
let mySet2 = new Set(myArray3)

//Principal diferencia

mySet.add("Samu") //No añade elementos que estén ya en el set
//No admite duplicados
//Cualquier modificación (case sensitive) el set entiende que es otro valor

//Map => key && value

let myMap = new Map()

myMap = new Map([
    ["name", "Samu"],
    ["alias", "Pache"],
    ["edad", 32],
    ["altura", 1.69]
])

console.log(myMap)

//Métodos y propiedades

//set
myMap.set("nacionalidad", "Español")//Si no existe la key la añade
myMap.set("name", "Samuel Alejandro")//Si existe la actualiza
//La clave es única, los valores pueden repetirse

//get
console.log(myMap.get("alias"))//Devuelve el valor asociado a esa clave

//has
console.log(myMap.has("apellido"))//Devuelve false

//Delete
myMap.delete("altura")//Elimina la clave y el valor asociado

//clear

//myMap.clear()//Borra completamente el contenido del map

myMap.keys()//Devuelve el listado de claves
myMap.values()//Devuelve el listado de valores

//size
myMap.size //Devuelve el número de pares asociados al map

//entries
myMap.entries() //Devuelve todo, keys con sus values

//Comenzamos con bucles
//for
//inicializamos la variable, hasta cuando se repite, actualizacion de índice
for (let i = 0; i < 5; i++) {
    console.log("Hello")
}

let myNumbers = ["1-uno", "2-dos", "3-tres", "4-cuatro", "5-cinco"]
for (let i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i])
}

//while
let i = 0
while (i < myNumbers.length) {
    console.log(myNumbers[i])
    i++
}
i = 0
do {
    console.log("imprimimos i: " + i)
    i++
} while (i > myNumbers.length)

//for of
for (let valor of myArray) {
    console.log("for of de myArray:" + valor)
}
for (let valor of mySet) {
    console.log("for of de mySet:" + valor)
}
for (let valor of myMap) {
    console.log("for of de myMap:" + valor)
}
//Por cada elemento de las estructura de datos
//Buenas prácticas
//revisar bucles infinitos (evitar)
//usar break y continue
//continue se salta la iteracción actual y continúa en la siguiente iteracción
//break rompe el bucle

//Funciones
//Simple
function myFunction() {
    console.log("Hola función")
}

myFunction()

//Con parámetros
function myFuncParams(name, alias) {
    console.log("Hola, me llamo " + name + " pero me llaman " + alias)
}
myFuncParams("Samu", "Pache")

//Funciones anónimas
const myAnonFunc = function (name) {
    console.log("Soy el fantasma de " + name)
}
myAnonFunc("Drachenwaschbär")

//arrow functions
const myFuncArrow = (name) => {
    console.log("Mimimimimi dijo " + name)
}
//
myFuncArrow("Lizth")
//Parámetros
function sum(a, b) {
    console.log(a + b)
}
sum(2, 3)
//
function sumDefault(a = 0, b = 0) {
    console.log(a + b)
}
//
function sumatorio(a, b) {
    return a + b
}
//
let suma = sumatorio(2, 7)
console.log(suma)
//
//Funciones anidadas
//
function extern() {
    console.log("Capa externa")
    function intern() {
        console.log("Capa interna")
    }
    intern()
}
extern()
//intern() => fuera del scope salvo que la llamemos dentro de extern

//Funciones de orden superior
//Funciones que reciben otras funciones como argumentos
/*
function fuctSuperior(func, param){
func(param)
}
*/

//foreach
myArray.forEach(element => {
    console.log(element)
});
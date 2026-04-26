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
console.log(miNombre.slice(0,7))
console.log(miNombre.replace("Drachen","Drako"))

//Template literals
let message =`Hola, este es 
              mi curso de javascript`

console.log(message)

//Interpolación de variables
let email ="drachen@wsachbar.com"
let messageIterpolado = `Hola, soy ${miNombre}! contáctame en ${email}`
console.log(messageIterpolado)

//Condicionales

console.log("probando")

// HOISTING. JS hace una lectura inicial del código, recopila todas las variables con var (sin su valor) y todas las funciones (declaracion) y las sube al inicio del códigó

// console.log(myName) // ReferenceError: Cannot access 'myName' before initialization
console.log(myAge) // undefined
miFuncion() // mantiene la referencia


let myName = "bob";
var myAge = 29;
function miFuncion() {
  console.log("Hola, desde la funcion")
}


console.log(myName)
console.log(myAge)
miFuncion()


// let myName = "jorge"; // SyntaxError: Identifier 'myName' has already been declared
var myAge = 80;
console.log(myAge)
function miFuncion() {
  console.log("adios, desde la funcion")
}


miFuncion()


// SCOPES


// SCOPE GLOBAL

let globalVariable = "patata";

function unaFuncion() {

  for (let i = 0; i < 10; i++) {
    if (true) {
      console.log(globalVariable)
    }
  }

}

unaFuncion()


// SCOPE DE BLOQUE

if (true) {
  let blockVariable = "Variable con let"
  console.log(blockVariable)
  var blockVariable2 = "variable con var"
  console.log(blockVariable2)
}

// console.log(blockVariable2) // funciona pero no se recomienda. Mal uso de memoria
// console.log(blockVariable) //ReferenceError: blockVariable is not defined

{
  let variable = "patata"
  console.log(variable)
  let blockVariable = "aguacate"
  console.log(blockVariable)
  variableSinDeclarar = "variable sin declarar" // creando la variable en el scope global. NUNCA SE RECOMIENDA
}
// console.log(variable) //ReferenceError: variable is not defined

// SCOPE DE FUNCION

function ultimaFuncion() {

  console.log(variableEnFuncion2)

  let variableEnFuncion1 = "variable con let en funcion"
  console.log(variableEnFuncion1)
  var variableEnFuncion2 = "variable con var en funcion"
  console.log(variableEnFuncion2)

}

ultimaFuncion()
// console.log(variableEnFuncion1) // ReferenceError: variableEnFuncion1 is not defined
// console.log(variableEnFuncion2) // ReferenceError: variableEnFuncion2 is not defined

// RESUMEN

/* 
- no usar var. si vemos en docs, cambiar a let o const
- siempre declarar nuestras variables
- siempre que podamos, usar funciones de flecha.
- cuando nos preparemos a entrevistas, estudiar esto.

*/


// ACTIVIDAD 

const a = { num: 42 }; // ref 1234
const b = a; // ref 1234

// a = "patata"

b.num = 90;

console.log(a);
console.log(b);



function magicHat(obj) {
  // let obj = rabbit1 // ref 3456

  // si clono el objeto, entonces ya no modificaria el original

  obj.age = 10; // ref 3456 { name: "Bob", age: 10 }
  obj = { name: "Ada", age: 20 }; // ref 7890
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 }; // ref 3456 
  



const rabbit2 = magicHat(rabbit1); // ref 7890
  
console.log("rabbit1: ", rabbit1); // ref 3456 { name: "Bob", age: 10 }
console.log("rabbit2: ", rabbit2); // ref 7890 { name: "Ada", age: 20 }


 
let arr1 = ["patata", "aguacate", "tomate"] // ref abcd

let arr2 = arr1 // ref abcd

arr2.pop()

console.log(arr1, arr2)

arr1 = ["pikachu", "bulbasaur", "squirtle"] // ref ghjk



// const tele = {
//   encender() {
//     console.log(this)
//   }
// }

// OOP

const person = {
  firstName: "alicia",
  place: "Pais de las Maravillas",
  friends: ["Sombrero", "Gato Chesire", "Liebre de Marzo", "Humpty Dumpty", "Conejo blanco"],
  saludar(alguien) {
    // un metodo es una funcion perteneciente a un objeto
    console.log(this) // this dentro dentro de objetos apunta a la base del objeto donde es usuada.
    return `Hola ${alguien}, soy ${this.firstName}`
  },
  randomSize() {
    // me diga si alice es grande o alice es pequeña
    // 50% Alice es grande
    // 50% Alice es pequeña
    let randomDeCeroADiez = Math.random() * 10 // 0 - 0.999999
    let randomRedondeado = Math.floor(randomDeCeroADiez)

    if (randomRedondeado <= 4) {
      return `${this.firstName} es grande`
    } else {
      return `${this.firstName} es pequeña`
    }
  },
  desearFelizNoCumpleaños() {
    // buscar un amigo aleatorio de alice y desearle feliz no cumpleaños

    let indiceAleatorio = Math.floor( Math.random() * this.friends.length )
    console.log(indiceAleatorio)
    let amigoAleatorio = this.friends[ indiceAleatorio ]
    return `Feliz Feliz no cumpleaños a ${amigoAleatorio}`

  }
}

// console.log(person.friends[0])

let usuario = "naruto"

console.log( person.saludar(usuario) )
console.log( person.saludar(person.friends[3]) )

person.firstName = "Alice";

console.log(person.saludar("Conejo Blanco"))

console.log(person.randomSize())
console.log(person.desearFelizNoCumpleaños())



// CLASES

// las clases deberian crearse con nombre en PascalCasing

class Hero {

  constructor(parametroName, paramIdentity) {
    // las clases siempre deberian tener un constructor donde se definen todas propiedades que tendrá cada objeto de esta clase

    this.name = parametroName;
    this.identity = paramIdentity; // parametros que pueden ser diferentes cuando se crea el objeto
    this.esVillano = false; // o parametros que siempre son iguales cuando el objeto

  }

  // aqui tendremos todos los metodos que tendrá cada objeto de esta clase
  revelarIdentidadSecreta() {
    return `Soy ${this.name} y mi identidad secreta es ${this.identity}`
  }

  volverseVillano() {
    this.esVillano = true; // modificar una propiedad del objeto
    return `Yo, ${this.name} me he vuelto villano. MUAHAHAHA!` // opcionalmente devuelve un mensaje
  }

}


// Instanciar nuevos objetos basados en la clase

let heroe1 = new Hero("Iron Man", "Tony Stark") // creando un nuevo objeto de esa clase 
console.log(heroe1)
console.log(heroe1.revelarIdentidadSecreta())
console.log(heroe1.volverseVillano())

console.log(heroe1)

let heroe2 = new Hero("Black Widow", "Natasha Romanoff") // creando un nuevo objeto de esa clase 
console.log(heroe2)
console.log(heroe2.revelarIdentidadSecreta())

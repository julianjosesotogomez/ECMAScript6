function newFunction(name, age, country){
    var naem = name || 'oscar';
    var age = age || 32;
    var country = country || "CO";
    console.log(name,age,country);
}
//-----------------------------------------------------------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello +' ' +world;
console.log(epicPhrase);
//-----------------------------------------------------------------------------
let lorem = "Quiero escribir una frase epica \n" +
            "otra frase epica de prueba."
console.log(lorem);
//-----------------------------------------------------------------------------
let person= {
    'name':'Julian',
    'age':'24',
    'country':'CO'
}
console.log(person.name,person.age,person.country);
//-----------------------------------------------------------------------------
//Propiedades de objetos 
let name="Julian";
let age=24;
obj={name:name,age:age}
console.log(obj)


//es6
function newFunctionTwo(name = 'Oscar', age = 32, country='CO'){
    console.log(name,age,country);
};
newFunctionTwo();//Si no le paso ningun parametro, ejecuta con los parametros que tiene por defecto
newFunctionTwo('Julian',32,'MX');
//-----------------------------------------------------------------------------
let hello = "Hello";
let world = "World";
let epicPhraseTwo = `${hello} ${world}`;
console.log(epicPhraseTwo);
//-----------------------------------------------------------------------------
let loremTwo = `Quiero escribir otra frase epica  
otra frase epica de prueba.`
console.log(loremTwo);
//-----------------------------------------------------------------------------
let person= {
    'name':'Julian',
    'age':'24',
    'country':'CO'
}
let{name,age,country} = person;
console.log(name, age,country)
//-----------------------------------------------------------------------------
let teamOne = ['Oscar', 'Julian', 'Juan'];
let teamTwo = ['Nohora', 'Zayra','Ana'];
let education = ['Miller', ...teamOne,...teamTwo]
console.log(education);
//-----------------------------------------------------------------------------
//"let" es una nueva forma de asignacion para trabajar dentro del scope, en el bloque de codigo el cual esta llamado 
{
    var globalVar = "Global var";
}
{
    let globalLet = "Global let";
    console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);
//-----------------------------------------------------------------------------
const a="b";//Permite manejar siempre la asiganacion que se esta haciendo
a="a";
console.log(a);

var a="b";
a="a";
console.log(a);
//-----------------------------------------------------------------------------
//Propiedades de objetos mejoradas
let name="Julian";
let age=24;
obj={name,age};
console.log(obj);
//-----------------------------------------------------------------------------
//Arrow function
const names=[
    {name:"Julian",age:32},
    {name:"Ana",age:20}
]
//Mamera normal
let listOfNames=names.map(function(item){
    console.log(item.name);
})
//Arrow Function
let listOfNamesTwo =names.map(item =>console.log(item.name));
const listOfNamesThree=(name,age)=>{
    
}
let listOfNamesFour = name => {

}
const square = num => num * num;
//-----------------------------------------------------------------------------
//Promesas el cual se trabajan con el asincronismo
const helloPromise = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve("Hey!");
        }else{
            reject("Ups!");
        }           
    });
}
helloPromise()
    .then(response =>console.log(response))
    .catch(error => console.log(error))
//-----------------------------------------------------------------------------
//Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));
//-----------------------------------------------------------------------------
//Modulos 
import {hello} from './module';
hello();
//-----------------------------------------------------------------------------
//Generadores
function* helloWorld(){
    if(true){
        yield 'Hello'; //"yield" Guarda el estado de forma interna
    } 
    if(true){
        yield 'World';
    }
}
const generationHello = helloWorld();
console.log(generationHello.next().value);
console.log(generationHello.next().value);
console.log(generationHello.next().value);


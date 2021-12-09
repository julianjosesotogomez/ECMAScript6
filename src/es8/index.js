//"Object.entries" convierte los datos en una matriz
const data ={
    fronted:"Pekas",
    backend:"Julian",
    desing:"Juliana"
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);//Observar la cantidad de elementos 

//"Object.values"
const data ={
    fronted:"Pekas",
    backend:"Julian",
    desing:"Juliana"
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

//Pading
const string = 'Hello';
console.log(string.padStart(8,"hi "));
console.log(string.padEnd(12," ----------"));
console.log('food'.padEnd(12,"  ----------"))

//-----------------------------------------------------------------------------
//Async Await
const helloWorld = ()=>{
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(()=>resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

const hellowAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}
hellowAsync();

const anotherFunction = async () =>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();


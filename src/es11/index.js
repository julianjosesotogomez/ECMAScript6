const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
})

//-----------------------------------------------------------------------------
//Bigint
const aBigNumber = 9007199254740991n; 
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

//-----------------------------------------------------------------------------
//Promise.allSettled()
const promiseOne = new Promise ((resolve, reject) => reject("reject"));
const promiseTwo = new Promise ((resolve, reject) => resolve("resolve"));
const promiseOThree = new Promise ((resolve, reject) => resolve("resolveOne"));
Promise.allSettled([promiseOne,promiseTwo,promiseOThree])
    .then(response => console.log(response));

//-----------------------------------------------------------------------------
//globalThis
console.log(window);
console.log(globalThis);

//-----------------------------------------------------------------------------
//Nullish coalescing operator (??)
const foo = null ?? 'default string';
const fooOne = 'Julian' ?? 'default string';
console.log(foo);
console.log(fooOne);

//-----------------------------------------------------------------------------
//Optional chaining (?.)
const user = {};
console.log(user?.profile?.email);
if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}
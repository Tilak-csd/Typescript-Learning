// function msg(firstname:string, lastname:string, ag:number){
//     console.log("Hello", firstname, lastname, ag);

// }

// msg("99", "hkdfas", 11)

// function sum(a:number, b:number):number {
//     return a+b;

// }

// const value = sum(3, 6) 
// console.log(value);


// function isLegal(age:number):boolean{
//     if(age >= 18){
//         return true
//     }
//     else{
//         return false
//     }
// }
// // type inference -> number, string, boolean
// const value = isLegal(12)
// console.log(value);

// if not another funtion doesn't return dont return any type then give the type void 
// function runafteronse(fn: ()=> void){
//     setTimeout(fn, 1000)
// }
// runafteronse(function(){
//     console.log("i amanother function");

// })

// const a = ()=>{console.log("ehhlo");
// }
// a()

// assing type to object
// Interfaces
// interface User{
//     firstname : string,
//     lastname : string,
//     age :number
//     email ?: string // optional argument (?:)
// }

// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     } else {
//         return false
//     }
// }
// function greet(user: User) {
//    console.log("Hii", user.firstname);
   
// }

// isLegal({
//     firstname: "tilak",
//     lastname: "gubhajue",
//     age: 13,
//     email:"tilakg23@gmail.com"
// })
// greet({
//     firstname: "tilak",
//     lastname: "gubhajue",
//     age: 13,
// });

// enum - TypeScript

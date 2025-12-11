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

// enum Direction {
//     Up ="up", 
//     Right ="right",
//     Down = "down",
//     Left = "left"
// }

// function dosomthing(keypressed : Direction){
//     if(keypressed == Direction.Up){
//         console.log(Direction.Up);
//     }
//     if(keypressed == Direction.Down){
//         console.log(Direction.Down);
//     }
//     if(keypressed == Direction.Right){
//         console.log(Direction.Right);
//     }
//     if(keypressed == Direction.Left){
//         console.log(Direction.Left);
//     }
// }

// dosomthing(Direction.Up)
// dosomthing(Direction.Right)
// dosomthing(Direction.Down)
// dosomthing(Direction.Left)


// Popular UseCase of enum in TypeScript
// Express
// const express = require("express")
// const app = express()

// enum Response{
//     Success = 200,
//     NotFound  = 404,
//     Error = 500
// }

// app.get("/", (req, res)=>{
//     if(!req.query.userId){
//         res.status(Response.Error).json("Not nFound")
//     }
//     res.status(Response.Success).json(req.query)
// })

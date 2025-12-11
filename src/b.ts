// Generics - Interesting and Hard Concept
// function FirstEl(arr : (number | string)[]){
//     return arr
// }

// const value = FirstEl(['hello', "hii"])
// const value = FirstEl([1,2,3,4,6])
// console.log(value.toUpperCase());
// 1st Drawback, TS cannot identify which is type is the Return type even it is clearly said that [arrr, arr] is passed in string

// const value = FirstEl([12,56, "tillak"])
// 2nd Drawback, TS wont take the Diff datatypes in a single array

// Generic Solution
function identify<T>(arr : T[]) {
    return arr[0]
}

const value1 = identify<string>(['helloe', 'Tilak', "Man", "Gubhaju"])
const value2 = identify<number>([1, 4, 12, 18])

// export value1

console.log(value1?.toUpperCase());
console.log(value2);

// <T> = any T = any
// while calling the function <string> => <T> = string 
